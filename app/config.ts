import * as path from 'path';

require('dotenv').config({
	path: path.join(__dirname, '../.env')
});

export const config = {
	port: +process.env.SERVER_PORT,
	database: {
		type: process.env.DB_TYPE,
		host: process.env.DB_HOST,
		port: +process.env.DB_PORT,
		dbname: process.env.DB_NAME
	}
};