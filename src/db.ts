import { Sequelize } from 'sequelize-typescript';
import config from './lib/config';
import { User } from './models/User';

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: config.dbHost,
    port: Number(config.dbPort),
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    models: [User],
});