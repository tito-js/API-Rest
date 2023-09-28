import Produto from "../models/Produto";

const ProdutosRepository = {
    lerTodos: () => {
        return mock
    },
    ler: (id: number) => {
        return mock.find(produto => produto.id === id);
    },
    criar: (produto: Produto) => {
        produto.id = Date.now();
        mock.push(produto);
        return produto.id;
    },
    atualizar: (produto: Produto) => {
        const produtoExistente = mock.find(
            produtoExistente => produtoExistente.id === produto.id);

            if (produtoExistente === undefined) {
                return false;
            } else {
                produtoExistente.nome = produto.nome;
                produtoExistente.preco = produto.preco;
                return true;
            }

    },
    apagar: (id: number) => { 
        const index = mock.findIndex(produto => produto.id === id);

        if (index === -1) {
            return false;
        } else {
            mock.splice(index, 1);
            return true;
        };
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