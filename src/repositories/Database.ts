import sqlite3 from "sqlite3";

const Database = new sqlite3.Database("db.sqlite", (erro)=> {
    if (erro) {
        console.log(erro);
    } else {
        console.log("Base de dados conectada com sucesso.");
    };
}); 

export default Database;