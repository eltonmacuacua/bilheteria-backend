import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface TipoNegocioRequest {
    nome: string;
    descricao: string;
}
class CreateTipoNegocioService {
    async execute({
        nome,
        descricao
    }: TipoNegocioRequest) {

        // verificar se usuario inseriu o nome
        if (!nome) {
            throw new Error("Insira um nome valido");   
        }


        const tipoNegocio = await prismaClient.tipoNegocio.create({
            data: {
                nome: nome,
                descricao: descricao,
            },
            select: {
                id: true,
                nome: true,
                descricao: true
            }
        });

        console.log("Tipo de negocio criado com sucesso");
        return tipoNegocio;
    }
}
export { CreateTipoNegocioService }