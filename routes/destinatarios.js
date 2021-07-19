const router = require("express").Router();
const db = require("../database/database");

// todos los destinatarios
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const sql = `SELECT d.id_destinatario as id, d.rut, d.nombres, d.correo, d.telefono,
        d.num_cuenta, d.banco, t.nombre_cuenta
      FROM destinatarios d
      join tipo_cuenta t on t.id_tipo_cuenta = d.id_tipo_cuenta
      where d.id_usuario = ? `;

  db.query(sql, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results);
  });
});

router.post('/', (req, res) => {
  const { rut, id_usuario, nombres, correo, telefono, num_cuenta, banco, tipo_cuenta } = req.body;
  if (rut && id_usuario && nombres && correo && telefono && banco && tipo_cuenta && num_cuenta) {
    const sql = 'INSERT INTO `destinatarios` (`rut`, `id_usuario`, `nombres`, `correo`, `telefono`, `num_cuenta`, `banco`, `id_tipo_cuenta`) VALUES (?,?,?,?,?,?,?,?)';
    db.query(sql, [rut, id_usuario, nombres, correo, telefono, num_cuenta, banco, tipo_cuenta], (error, results) => {
      if (error) throw error;
      if (results.affectedRows > 0) {
        res.status(200).json({ "ok": true });
      } else {
        res.status(200).json({ "ok": false });
      }
    });
  } else {
    res.status(200).json({ "ok": false });
  }

});


module.exports = router;