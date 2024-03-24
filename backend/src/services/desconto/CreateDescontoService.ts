import prismaClient from "../../prisma";

interface DescontoRequest {
    valor: number;
    descricao: string;
    dataInicio: Date;
    dataFim: Date;
    produto_id: string;
}



class CreateDescontoService {

    async execute({ valor, descricao, dataInicio, dataFim, produto_id }: DescontoRequest) {

        if (!valor) {
            throw new Error("Preencha os campos correctamente");
        }

        const desconto = await prismaClient.desconto.create({
            data: {
                valor,
                descricao,
                dataInicio,
                dataFim,
                produto_id
            }
        });
        return desconto;
    }

} export { CreateDescontoService }
