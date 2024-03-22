import prismaClient from "../../prisma";

class ListClienteService {
    async handle() {
        const clientes = await prismaClient.clientes.findMany({
            select: {
                id: true,
                nome: true,
                telefone: true,
            },
            orderBy: {
                nome: "asc",
            },
        });

        return clientes;
    }
} export { ListClienteService }