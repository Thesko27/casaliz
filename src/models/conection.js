const { Pool } = require("pg");
require("dotenv").config();

// Configuração da conexão com o banco de dados
const pool = new Pool({
    host: process.env.DATABASE_URL,
    user: process.env.USER,
    password: process.env.PASSWORD,
    db: process.env.DB_USERNAME,
    port: process.env.PORT,
});

module.exports = pool;
