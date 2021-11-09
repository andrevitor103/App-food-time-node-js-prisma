import { Router } from "express";
import { SnacksController } from "../controller";

const router = Router();

router.get("/snacks", new SnacksController().listSnacks);

export { router };
