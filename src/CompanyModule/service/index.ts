import { prismaClient } from "../../prisma";

class CompanyServicce {
  async findCompany() {
    const company = await prismaClient.company.findFirst({
      include: {
        adress: true,
        contact: true,
      },
    });
    return company;
  }
}

export { CompanyServicce };
