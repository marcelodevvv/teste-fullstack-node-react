require('dotenv').config({ path: '.env.dev' });

import { ConnectionOptions } from 'typeorm';

const databaseConfig: ConnectionOptions = {
	type: 'mysql',
	host: process.env.HOST,
	port: 3306,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	entities: ['src/app/entities/*.ts'],
	synchronize: true,
};

export { databaseConfig };
