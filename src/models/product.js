// models/Product.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Configuração da conexão com o banco de dados

const Product = sequelize.define("Product", {
    linha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    valor: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
});

module.exports = Product;
