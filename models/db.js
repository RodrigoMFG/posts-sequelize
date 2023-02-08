    // CONEXÃO COM BANCO DE DADOS
    const { query } = require('express');
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('postagens', // Nome da Base de Dados
    'root', // Nome do Usuario
    'senha', // Senha
    { host: "localhost", // Endereço do Servidor
        dialect: 'mysql', // Linguagem de banco de dados
        query:{raw:true}
    });

    module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
    }