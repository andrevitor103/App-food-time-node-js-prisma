import express from "express";
import { SnacksRouter, CompanyRouter, CommentRouter } from "./routers";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(SnacksRouter, CompanyRouter, CommentRouter);

export { app };
