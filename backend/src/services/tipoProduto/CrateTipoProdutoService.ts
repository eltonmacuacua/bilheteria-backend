import prismaClient from "../../prisma";
interface TipoProdutoRequest {
    nome: string;
}
class CreateTipoProdutoService {
    async execute({
        nome,
    }: TipoProdutoRequest) {

        // verificar se usuario inseriu o nome
        if (!nome) {
            throw new Error("Insira um nome valido");   
        }

        const tipoProduto = await prismaClient.tipoProduto.create({
            data: {
                nome,
            },
            select: {
                id: true,
                nome: true,
            }
        });

        console.log("Tipo de produto criado com sucesso");
        return tipoProduto;
    }
}
export { CreateTipoProdutoService }