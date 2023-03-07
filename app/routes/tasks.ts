import { Router } from "express";
import { getTasks } from "../controllers/projects";

const router = Router();

router.get("/", getTasks);
router.post("/", getTasks);
router.patch("/:id", getTasks);
router.delete("/:id", getTasks);
router.get("/", getTasks);

export { router };
