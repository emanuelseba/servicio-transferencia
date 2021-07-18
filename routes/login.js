const router = require("express").Router();
const db = require("../database/database");

// todos los destinatarios
router.post('/', async (req, res) => {

  try {
    const { correo, password } = req.body;
    if (correo && password) {
      const sql = `SELECT id_usuario as iduser, correo, nombres FROM usuarios where correo = ? and password=? `;

      db.query(sql, [correo, password], (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
          res.status(200).json({ ok: true, results });
        } else {
          res.status(200).json({ ok: false });
        }
      });
    } else {
      res.status(404).send();
    }
  } catch (err) {
    res.status(500).send();
  }

});


module.exports = router;