import { Request, Response } from "express";
import { SnacksService } from "../service";

class SnacksController {
  async listSnacks(request: Request, response: Response) {
    const service = new SnacksService();
    const result = await service.listSnacks();
    return response.status(200).json(result);
  }

  async createSnack(request: Request, response: Response) {
    try {
      const datas = request.body;
      const service = new SnacksService();
      const result = await service.createSnack(datas);
      return response.status(201).json(result);
    } catch (error) {
      return response.status(400).json("Erro ao cadastrar");
    }
  }
}

export { SnacksController };
