import { Sequelize } from "sequelize";
import "dotenv/config";

export const sequelize = new Sequelize(
  process.env.DB_NAME || "",
  process.env.USER || "",
  process.env.PASSWORD || "",
  {
    host: process.env.HOST,
    dialect: "postgres",
  }
);
