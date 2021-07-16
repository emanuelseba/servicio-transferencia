require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// MySql
// const connection = require("./database/database");

//Rutas
// const routes = require("./routes/routes");

app.use(express.json());
// app.use(routes)

app.get('/', (req,res) => {
    res.send("Inicio");
});

// connection.connect(error => {
//     console.log(error);
//     if (error) throw error;
//     console.log('Database server running!');
//   });

app.listen(port, () => {
    console.log(`EJECUTANDO EN EL PORT: ${port} `);
})