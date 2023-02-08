const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');



// CONFIG

    // TEMPLATE ENGINE
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    // Body Parser
        app.use(bodyParser.urlencoded({extended:false}));
        app.use(bodyParser.json());
    //ROTAS

        app.get("/", function(req,res){
            Post.findAll({order: [['id', 'DESC']]}).then((posts) =>{
                res.render('home',{posts:posts})
            })
        })
        app.get('/cad', (req,res) =>{
            res.render('form')
        });

        app.post('/add', (req,res) =>{
            Post.create({
                titulo: req.body.titulo,
                conteudo: req.body.conteudo
            }).then(() => {
                res.send("Posted Sucessfully!")
            }).catch((erro) => {
                res.send("Error while Posting ===> " + erro)
            });
        });

        app.post('/delete/:id', (req, res) => {
            Post.destroy({where: {'id':req.params.id}}).then(()=>{
                res.send("Deleted Successfully!")
            }).catch((erro) => {
                res.send("There is no such Post!")
            })
        })














app.listen(8096, function(){
    console.log("Servidor Rodando na url http://localhost:8096");
});