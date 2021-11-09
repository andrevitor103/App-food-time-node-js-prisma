import { Snack } from ".prisma/client";
import { prismaClient } from "../../prisma";

class SnacksService {
  async listSnacks() {
    const snacks = await prismaClient.snack.findMany({
      include: {
        category: true,
      },
      orderBy: {
        name: "desc",
      },
    });
    return snacks;
  }

  async createSnack(currentSnack: Snack) {
    const newSnack = await prismaClient.snack.create({
      data: {
        name: currentSnack.name,
        price: currentSnack.price,
        category_id: currentSnack?.category_id,
        ingredients: currentSnack?.ingredients,
      },
    });
    return newSnack;
  }
}

export { SnacksService };
