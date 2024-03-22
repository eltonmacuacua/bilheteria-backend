import prismaClient from "../../prisma";

class DetailEmpresaService {
    async execute(user_id) {
        const user = await prismaClient.empresas.findFirst({
            where: {
                id: user_id
            }, select: {
                id: true,
                nome: true,
                imgUrl: true,
                email: true,
                telefone: true,
                username: true,
                statusConta: true,
                tipoNegocio_id: true
            }
        })
        return { user };
    }
} export { DetailEmpresaService }