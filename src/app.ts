import express, {Application, Request, Response, NextFunction} from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import config from './lib/config';
import { sequelize } from './db';

sequelize.sync({ force: false, logging: console.log })
  .then(() => console.log('Database & tables created!'));

const app: Application = express();

// Configuración de middleware
app.use(express.urlencoded({extended: true, limit: '50mb'}));
app.use(express.json({limit: '50mb'}));
app.use(cookieParser());
app.use(morgan('dev'));

// Configuración de CORS
app.use(
 cors({
  origin: config.cors,
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
 })
);

// Middleware de manejo de errores
interface Error {
 status: number;
 message: string;
}

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
 const status = err.status || 500;
 const message = err.message || err;
 console.error(err);
 res.status(status).send(message);
});

// Configuración de rutas
import routes from './routes/index';
app.use('/api', routes);

// Inicialización del servidor
export default app;