import express from "express";
import { SnacksRouter, CompanyRouter } from "./routers";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(SnacksRouter, CompanyRouter);

export { app };
