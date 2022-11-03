import "reflect-metadata"
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import express from 'express'
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/Post";

const main = async () => {
    const orm = await MikroORM.init();
    await orm.getMigrator().up();

    const app = express()

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostResolver],
            validate: false
        }),
        context: () => ({ em: orm.em })
    })

    await apolloServer.start()

    apolloServer.applyMiddleware({ app, })

    app.listen(4000, () => {
        app.get('/', (_req, res) => {
            res.send("hello")
        })
        console.log('server started on localhost:4000')
    })
};

main().catch((err) => console.log(err)); 
