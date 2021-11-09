import { Router } from "express";
import { SnacksController } from "../controller";

const router = Router();

router.get("/snacks", new SnacksController().listSnacks);
router.post("/snacks", new SnacksController().createSnack);

export { router };
