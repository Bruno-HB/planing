import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv'
dotenv.config();
import config from "./dbconfig.js";
const sequelize = new Sequelize(process.env.PG_URL);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
})()