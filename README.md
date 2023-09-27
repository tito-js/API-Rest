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
git clone https://github.com/tito-js/API-REST.git
cd API-REST
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

O Postman é uma popular plataforma de colaboração para o desenvolvimento de APIs. Ele oferece uma interface amigável que permite aos desenvolvedores criar, testar e documentar APIs de forma eficaz. Com o Postman, você pode:

1. **Criar Requisições HTTP:**
   - Você pode criar e enviar solicitações HTTP como GET, POST, PUT, DELETE, etc., para testar endpoints de API.

2. **Organizar Requisições em Coleções:**
   - O Postman permite agrupar solicitações relacionadas em coleções, o que facilita a organização e a execução de testes.

3. **Automatizar Testes:**
   - É possível escrever scripts usando JavaScript para automatizar o teste de APIs. Isso é útil para testes de regressão e monitoramento de integridade.

4. **Documentar APIs:**
   - O Postman oferece a capacidade de criar documentação interativa para suas APIs, facilitando o entendimento e a utilização por parte de outros desenvolvedores.

5. **Compartilhar Coleções e Ambientes:**
   - Você pode compartilhar coleções e ambientes com membros da equipe ou com a comunidade, o que é útil para colaboração e teste.

6. **Integrações com Ferramentas de Desenvolvimento:**
   - O Postman se integra com muitas outras ferramentas populares de desenvolvimento, como Git, Jenkins, e mais.

7. **Simular Dados de Resposta:**
   - O Postman permite simular respostas de APIs, o que é útil para testar como o seu aplicativo lida com diferentes cenários de resposta.

8. **Monitoramento de APIs:**
   - Ele oferece uma funcionalidade para monitorar a saúde e o desempenho de suas APIs em tempo real.

9. **Trabalhar em Equipe:**
   - O Postman oferece funcionalidades de colaboração para equipes de desenvolvimento.

Para começar a usar o Postman, você pode baixar e instalar o aplicativo no [site oficial](https://www.postman.com/). Há versões disponíveis para Windows, macOS e Linux.

Além disso, o Postman tem uma extensa documentação e uma comunidade ativa, o que facilita aprender e tirar dúvidas sobre como usar a plataforma.

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
