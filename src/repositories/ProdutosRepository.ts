import Produto from "../models/Produto";
import Database from "./Database";


export const CREATE_TABLE_PRODUTOS_SQL = `
    CREATE TABLE produtos (
        id  INTERG PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        preco TEXT NOT NULL
    );
`;

const ProdutosRepository = {
    lerTodos: () => {
        Database;
        return new Promise<Produto[]>((resolve, reject) => {
           const sql = "SELECT * FROM produtos";

           Database.all<Produto>(sql, (erro, produtos) => {
                if (erro !== null) {
                    reject(erro);
                } else {
                    resolve(produtos);
                }
           });
        });
    },

    ler: (id: number) => {
        return new Promise<Produto>((resolve, reject) => {
            const sql = `SELECT * FROM produtos WHERE id = ${id}`;

          Database.get<Produto>(sql, (erro, produto) => {
            if (erro !== null) {
                reject(erro);
            } else {
                resolve(produto);
            }
          });
        });
    },

    criar: (produto: Produto) => {
        return new Promise<Number>((resolve, reject) => {
            const sql = `INSERT INTO produtos (nome, preco) VALUES (?, ?)`;
            const params = [produto.nome, produto.preco];

            Database.run(sql, params, function(erro) {
                if ( erro !== null) {
                    reject(erro);
                } else {
                    resolve(this.lastID);
                }
            });
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