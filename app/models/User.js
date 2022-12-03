import { DataTypes, Model } from "sequelize";
import { mySequelize } from "../database";

class User extends Model {}

User.init(
  {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      unicode: true,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      unicode: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unicode: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER
    },
    team_id: {
      type: DataTypes.INTEGER
    }
  },
  {
    mySequelize,
    tableName: "users",
  }
);

export default User;