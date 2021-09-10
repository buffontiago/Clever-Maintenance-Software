const express = require ("express");   //definir a função para requerir os modulos do node-express
const bodyParser = require("body-parser");

const app = express();              //constante para criar a função express

app.set("view engine", "ejs");       // função para renderizar as views

app.use(express.static("public"));   // função para uzar o CSS e JS


//app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){        //função para renderizar a pagina de login
  res.render("index");
});



app.listen(process.env.PORT ||3000, function(){     //função para definir as portas do servidor
console.log("Servidor rodando");
});
