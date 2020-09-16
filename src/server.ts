import express, {Request, Response, Router, Express} from 'express';

const app: Express  = express();

app.get('/', (req: Request, res: Response): Response => {
    return res.status(200).json({response: 'Ok'})
});

app.listen(8000, (): void => {
    console.log("Servidor rodando na porta 8000")
})