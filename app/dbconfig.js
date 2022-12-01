import * as dotenv from 'dotenv'
const config = {
    development: {
        username: process.env.PG_USERNAME,
        password: process.env.PG_PASSWORD,
        database: 'planning',
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        dialect: 'postgres',
    },
    test: {
        username: process.env.PG_USERNAME,
        password: process.env.PG_PASSWORD,
        database: 'planing',
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        dialect: 'postgres',
    },
    production: {
        username: process.env.PG_USERNAME,
        password: process.env.PG_PASSWORD,
        database: 'planing',
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        dialect: 'postgres',
    },
};

export default config;