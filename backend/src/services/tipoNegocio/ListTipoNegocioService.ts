import prismaClient from "../../prisma";

export class ListTipoNegocioService {
    async handle() {
        const tipoNegocios = await prismaClient.tipoNegocio.findMany({
            select: {
                id: true,
                nome: true,
                descricao: true
            }
        });
        return tipoNegocios;
    }
}