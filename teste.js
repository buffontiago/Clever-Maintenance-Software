//JShint: esversion6

const express = require ("express");   //definir a função para requerir os modulos do node-express

const app = express();

app.get("/", function(req, res){        //função para renderizar a pagina de login
  res.send("HELLO WORLD!");
});



app.listen(process.env.PORT ||3000, function(){     //função para definir as portas do servidor
console.log("Servidor rodando");
});
