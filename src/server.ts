import express, {Application} from 'express';
import jogadoresRouter from './routes/jogadoresRouter';
import bodyParser from 'body-parser';
const app: Application  = express();

app.use(bodyParser.json({limit: '5mb'}))
app.use('/jogadores', jogadoresRouter )

app.listen(8000, (): void => {
    console.log("Servidor rodando na porta 8000")
})