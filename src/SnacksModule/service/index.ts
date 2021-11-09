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
}

export { SnacksService };
