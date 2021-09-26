const express = require ("express");  //________________________definir a função para requerir os modulos do node-express
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");      //______________________ ______________________________função para renderizar as views
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));   // ____________________________________________________função para uzar o CSS e JS

mongoose.connect("mongodb+srv://tiagobuffon:clever123456@cluster0.j83qz.mongodb.net/userDB");


app.get("/", function(req, res){        //_______________________________________função para renderizar a pagina de login
  res.render("index");
});


app.get("/novoUsuario", function(req, res){
  res.render("novoUsuario");
});

app.get("/confirmarUsuario", function(req, res){
  res.render("confirmarUsuario");
});

app.get("/novaSenha", function(req, res){
  res.render("novaSenha");
});

  app.get("/password", function(req, res){
    res.render("password");
});

    app.get("/paginaPrincipal", function(req, res){
      res.render("paginaPrincipal");

});

app.get("/cadastrarUsuarioInternal", function(req, res){
  res.render("cadastrarUsuarioInternal");

});

app.get("/consultarEditarUsuarios", function(req, res){
  res.render("consultarEditarUsuarios");

});

app.get("/cosultarEditarItensInventario", function(req, res){
  res.render("cosultarEditarItensInventario");

});


app.get("/consultarEditarItensInventario", function(req, res){
  res.render("consultarEditarItensInventario");

});


app.get("/inventario", function(req, res){
  res.render("inventario");

});

//____________________função para o banco de dados do registro de usuário



const userSchema = {
  loginNewUser: {type:String, required:true},
   email: {type:String, required:true},
  nomeCompleto: {type:String, required:true},
  dataNascimento: {type:Date},
  password: {type:String, required:true},
  confirmaSenha: {type:String, required:true}

};

const User = mongoose.model("User", userSchema);


 app.post("/novoUsuario", function (req, res){
  const newUser = new User({
   loginNewUser: req.body.loginNewUser,
   email: req.body.email,
   nomeCompleto: req.body.nomeCompleto,
   dataNascimento: req.body.dataNascimento,
   password: req.body.password,
   confirmaSenha: req.body.confirmaSenha
      });

newUser.save(function (err){
    if (err) {
          console.log(err);
    } else {
      res.render("paginaPrincipal");
    }
 });
});

app.post("/", function(req, res){
  const login = req.body.login;
  const password = req.body.password;
  //console.log(login, password);

  User.findOne({loginNewUser: login}, function(err, foundUser){
   if (err){
     console.log(err);
    }else{
      if (foundUser){
        if(foundUser.password === password){
         res.render("paginaPrincipal");
       }
      }
     }
  });
});


app.listen(process.env.PORT ||3000, function(){     //função para definir as portas do servidor
console.log("Servidor rodando");
});
