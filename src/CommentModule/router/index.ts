import { Router } from "express";
import { CommentController } from "../controller";

const router = Router();

router.get("/comments/last4", new CommentController().listLast4);
router.post("/comments", new CommentController().createComment);

export { router };
