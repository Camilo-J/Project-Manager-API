import { Router } from "express";
import {
  createProject,
  destroyProject,
  getProjects,
  updateProject,
  getProject,
  getTasks,
} from "../controllers/projects";

const router = Router();

router.get("/", getProjects);
router.post("/", createProject);
router.patch("/:id", updateProject);
router.delete("/:id", destroyProject);
router.get("/:id", getProject);
router.get("/:id/tasks", getTasks);

export { router };
