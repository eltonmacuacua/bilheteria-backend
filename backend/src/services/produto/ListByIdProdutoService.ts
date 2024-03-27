import prismaClient from "../../prisma";

interface ProductRequest{
    id: string;
}

class ListByIdProdutoService{
    async execute({ id }: ProductRequest){
        
        const findByCategory = await prismaClient.produtos.findMany({
            where:{
                id: id
            }
        })

        return findByCategory;
    }
} 
export { ListByIdProdutoService }