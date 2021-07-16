const router = require("express").Router();
const db = require("../database/database");

// todos los destinatarios
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM destinatarios where id_usuario = ?';
  
    db.query(sql,[id], (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        res.json(results);
      } else {
        res.send('Not result');
      }
    });
});

router.post('/', (req, res) => {
  const {rut, nombres, correo, telefono, banco, tipo_cuenta, num_cuenta} = req.body;
  if(rut && nombres && correo && telefono && banco && tipo_cuenta && num_cuenta){
    const sql = 'SELECT * FROM destinatarios';
    db.query(sql, (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        res.json(results);
      } else {
        res.send('Not result');
      }
    });
  }
  
});


module.exports = router;