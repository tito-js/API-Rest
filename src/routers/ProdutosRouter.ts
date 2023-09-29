import  Express, { request, response }  from "express";
import Produto from "../models/Produto";
import ProdutosRepository from "../repositories/ProdutosRepository";

const ProdutosRouter = Express.Router();

ProdutosRouter.get("/", async (_request, response) => {
   ProdutosRepository.lerTodos()
   .then((produtos) => {
        response.json(produtos);
   })
   .catch(() => {
        response.status(400).end();
   });
});

ProdutosRouter.get("/:id", (request, response) => {

    const id = +request.params.id;

    if (isNaN(id)) {
        response.status(400).end();
    } else {
        ProdutosRepository.ler(id)
        .then(produto => response.status(200).json(produto))
        .catch(erro => response.status(404).end());   
    };   
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
        ProdutosRepository.criar(produto)
        .then((id) => {
            response.status(201).json(id);
        })
        .catch(() => {
            response.status(400).end();
        });
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
        const novoProduto: Produto = {
            id,
            nome: request.body.nome,
            preco: request.body.preco,
        }
        ProdutosRepository.atualizar(novoProduto)
        .then(() => {
            response.status(200).end();
        })
        .catch(() => {
            response.status(404).end();
        });
    };
});

ProdutosRouter.delete("/:id", (request, response) => {
    const id = +request.params.id    
    if (isNaN(id)) {
        response.status(400).end();
    } else {
        ProdutosRepository.apagar(id)
        .then(() => {
            response.status(200).end();
        })
        .catch(() => {
            response.status(404).end();
        });
    };
});


export default ProdutosRouter;