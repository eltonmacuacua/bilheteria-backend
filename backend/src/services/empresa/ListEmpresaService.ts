import prismaClient from "../../prisma";

export class ListEmpresaService {
    async handle() {
        const empresas = await prismaClient.empresas.findMany({
            select: {
                id: true,
                nome: true,
                imgUrl: true,
                email: true,
                username: true,
                senha: true,
                endereco: true,
                telefone: true,
                website: true,
                statusConta: true

            }
        });
        return empresas;
    }
}