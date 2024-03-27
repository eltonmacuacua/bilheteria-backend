import prismaClient from "../../prisma";

export class ListCompraService {
    async handle() {
        const compras = await prismaClient.compra.findMany({
            select: {
                id: true,
                id_produto: true,
                id_cliente: true,
                dataCompra: true
            }
        })
        return compras
    }
}