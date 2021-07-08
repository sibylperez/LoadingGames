require('dotenv').config();
const { Videogame, Genre } = require('../db');
const axios = require('axios');
const { Op } = require("sequelize");
const { SEARCH_URL } = require('../utils/constants');
const { API_KEY } = process.env;

async function getVideogameByName(req, res, next) {
  const name = req.query.name;
  try {
    const apiGame  = await axios.get(`${SEARCH_URL}${name}&key=${API_KEY}`);
    console.log(apiGame);
    let dataGame = apiGame.data;
     /*  let game = {
        id: dataGame.id,
          name: dataGame.name,
          img: dataGame.background_image,
          rating: dataGame.ratings_count,
          platforms: dataGame.platforms.map((p) => p.platform.name).filter(p => p != null).join(', '),
          genres: dataGame.genres.map((g) => g.name).filter(g => g != null).join(', '),
      }; */
        return res.send('Ok')
      //return res.status(200).json(game.slice(0, 15));
    } catch (error) {
      next(error);
    }
  }


module.exports = getVideogameByName;