import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("projectsdb", "camilo", "123456", {
  host: "localhost",
  dialect: "postgres",
});
