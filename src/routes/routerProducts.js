const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
// const { validateProduct } = require("../middlewares/validationMiddleware");
// // Rota para adicionar um novo produto com validação
// router.post("/", validateProduct, productsController.addProduct);

//! Rota para listar todos os produtos
router.get("/", productsController.getAllProducts);

//! Rota para adicionar um novo produto
router.post("/products", productsController.addProduct);

//!Rota para atualizar um produto existente
router.put("/products/:id", productsController.updateProduct);

//! Rota para excluir um produto
router.delete("/products/:id", productsController.deleteProduct);

module.exports = router;
