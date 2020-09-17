import express, {Request, Response, Router, Express} from 'express';
import router from './routes/jogadoresRouter';
import bodyParser from 'body-parser';
const app: Express  = express();

app.use(bodyParser.json({limit: '5mb'}))
app.use('/jogadores', router )

app.listen(8000, (): void => {
    console.log("Servidor rodando na porta 8000")
})