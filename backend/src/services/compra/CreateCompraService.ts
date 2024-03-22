import prismaClient from "../../prisma";

interface CompraRequest{
    dataCompra: Date;
    id_cliente: string;
    id_produto: string;
}

class CreateCompraService{
    async handle({dataCompra, id_cliente, id_produto}: CompraRequest){
        
        const compra = await prismaClient.compra.create({
            data: {
                dataCompra,
                id_cliente,
                id_produto
            }
        })
        return compra
    }
} export { CreateCompraService }    