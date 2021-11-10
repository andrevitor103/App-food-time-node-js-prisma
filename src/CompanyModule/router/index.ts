import { Router } from "express";
import { CompanyController } from "../controller";

const router = Router();

router.get("/company", new CompanyController().findCompany);

export { router };
