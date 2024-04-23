
const express = require("express");
const app = express()

app.get("/hola/", (req,res) =>{ //Estamos generando un subpagina
    res.send("Hola")
});

app.get("/", (req,res) =>{ //Aqui se va a la página principal
    res.send("Hello Profe")
});

app.listen(8000, () =>{ //Aquí agrega la ubicación del puerto
    console.log("Example app listening on port 8000!")
});

/*
*/


