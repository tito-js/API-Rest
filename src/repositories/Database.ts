import sqlite3 from "sqlite3";
import { CREATE_TABLE_PRODUTOS_SQL } from "./ProdutosRepository";

const Database = new sqlite3.Database("db.sqlite", (erro)=> {
    if (erro) {
        console.log(erro);
    } else {
        console.log("Base de dados conectada com sucesso.");

        Database.run(CREATE_TABLE_PRODUTOS_SQL, (erro) => {
            if (erro !== null) {
                //tabela já criada
            } else {
                console.log("Tabela produtos criada com sucesso!")
            }
        });
    };
}); 

export default Database;