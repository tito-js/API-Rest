import  Express  from "express";
import Produto from "../models/Produto";

const ProdutosRouter = Express.Router();

ProdutosRouter.get("/", (_request, response) => {
    response.json(produtosMock);
});

ProdutosRouter.get("/:id", (request, response) => {

    const id = +request.params.id; 
                //Number.parseInt(request.params.id);

    if (isNaN(id)) {
        response.status(400).end();
    } else {
        const produto = produtosMock.find(produto => produto.id === id);

        if (undefined === produto) {
            response.status(404).end();
        } else{
            response.status(200).json(produto);
        }
    }    
});

const produtosMock: Produto[] = [
    {
        id:1, 
        nome: "Suco de laranja",
        preco: 5, 
    }, 
    {
        id:2,
        nome: "Pão de queijo",
        preco: 7,
    },];

export default ProdutosRouter;