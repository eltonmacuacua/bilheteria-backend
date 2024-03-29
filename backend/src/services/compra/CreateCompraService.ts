// CreateCompraService.ts

import prismaClient from '../../prisma';

interface CompraRequest {
    id_produto: string;
    nomeCliente: string;
    telefoneCliente: string;
    quantidade: number;
}

export class CreateCompraService {
    async execute({ id_produto, nomeCliente, telefoneCliente, quantidade }: CompraRequest) {
        // Iniciar uma transação
        const compra = await prismaClient.$transaction(async (prisma) => {
            // Verificar se o cliente já existe com base no número de telefone fornecido
            let cliente = await prisma.clientes.findFirst({
                where: { telefone: telefoneCliente }
            });

            // Se o cliente não existir, criar um novo cliente com o nome e o número de telefone fornecidos
            if (!cliente) {
                cliente = await prisma.clientes.create({
                    data: {
                        nome: nomeCliente,
                        telefone: telefoneCliente
                    }
                });
            }

            // Obter as informações do produto
            const produto = await prisma.produtos.findUnique({
                where: { id: id_produto },
                select: { quantidadeDisponivel: true }
            });

            // Verificar se o produto existe
            if (!produto) {
                throw new Error("Produto não encontrado");
            }

            // Verificar se a quantidade desejada está disponível
            if (quantidade > produto.quantidadeDisponivel) {
                throw new Error("Quantidade comprada excede a quantidade disponível");
            }

            // Criar a compra associada ao cliente
            const compra = await prisma.compra.create({
                data: {
                    id_produto,
                    id_cliente: cliente.id,
                    quantidadeComprada: quantidade
                }
            });

            // Atualizar a quantidade disponível do produto
            await prisma.produtos.update({
                where: { id: id_produto },
                data: {
                    quantidadeDisponivel: {
                        decrement: quantidade
                    }
                }
            });

            return compra;
        });

        return compra;
    }
}
