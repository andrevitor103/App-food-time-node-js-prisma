import { Router } from "express";

const router = Router();

router.get("/snacks", (req, res) => {
  res.send("list snacks");
});

export { router };
