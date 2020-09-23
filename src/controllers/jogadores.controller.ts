import { Request, Response } from 'express';
import Jogador from '../models/jogador';


export async function consultaJogadores(req: Request, res: Response) : Promise<void>{
  try {
    const jogadores = await Jogador.findAll({order:[['id', 'ASC']]});
    res.status(200).json({ response: jogadores })
  } catch(error) {
    res.status(500).json({error});
  }
}

export async function insereJogador(req: Request, res: Response) : Promise<void> {
  try{
    const jogador = await Jogador.create({name: req.body.name, preferredName: req.body.preferredName});
    res.status(201).json({jogador});
  } catch (error) {
    res.status(500).json(error)
  }
}

export async function editaJogador(req: Request, res: Response) : Promise<void> {
  try {
    await Jogador.update({name: req.body.name}, {where: {id: 1}})
    res.status(204).json({})
  } catch(error) {
    console.log(error);
    res.status(500).json(error)
  }
}

export async function excluiJogador(req: Request, res: Response) : Promise<void> {
  try{
    await Jogador.destroy({
      where: {
        id: req.headers.id
      }
    });
    res.status(204).json({});
  } catch (error) {
    res.status(500).json(error)
  }
}