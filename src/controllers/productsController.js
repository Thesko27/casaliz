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
    const { linha, cor, quantidade, valor } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO products (linha, cor, quantidade, valor) VALUES ($1, $2, $3, $4) RETURNING *",
            [linha, cor, quantidade, valor]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Erro ao adicionar produto:", error);
        res.status(500).json({ error: "Erro ao adicionar produto" });
    }
};

//! Atualizar um produto existente
const updateProduct = async (req, res) => {
    const productId = req.params.id;
    const { linha, cor, quantidade, valor } = req.body;
    try {
        const result = await pool.query(
            "UPDATE products SET linha = $1, cor = $2, quantidade = $3, valor = $4 WHERE id = $5 RETURNING *",
            [linha, cor, quantidade, valor, productId]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error("Erro ao atualizar produto:", error);
        res.status(500).json({ error: "Erro ao atualizar produto" });
    }
};

//! Excluir um produto
const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        await pool.query("DELETE FROM products WHERE id = $1", [productId]);
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
