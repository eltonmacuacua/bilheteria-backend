import prismaClient from "../../prisma";

interface ClienteRequest {
    nome: string;
    telefone: string;
    statusConta: string;
}

class CreateClienteService {

    async handle({ nome, telefone, statusConta }: ClienteRequest) {
        const cliente = await prismaClient.clientes.create({
            data: {
                nome : nome,
                telefone: telefone,
                statusConta: true
            }, select: {
                id: true,
                nome: true,
                telefone: true,
            }
        })

        return cliente
    }
} export { CreateClienteService }