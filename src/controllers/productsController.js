const pool = require("../models/conection");

//! Listar todos os produtos
const getAllProducts = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM products");
        res.json(result.rows);
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        res.status(500).json({ error: "Erro ao buscar produtos" });
    }
};

//! Adicionar um novo produto

const addProduct = async (req, res) => {
    const { referencia, marca, cor, quantidade, valor } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO products ( referencia, marca, cor, quantidade, valor) VALUES ($1, $2, $3, $4,$5) RETURNING *",
            [referencia, marca, cor, quantidade, valor]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Erro ao adicionar produto:", error);
        res.status(500).json({ error: "Erro ao adicionar produto" });
    }
};

//! Atualizar um produto existente
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { referencia, marca, cor, quantidade, valor } = req.body;
    try {
        const result = await pool.query(
            "UPDATE products SET referencia = $1, marca =$2, cor = $3, quantidade = $4, valor = $5 WHERE id = $6 RETURNING *",
            [referencia, marca, cor, quantidade, valor, id]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error("Erro ao atualizar produto:", error);
        res.status(500).json({ error: "Erro ao atualizar produto" });
    }
};

//! Excluir um produto
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query("DELETE FROM products WHERE id = $1", [id]);
        res.status(204).send();
    } catch (error) {
        console.error("Erro ao excluir produto:", error);
        res.status(500).json({ error: "Erro ao excluir produto" });
    }
};

module.exports = {
    getAllProducts,
    addProduct,
    updateProduct,
    deleteProduct,
};
