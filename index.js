const express = require("express");
const app = express();

// Ruta raíz con método GET
app.get("/", (req, res) => {
    res.send("Hello Profe");
});

// Ruta raíz con método POST
app.post("/", (req, res) => {
    res.json({ mensaje: "Has enviado un POST a la ruta raíz", numero: Math.random() });
});

// Subpágina '/hola' con método GET
app.get("/hola/", (req, res) => {
    res.send("Hola, esta es una subpágina");
});

// Subpágina '/hola' con método POST
app.post("/hola/", (req, res) => {
    res.json({ mensaje: "Has enviado un POST a /hola", numero: Math.random() });
});

// Listener del servidor en el puerto 8000
app.listen(8000, () => {
    console.log("Example app listening on port 8000!");
});