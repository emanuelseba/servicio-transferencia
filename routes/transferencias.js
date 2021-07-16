const router = require("express").Router();
const db = require("../database/database");

// Obtiene todas las transferencias

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const sql = `select d.nombres, d.rut, d.dv, d.banco, tc.nombre_cuenta, t.monto, DATE_FORMAT(t.fecha_creacion, '%d-%m-%Y %H:%i:%s') as fecha
    from transferencias t
    join usuarios u on u.id_usuario = t.id_usuario
    join destinatarios d on d.id_destinatario = t.id_destinatario and d.id_usuario = t.id_usuario
    join tipo_cuenta tc on tc.id_tipo_cuenta = d.id_tipo_cuenta
    where t.id_usuario = ${id} `;
  
    db.query(sql, (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        res.json(results);
      } else {
        res.send('Sin Movimientos');
      }
    });
});


module.exports = router;