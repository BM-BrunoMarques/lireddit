import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { Options } from '@mikro-orm/core';

export default {
    entities: [Post],
    dbName: "lireddit",
    type: "postgresql",
    debug: !__prod__,
    user: "postgres",
    password: "postgres",
    allowGlobalContext: true
} as Options