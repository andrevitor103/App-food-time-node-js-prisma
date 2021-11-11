import { Request, Response } from "express";
import { CommentService } from "../service";

class CommentController {
  async createComment(request: Request, response: Response) {
    try {
      const newMessage = request.body;
      let servico = new CommentService();
      await servico.validationFields(newMessage);
      let currentMessage = await servico.createComment(newMessage);
      return response.status(200).json(currentMessage);
    } catch (error) {
      return response.status(400).json("Erro ao cadastrar novo comentário");
    }
  }

  async listLast4(request: Request, response: Response) {
    const servico = new CommentService();
    const lastComments = await servico.listLast4();
    return response.status(200).json(lastComments);
  }
}

export { CommentController };
