import express from "express";
import { SnacksRouter } from "./routers";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(SnacksRouter);

export { app };
