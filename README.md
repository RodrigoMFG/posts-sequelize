# Projeto Básico de Aplicação com Node.js, Express e Handlebars
Este projeto é um exemplo básico de aplicação desenvolvido com Node.js, Express e Handlebars e foi criado como parte de estudos durante um curso de node.js. 
Seu objetivo é mostrar a criação de uma aplicação web para gerenciamento de postagens, incluindo a listagem, criação e exclusão de postagens.
A aplicação foi construída utilizando o framework Express, que facilita a criação de aplicações web com Node.js.
Além disso, foi utilizado o Handlebars para a renderização de páginas HTML.

## Tecnologias Utilizadas
- Node.js
- Express
- Handlebars
- Body-parser
- Sequelize

## Arquivos do Projeto
- index.js: Configuração da aplicação, incluindo a definição do motor de template Handlebars e do middleware Body Parser, além das rotas da aplicação.
- db.js: Configuração da conexão com o banco de dados MySQL.
- post.js: Modelo de postagem, que será utilizado para interação com o banco de dados.
- main.handlebars, form.handlebars, home.handlebars: Templates utilizados pelo Handlebars para renderizar as páginas HTML.

## Funcionalidades:
### Adicionar Posts:
 - Adicione um novo post acessando a rota '/cad' e preenchendo o formulário.
 
### Listar Posts:
 - Veja a lista de todos os posts acessando a rota raiz '/'.
 
### Deletar Posts:
 - Para deletar um post, clique no botão "Delete" na lista de posts.

## Como Utilizar este Projeto
Este projeto é apenas um exemplo básico e pode ser ampliado e personalizado de acordo com as necessidades de cada projeto. 
Ele serve como base para o estudo de aplicações web desenvolvidas com Node.js, Express e Handlebars.
