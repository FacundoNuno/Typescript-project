import {sequelize} from './src/db';
import app from './src/app';

console.log('Iniciando sincronización con la base de datos...');

sequelize
 .sync({force: false, logging: console.log})
 .then(() => {
  console.log('¡Base de datos conectada! :D');
  app.listen(3001, function () {
   console.log('La aplicación está escuchando en el puerto 3001!');
  });
 })
 .catch((err) => {
  console.error('Error al sincronizar con la base de datos:', err);
 });