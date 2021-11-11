import { prismaClient } from "../../prisma";

interface Comment {
  id: string;
  message: string;
  id_client: string;
  star_level: number;
}

class CommentService {
  validationFields(data) {
    const fieldsRequired = ["message", "star_level", "id_client"];
    let error = [];
    error = fieldsRequired.map((item) => data[item] != undefined);
    if (error.some((item) => item == false)) {
      throw new Error("Falta alguns campos...");
    }
  }

  async listLast4() {
    const comments = await prismaClient.comment.findMany({
      take: 4,
      include: {
        client: true,
      },
    });
    return comments;
  }

  async createComment(comment: Comment) {
    const newComment = await prismaClient.comment.create({
      data: {
        message: comment.message,
        star_level: Number(comment.star_level),
        id_client: comment.id_client,
      },
    });
    return newComment;
  }
}

export { CommentService };
