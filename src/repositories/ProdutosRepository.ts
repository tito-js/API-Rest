import Produto from "../models/Produto";
import Database from "./Database";

const ProdutosRepository = {
    lerTodos: () => {
        Database;
        return new Promise<Produto[]>((resolve, reject) => {
            resolve(mock)
        });
    },

    ler: (id: number) => {
        return new Promise<Produto>((resolve, reject) => {
            const produto = mock.find((produto) => {
                return produto.id === id;
            });
            if (produto === undefined) {
                reject();
            } else {
                resolve(produto);
            };
        });
    },

    criar: (produto: Produto) => {
        return new Promise<Number>((resolve, _reject) => {
            produto.id = Date.now();
            mock.push(produto);
            resolve(produto.id);
        });
    },

    atualizar: (novoProduto: Produto) => {
        return new Promise<void>((resolve, reject) => {
            const produto = mock.find((produto) => {
                return produto.id === novoProduto.id;
            });
            if (produto === undefined) {
                reject();
            } else {
                produto.nome = novoProduto.nome;
                produto.preco = novoProduto.preco;
                resolve();
            };
        });
    },

    apagar: (id: number) => { 
        return new Promise<void>((resolve, reject) => {
            const index = mock.findIndex(produto => produto.id === id);
            if (index === -1) {
                reject();
            } else {
                mock.splice(index, 1);
                resolve();
            };
        });
    },
};

export default ProdutosRepository;

const mock: Produto[] = [
    {
        id:1, 
        nome: "Suco de laranja",
        preco: 5, 
    }, 
    {
        id:2,
        nome: "Pão de queijo",
        preco: 7,
    },
];