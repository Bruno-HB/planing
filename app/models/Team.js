import { DataTypes, Model } from "sequelize";
import { mySequelize } from "../database";

class Team extends Model {}

Team.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unicode: true,
            unique: true,
        },
    },
    {
        mySequelize,
        tableName: 'teams',
    }
);

export default Team;