const {Router } = require('express');
const router = Router();

router.get('/JHOJHO', (req, res) => {
  const data = {
    "name": "JHOJHO",
    "website": "JHOJHO.COM"
  };
  res.json(data); // Envía el objeto JSON como respuesta
});
module.exports = router;