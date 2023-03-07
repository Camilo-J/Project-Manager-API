import { Request, Response } from "express";
import { Project } from "../models/Project";
import { ProjectReq } from "../types/types";

const getProjects = async (req: Request, res: Response) => {
  const projects = await Project.findAll();
  res.json(projects);
};

const createProject = async (req: Request, res: Response) => {
  const data: ProjectReq = req.body;
  const project = Project.create({ ...data });

  res.json(project);
};

const updateProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data: ProjectReq = req.body;

  const project = await Project.findOne({
    where: {
      id,
    },
  });
  if (!project) res.status(404).json({ message: "Project not found" });

  project?.update({ ...data });

  await project?.save();
  res.json(project);
};

const destroyProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const project = Project.findOne({
    where: {
      id,
    },
  });
  if (!project) res.status(404).json({ message: "Project not found" });

  res.sendStatus(204);
};

export { getProjects, createProject, updateProject, destroyProject };
