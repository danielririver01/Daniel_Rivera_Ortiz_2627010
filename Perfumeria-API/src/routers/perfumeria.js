const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const perfumeria = require('../routers/sample.json');

router.get('/', (req, res) => {
 // Envía los datos de perfumeria como una respuesta HTTP
 res.send(perfumeria);
});

router.post('/', (req, res) => {
 const { nombre, cantidad, precio } = req.body;
 if (nombre && cantidad && precio) {
    const id = perfumeria.length + 1;
    const newperfumeria = _.extend({ id }, req.body);
    console.log(newperfumeria);
    perfumeria.push(newperfumeria);
    res.send(perfumeria);
 } else {
    res.send({ error: 'Error al ingresar los datos' });
 }
});
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id); // o Number(req.params.id)
  const { nombre, cantidad, precio } = req.body;
  if (nombre && cantidad && precio) {
    const index = _.findIndex(perfumeria, perfume => perfume.id == id); // o ===
    if (index !== -1) {
      const newperfumeria = _.extend(perfumeria[index], req.body);
      console.log(newperfumeria);
      perfumeria[index] = newperfumeria;
      res.send(perfumeria);
    } else {
      res.status(404).send({ error: 'Perfume no encontrado' });
    }
  } else {
    res.send({ error: 'Error al ingresar los datos' });
  }
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id); // o Number(req.params.id)
  const index = _.findIndex(perfumeria, perfume => perfume.id == id); // o ===

  if (index !== -1) {
    perfumeria.splice(index, 1);
    res.send(perfumeria);
  } else {
    res.status(404).send({ error: 'Perfume no eliminado' });
  }
});



module.exports = router;