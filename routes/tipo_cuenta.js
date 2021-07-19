const router = require("express").Router();
const db = require("../database/database");

// Obtiene todas los tipos de cuentas

router.get('/', (req, res) => {
  const { id } = req.params;

  const sql = `select * from tipo_cuenta`;

  db.query(sql, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results);

  });
});


module.exports = router;