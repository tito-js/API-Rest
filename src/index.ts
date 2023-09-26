import express from "express";
import ProdutosRouter from "./routers/ProdutosRouter";

const PORT = 4000;
const app = express();

app.get("/", (_request, response) => {
    response.send("API Produtos v. 1.0");
})

app.use("/produtos", ProdutosRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
