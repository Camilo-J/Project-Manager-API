import { DataType } from "sequelize-typescript";
import { sequelize } from "../config/db/db";
import { Task } from "./Task";

export const Project = sequelize.define("project", {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataType.STRING,
  },
  priority: {
    type: DataType.INTEGER,
  },
  description: {
    type: DataType.STRING,
  },
});

Project.hasMany(Task, {
  foreignKey: "projectId",
  sourceKey: "id",
});

Task.belongsTo(Project, {
  foreignKey: "projectId",
  targetKey: "id",
});
