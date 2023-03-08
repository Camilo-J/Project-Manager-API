import { Router } from "express";
import {
  createTask,
  getTasks,
  destroyTask,
  updateTask,
  getTask,
} from "../controllers/task";

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", destroyTask);
router.get("/id", getTask);

export { router };
