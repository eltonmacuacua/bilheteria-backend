import prismaClient from "../../prisma";

interface empresaRequest{
  tipoNegocio_id: string;
}

class ListByTipoNegocioService{
  async execute({ tipoNegocio_id }: empresaRequest){
    
    const findByCategory = await prismaClient.empresas.findMany({
      where:{
        tipoNegocio_id: tipoNegocio_id
      }
    })

    return findByCategory;
  }
}
export { ListByTipoNegocioService }