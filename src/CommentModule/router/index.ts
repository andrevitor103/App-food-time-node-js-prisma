import { Router } from "express";
import { CommentController } from "../controller";

const router = Router();

router.post("/comments", new CommentController().createComment);

export { router };
