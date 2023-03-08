import { Request, Response } from "express";
import { Project } from "../models/Project";
import { Task } from "../models/Task";

const getTasks = async (req: Request, res: Response) => {
  const projects = await Project.findAll();
  res.json(projects);
};

const getTaskFromProject = async (id: string) => {
  const tasks = await Task.findAll({ where: { id } });
  return tasks;
};

const getTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = Task.findOne({
    where: {
      id,
    },
  });

  if (!task) res.status(404).json({ message: "Task not found" });

  res.json(task);
};

const createTask = async (req: Request, res: Response) => {
  const data = req.body;
  const task = await Task.create({ ...data });
  res.json(task);
};
const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const task = await Task.findOne({
    where: {
      id,
    },
  });
  task?.update({
    ...data,
  });
  await task?.save();

  res.json(task);
};
const destroyTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const task = await Task.findOne({
    where: {
      id,
    },
  });
  task?.destroy({
    ...data,
  });
  if (!task) res.status(404).json({ message: "Task not found" });

  res.sendStatus(204);
};

export {
  getTasks,
  getTaskFromProject,
  createTask,
  updateTask,
  destroyTask,
  getTask,
};
