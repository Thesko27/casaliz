CREATE DATABASE stock;

CREATE TABLE products (
    id SERIAL PRIMARY KEY, linha VARCHAR(255) NOT NULL, cor VARCHAR(255) NOT NULL, quantidade INTEGER NOT NULL, valor DECIMAL(10, 2) NOT NULL
);

-- id: Chave primária autoincrementada.
-- linha: Nome da linha do produto (por exemplo, “Roupas”, “Eletrônicos”).
-- cor: Cor do produto.
-- quantidade: Quantidade disponível no estoque.
-- valor: Preço unitário do produto.

-- Lembre-se de ajustar os tipos de dados e tamanhos das colunas conforme suas necessidades específicas. Após criar a tabela, você pode inserir registros usando comandos INSERT INTO ou interagir com ela por meio da API que criamos anteriormente. 📦🚀