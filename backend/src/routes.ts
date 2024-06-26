import { Router, Request, Response } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";

import { CreateEmpresaController } from "./controllers/empresa/CreateEmpresaController";
import { CreateTipoNegocioController } from "./controllers/tipoNegocio/CreateTipoNegocioController";
import { AuthEmpresaController } from "./controllers/empresa/AuthEmpresaController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailEmpresasController } from "./controllers/empresa/DetailEmpresasController";
import { CreateTipoProdutoController } from "./controllers/tipoProduto/CreateTipoProdutoController";
import { ListTipoProdutoController } from "./controllers/tipoProduto/ListTipoProdutoController";
import { ListTipoNegocioController } from "./controllers/tipoNegocio/ListTipoNegocioController";
import { ListEmpresaController } from "./controllers/empresa/ListEmpresaController";
import { CreateProdutoController } from "./controllers/produto/CreateProdutoController";
import { ListProdutoController } from "./controllers/produto/ListProdutoController";
import { CreateClienteController } from "./controllers/cliente/CreateClienteController";
import { ListClienteController } from "./controllers/cliente/ListClienteController";
import { ListCompraController } from "./controllers/compra/ListCompraController";
import { CreateCompraController } from "./controllers/compra/CreateCompraController";
import { ListByTipoProdutoController } from "./controllers/produto/ListByTipoProdutoController";
import { ListByTipoNegocioController } from "./controllers/empresa/ListByTipoNegocioController";
import { CreateDescontoController } from "./controllers/desconto/CreateDescontoController";
import { DeleteProdutoController } from "./controllers/produto/DeleteProdutoController";
import { EditProdutoController } from "./controllers/produto/EditProdutoController";
import { ListByIdProdutoController } from "./controllers/produto/ListByIdProdutoController";


const router = Router();

// UPLOAD DE IMAGENS
const upload = multer(uploadConfig.upload("./tmp"));



/********** ROTAS DAS EMPRESAS *********/
//Guardar uma nova empresa
router.post("/empresa", new CreateEmpresaController().handle);  

// Autenticar uma empresa
router.post("/login", new AuthEmpresaController().handle);

// Lista os usuários logados
router.get("/me", isAuthenticated, new DetailEmpresasController().handle)

// Lista todas as empresas
router.get("/empresas", new ListEmpresaController().handle);

// Lista as empresas por tipo de negocio
router.get("/tipo-negocio/empresas", new ListByTipoNegocioController().handle);
/********** ROTAS DAS EMPRESAS *********/


/********** ROTAS DOS TIPOS DE NEGOCIO *********/
// guardar novo tipo de negocio
router.post("/tipo-negocio", new CreateTipoNegocioController().handle);

// Lista os tipos de negocios
router.get("/tipos-negocios", new ListTipoNegocioController().handle);
/********** ROTAS DOS TIPOS DE NEGOCIO *********/


/********** ROTAS DOS TIPOS DE PRODUTO *********/
// guardar novo tipo de produto
router.post("/tipo-produto", new CreateTipoProdutoController().handle);

// Lista os tipos de produtos
router.get("/tipos-produtos", new ListTipoProdutoController().handle);
/********** ROTAS DOS TIPOS DE PRODUTO *********/


/********** ROTAS DOS PRODUTO *********/
// Cria um novo produto
// upload.single("file"): Recebe o nome do arquivo enviado no corpo da requisição
router.post("/produto", isAuthenticated, upload.single("file"), new CreateProdutoController().handle);

// Lista os produtos
router.get("/produtos", new ListProdutoController().handle);

// Lista os produtos por tipo de produto
router.get("/tipoProduto/produtos", new ListByTipoProdutoController().handle);

// Deleta um produto
router.delete("/produto", isAuthenticated, new DeleteProdutoController().handle);

// Edita um produto
router.put("/produto", isAuthenticated, upload.single("file"), new EditProdutoController().handle);

// Listar o valor de um produto pelo id
router.get("/produtos/id", new ListByIdProdutoController().handle);
/********** ROTAS DOS PRODUTO *********/


/********** ROTAS DOS CLIENTES *********/
// Cria um novo cliente
router.post("/cliente", new CreateClienteController().handle);

// Lista os clientes
router.get("/clientes", new ListClienteController().handle);
/********** ROTAS DOS CLIENTES *********/



/********** ROTAS DOS COMPRAS *********/
// List as compras
router.get("/compras", isAuthenticated, new ListCompraController().handle);

// Cria uma nova compra
router.post("/compras", new CreateCompraController().handle);
/********** ROTAS DOS CLIENTES *********/


/********** ROTAS DOS DESCONTOS *********/
// Cria um novo desconto
router.post("/desconto", new CreateDescontoController().handle);    
/********** ROTAS DOS DESCONTOS *********/




export { router };