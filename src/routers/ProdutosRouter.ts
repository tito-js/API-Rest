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

ProdutosRouter.post("/", (request, response) => {
    if((request.body.nome === undefined) || (request.body.preco === undefined)) {
        response.status(400).end();
    } else if (isNaN (+request.body.preco)) {
        response.status(400).end();
    } else {
        const produto: Produto = {
            id: Date.now(),
            nome: request.body.nome,
            preco: +request.body.preco,
        };

        produtosMock.push(produto);
        response.status(201).json(produto);
    };
});

ProdutosRouter.put("/:id", (request, response) => {
    const id = +request.params.id;
    
    if (isNaN(id)) {
        response.status(400).end();
    } else if ((request.body.nome === undefined) || 
    (request.body.preco === undefined)) {
        response.status(400).end();
    } else {
        const produto = produtosMock.find(produto => produto.id = id);
        if (produto === undefined) {
            response.status(404).end();
        } else {
            produto.nome = request.body.nome;
            produto.preco = request.body.preco;
            response.status(200).end();
        };
    };
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