import { DataTypes, Model } from "sequelize";
import { mySequelize } from "../database";

class Role extends Model {}

Role.init(
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
        tableName: 'roles',
    }
);

export default Role;