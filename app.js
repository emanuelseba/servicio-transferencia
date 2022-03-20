require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

//Rutas
const routes = require("./routes/routes");

//vinvular app angular
app.use(express.static(path.join(__dirname, 'bin')));

app.use(bodyParser.json());
app.use(routes)

app.get('/', (req, res) => {
    res.send("Inicio");
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'bin/index.html'));
});


app.listen(port, () => {
    console.log(`EJECUTANDO EN : ${port} `);
})