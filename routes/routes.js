const express = require("express");
const app = express();

app.use("/api/destinatarios", require("./destinatarios"));
app.use("/api/transferencias", require("./transferencias"));
app.use("/api/tipocuenta", require("./tipo_cuenta"));
app.use("/api/login", require("./login"));
module.exports = app;