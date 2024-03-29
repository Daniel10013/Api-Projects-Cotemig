import { PokemonsController } from '../controller/Pokemons.js';
import express, { Request, Response } from "express"
import { Exception } from '../Exception/Exception.js';
import { setErrorInternal } from './Route.js';
const PokemonsObj = new PokemonsController();

export function routePokemon(app: express.Application) {
    app.get("/api/pokemons", async (req: Request, res: Response) => {
        try {
            await PokemonsObj.getPokemons(req, res)
        } catch (err) {
            if (err instanceof Exception)
                res.status(err.status).send({ msg: err.message });
            else
                setErrorInternal(res, err);
        }
    })

    app.get("/api/pokemon/:name", async (req: Request, res: Response) => {
        try {
            await PokemonsObj.getPokemon(req, res)
        } catch (err) {
            if (err instanceof Exception)
                res.status(err.status).send({ msg: err.message });
            else
                setErrorInternal(res, err);
        }
    })
}
