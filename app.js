/* Cargamos el módulo express */
var express = require("express");

/* Definimos una instancia de express */
var app = express();

/* Definimos jade como motor de plantillas */
app.set('view engine', 'jade');
/* Indicamos dónde están las plantillas */
app.set('views', './views/jade');

/* Decimos que cuando la ruta sea /, renderice el template index */
app.get('/', function (req, res) {
	res.render('index', { title: 'tutorial de express', message: 'Haga Basin'});
});

/* Lanzamos el server */
var server = app.listen(3000, function () {
  console.log('Servidor levantado en el puerto 3000');
});