// middlewares/validationMiddleware.js
const validateProduct = (req, res, next) => {
    const { linha, cor, quantidade, valor } = req.body;

    // Exemplo de validação: verificar se todos os campos estão presentes
    if (!linha || !cor || !quantidade || !valor) {
        return res
            .status(400)
            .json({ error: "Todos os campos são obrigatórios" });
    }

    // Outras validações podem ser adicionadas aqui

    // Se tudo estiver válido, continue para a próxima rota
    next();
};

module.exports = {
    validateProduct,
};
