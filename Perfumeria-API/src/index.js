const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

// Configuración del puerto
const port = process.env.PORT || 3000;
app.set('port', port);
app.set('json space', 2);

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//routers
app.use(require('./routers/index'));
app.use('/api/perfumeria', require('./routers/perfumeria'));

// Inicio del servidor
app.listen(port, () => {
  console.log(`Server is running on port ${app.get('port')}`);
});
