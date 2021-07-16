require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Rutas
const routes = require("./routes/routes");

app.use(express.json());
app.use(routes)

app.get('/', (req, res) => {
    res.send("Inicio");
});


app.listen(port, () => {
    console.log(`EJECUTANDO EN EL PORT: ${port} `);
})