# Tito - Primeira API REST usando Node.js, TypeScript e Express

## Introdução

Este projeto é uma introdução à criação de uma API REST utilizando Node.js, TypeScript e Express. Ele serve como um ponto de partida para desenvolvedores que desejam começar a trabalhar com essas tecnologias.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado o seguinte:

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)
- TypeScript (pode ser instalado globalmente com `npm install -g typescript`)
- Um editor de código de sua escolha (recomendamos VSCode)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/tito-js/Back-End.git
cd Back-End
```

2. Instale as dependências:

```bash
npm install
```

## Executando o Projeto

1. Compile o TypeScript para JavaScript:

```bash
tsc
```

2. Inicie o servidor:

```bash
npm run dev
```

O servidor estará rodando em `http://localhost:5000`.

## Estrutura do Projeto

```
.
├── src
│   ├── controllers
│   │   └── exemploController.ts
│   ├── routes
│   │   └── exemploRoutes.ts
│   ├── app.ts
│   └── server.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

- `src/controllers`: Contém os controladores da API, responsáveis por lidar com as requisições e respostas.
- `src/routes`: Define as rotas da API e associa aos controladores.
- `src/app.ts`: Configura o Express e aplica middlewares.
- `src/server.ts`: Inicia o servidor.

## Uso da API

- Exemplo de requisição GET para obter todos os itens:
  ```
  GET http://localhost:5000/api/exemplo
  ```

- Exemplo de requisição GET para obter um item específico:
  ```
  GET http://localhost:5000/api/exemplo/1
  ```

- Exemplo de requisição POST para adicionar um novo item:
  ```
  POST http://localhost:5000/api/exemplo

  Corpo da Requisição:
  {
    "nome": "Novo Item"
  }
  ```

- Exemplo de requisição PUT para atualizar um item existente:
  ```
  PUT http://localhost:5000/api/exemplo/1

  Corpo da Requisição:
  {
    "nome": "Item Atualizado"
  }
  ```

- Exemplo de requisição DELETE para remover um item:
  ```
  DELETE http://localhost:5000/api/exemplo/1
  ```

## Contribuição

Se você quiser contribuir para este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Espero que este projeto sirva como uma introdução sólida à criação de APIs REST com Node.js, TypeScript e Express. Boa sorte com o seu desenvolvimento!
