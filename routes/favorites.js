import { FavoritesController } from "../controller/Favorites.js";

const FavoritesObj = new FavoritesController()

export function routeFavorite(app) {
    app.route("/api/favorite")
        .post(async (req, res) => {
            try {
                await FavoritesObj.createFavorite(req, res)
            }
            catch (err) {
                res.status(err.status).send({ msg: err.message });
            }
        })
        .delete(async (req, res) => {
            try {
                await FavoritesObj.deleteFavorite(req, res)
            }
            catch (err) {
                res.status(err.status).send({ msg: err.message });
            }
        })
        
}
