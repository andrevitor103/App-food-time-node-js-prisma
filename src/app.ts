import express from "express";
import { SnacksRouter } from "./routers";

const app = express();

app.use(SnacksRouter);

export { app };
