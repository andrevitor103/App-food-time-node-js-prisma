import { Request, Response } from "express";
import { CompanyServicce } from "../service";

class CompanyController {
  async findCompany(request: Request, response: Response) {
    const service = new CompanyServicce();
    const result = await service.findCompany();
    return response.status(200).json(result);
  }
}

export { CompanyController };
