import express, { Application, Request, Response, json } from "express";
import router from './src/routes/index'
import { dbConnection } from './src/db/config/db.connection';

const app: Application = express();

app.use(json());

app.use(router);

dbConnection();

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World!")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
