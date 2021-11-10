import { Snack } from ".prisma/client";
import { prismaClient } from "../../prisma";

interface Category {
  id: string;
  description: string;
}

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

  async filterByCategories(categories: string) {
    let snack = prismaClient.snack.findMany({
      where: {
        category_id: categories,
      },
    });
    return snack;
  }
}

export { SnacksService };
