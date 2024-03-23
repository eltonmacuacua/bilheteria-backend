import prismaClient from "../../prisma";

interface ProductRequest{
  tipoProduto_id: string;
}

class ListByTipoProdutoService{
  async execute({ tipoProduto_id }: ProductRequest){
    
    const findByCategory = await prismaClient.produtos.findMany({
      where:{
        tipoProduto_id: tipoProduto_id
      }
    })

    return findByCategory;
  }
}
export { ListByTipoProdutoService }