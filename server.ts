import express, { Application, json } from 'express'
import { dbConnection } from './src/db/config/db.connection';
import route from './src/routes/index'
import {} from 'dotenv/config'

const PORT = process.env.PORT;

const createServer = async (): Promise<Application | void> => {
    try {
        const server: Application = express();

        server.use(json());
        server.use(route);
        return server
    } catch (error) {
        return console.log('Error while creating server:', error);
    }
}

const startServer = async (server: Application): Promise<void> => {
    try {
        server.listen(PORT);
        await dbConnection()
        console.log(`====================Server started on port ${PORT}====================`);
    } catch (error) {
        return console.log('Error while starting server:', error);
    }
}

export { createServer, startServer };