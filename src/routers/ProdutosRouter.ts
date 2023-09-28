import  Express, { request, response }  from "express";
import Produto from "../models/Produto";
import ProdutosRepository from "../repositories/ProdutosRepository";

const ProdutosRouter = Express.Router();

ProdutosRouter.get("/", (_request, response) => {
    const produtos = ProdutosRepository.lerTodos();
    response.json(produtos);
});

ProdutosRouter.get("/:id", (request, response) => {
    const id = +request.params.id; 

    if (isNaN(id)) {
        response.status(400).end();
    } else {
        const produto = ProdutosRepository.ler(id);

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
            nome: request.body.nome,
            preco: +request.body.preco,
        };

        const id = ProdutosRepository.criar(produto);
        response.status(201).json(id);
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
        const sucesso = ProdutosRepository.atualizar({
            id,
            nome: request.body.nome,
            preco: request.body.preco
        });

        if (!sucesso) {
            response.status(404).end();
        } else {
            response.status(200).end();
        }
    };
});

ProdutosRouter.delete("/:id", (request, response) => {
    const id = +request.params.id    
    if (isNaN(id)) {
        response.status(400).end();
    } else {
        const sucesso = ProdutosRepository.apagar(id);
            if (!sucesso) {
                response.status(404).end();
            } else {
                response.status(200).end();
            };
    };
});


export default ProdutosRouter;