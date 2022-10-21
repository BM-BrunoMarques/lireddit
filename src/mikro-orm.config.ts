import { Post } from "./entities/Post";
import { Options } from '@mikro-orm/core';
import path from "path";
import { __prod__ } from "./constants";

export default {
    migrations: {
        path: path.join(__dirname, "./migrations"),
        pattern: /^[\w-]=d\.[tj]s$/
    },
    entities: [Post],
    dbName: "lireddit",
    type: "postgresql",
    debug: !__prod__,
    user: "postgres",
    password: "postgres",
    allowGlobalContext: true,
} as Options