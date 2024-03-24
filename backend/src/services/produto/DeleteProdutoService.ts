import prismaClient from "../../prisma";

interface DeleteRequest {
    id: string;
}

export class DeleteProdutoService {
    async execute({ id }: DeleteRequest) {
        try {
            // Desativar temporariamente as restrições de chave estrangeira
            await prismaClient.$executeRaw`SET session_replication_role = 'replica'`;
            
            await prismaClient.produtos.delete({
                where: {
                    id: id
                }
            });
            
            // Ativar as restrições de chave estrangeira novamente
            await prismaClient.$executeRaw`SET session_replication_role = 'origin'`;
            //mensagem de sucesso
            console.log("Produto excluído com sucesso.");
            return true;
        } catch (error) {
            // Lide com o erro de exclusão
            throw new Error('Erro ao excluir o produto.');
        }
    }
}
