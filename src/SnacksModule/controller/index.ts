import { Request, Response } from "express";
import { SnacksService } from "../service";

class SnacksController {
  async listSnacks(request: Request, response: Response) {
    const service = new SnacksService();
    const result = await service.listSnacks();
    return response.status(200).json(result);
  }
}

export { SnacksController };
