import express from "express";
import Produto from "./models/Produto";

const PORT = 4000;
const app = express();

app.get("/", (_request, response) => {
    response.send("API Produtos v. 1.0");
})

app.get("/produtos", (_request, response) => {
    response.json(produtosMock);
});

app.get("/produtos/:id", (request, response) => {

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

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
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