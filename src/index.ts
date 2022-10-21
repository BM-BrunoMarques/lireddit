import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
// import { Post } from "./entities/Post";

const main = async () => {
    const orm = await MikroORM.init();
    await orm.getMigrator().up();
    // const emFork = orm.em.fork();
    // const post = emFork.create(Post, {
    //     title: "my first post"
    // })

    // const post = orm.em.create(Post, {
    //     title: "my first post"
    // })
    // await orm.em.persistAndFlush(post);

    // const posts = await orm.em.find(Post, {});
    // console.log(posts)

};

main(); 
