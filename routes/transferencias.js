const router = require("express").Router();
const db = require("../database/database");

// Obtiene todas las transferencias

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const sql = `select d.nombres, d.rut, d.banco, tc.nombre_cuenta, t.monto, DATE_FORMAT(t.fecha_creacion, '%d-%m-%Y %H:%i:%s') as fecha
    from transferencias t
    join usuarios u on u.id_usuario = t.id_usuario
    join destinatarios d on d.id_destinatario = t.id_destinatario and d.id_usuario = t.id_usuario
    join tipo_cuenta tc on tc.id_tipo_cuenta = d.id_tipo_cuenta
    where t.id_usuario = ?
    order by t.fecha_creacion desc`;

  db.query(sql, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results);

  });
});

router.post('/', (req, res) => {
  const { id_usuario, id_destinatario, monto } = req.body;
  if (id_usuario && id_destinatario && monto) {
    const sql = 'INSERT INTO `transferencias` (`id_destinatario`, `id_usuario`, `monto`, `fecha_creacion`) VALUES (?,?,?,?)';
    db.query(sql, [id_destinatario, id_usuario, monto, Date.now()], (error, results) => {
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