
const express = require ("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

//gera as rotas para acessar as páginas

app.get("/", function(req, res){
  res.render("index");
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

  app.listen(process.env.PORT ||3000, function(){
  console.log("Servidor rodando");
});
