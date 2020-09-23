import express, {Request, Response} from 'express';
import {consultaJogadores, insereJogador, editaJogador, excluiJogador} from '../controllers/jogadores.controller';

const router = express.Router();

router.get('/', consultaJogadores);
router.post('/', insereJogador);
router.put('/', editaJogador);
router.delete('/', excluiJogador);

export default router;

