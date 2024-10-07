import { Router } from "express";

import { taskController } from "./../controller";

const router = Router();

router.get("/", taskController.getAllTask);
router.post("/", taskController.create);
router.put("/:id", taskController.update);
router.delete("/:id", taskController.delete);

export default router;
