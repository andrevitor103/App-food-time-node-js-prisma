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

  async filterByCategories(request: Request, response: Response) {
    try {
      const service = new SnacksService();
      const result = await service.filterByCategories(
        "ec7b0a1c-d90f-4074-8b7d-43f218876a26"
      );
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json("Dados inválidos");
    }
  }
}

export { SnacksController };
