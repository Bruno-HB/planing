import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv'
dotenv.config();

const sequelize = new Sequelize(process.env.PG_UR, {
    logging: false,
    define: {
        updatedAt : 'updated_at',
        createdAt: 'created_at'
    }
});

export {sequelize as mySequelize};
