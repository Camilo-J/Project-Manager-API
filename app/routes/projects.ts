import { Router } from "express";

const router = Router();

router.get("/");
router.post("/");
router.patch("/:id");
router.delete("/:id");
router.get("/:id");
router.get("/:id/task");

export { router };
