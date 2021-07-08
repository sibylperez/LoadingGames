require('dotenv').config();
const { Videogame, Genre, Platform } = require("../db");
const { BASE_ID } = require('../utils/constants')
const { API_KEY } = process.env;
const axios = require("axios");

async function getVideogameById(req, res, next) {
  const id = req.params.id;

  const uuidValidator = id.includes('-');
  if (uuidValidator) {
      try {
          const gameDB = await Videogame.findByPk(id, { include: Genre }, {include: Platform})
          res.send(gameDB)
      } catch (error) {
          res.send('Videojuego no existe')
      }
  } else { 
    try {
      const apiGame  = await axios.get(`${BASE_ID}${id}?key=${API_KEY}`);
      let dataGame = apiGame.data;
      let game = {
        id: dataGame.id,
          name: dataGame.name,
          img: dataGame.background_image,
          rating: dataGame.ratings_count,
          platforms: dataGame.platforms.map((p) => p.platform.name).filter(p => p != null).join(', '),
          genres: dataGame.genres.map((g) => g.name).filter(g => g != null).join(', '),
      };
      return res.status(200).json(game);
    } catch (error) {
      next(error);
    }
  }
}


module.exports = getVideogameById;