
const express = require ("express");   //definir a função para requerir os modulos do node-express
const bodyParser = require("body-parser");

const app = express();              //constante para criar a função express

app.set("view engine", "ejs");       // função para renderizar as views

app.use(express.static("public"));   // função para uzar o CSS e JS


app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){        //função para renderizar a pagina de login
  res.render("index");
});

app.post("/", function(req, res){
  var login = req.body.nome;
  var password = req.body.senha;


})

app.get("/novoUsuario", function(req, res){
  res.render("novoUsuario");
})

app.get("/confirmarUsuario", function(req, res){
  res.render("confirmarUsuario");
})

app.get("/novaSenha", function(req, res){
  res.render("novaSenha");
})

  app.get("/password", function(req, res){
    res.render("password");
})

    app.get("/paginaPrincipal", function(req, res){
      res.render("paginaPrincipal");

})

app.get("/cadastrarUsuárioInternal", function(req, res){
  res.render("cadastrarUsuárioInternal");

})

app.get("/cosultarEditarItensInventario", function(req, res){
  res.render("cosultarEditarItensInventario");

})

app.get("/cosultarEditarItensUsuarios", function(req, res){
  res.render("cosultarEditarItensUsuarios");

})

app.get("/inventario", function(req, res){
  res.render("inventario");

})



//  app.listen(process.env.PORT ||3000, function(){     //função para definir as portas do servidor
  //console.log("Servidor rodando");
});
