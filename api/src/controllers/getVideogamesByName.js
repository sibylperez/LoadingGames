require('dotenv').config();
const { Videogame, Genres, Platform } = require("../db");
const { Op } = require ('sequelize'); 
const { SEARCH_URL } = require('../utils/constants')
const { API_KEY } = process.env;
const axios = require("axios");

async function getVideogamesByName(req, res, next) {
 const name = req.query.name;
const videogamesDB = await Videogame.findAll({ where: {name: {[Op.like] : `%${name}%`}}, include: Genres}, { include: Platform});
 try {
  const apiGame  = await axios.get(`${SEARCH_URL}${name}&key=${API_KEY}`);
  let dataGame = apiGame.data.results.map((n) => {
  let game = {
    id: n.id,
      name: n.name,
      img: n.background_image,
      rating: n.ratings_count,
      platforms: n.platforms.map((p) => p.platform.name).filter(p => p != null).join(', '),
      genres: n.genres.map((g) => g.name).filter(g => g != null).join(', '),
  };
  return game
})
const allVGByName = videogamesDB.concat(dataGame)
  return res.status(200).json(allVGByName.slice(0, 15)); 
    } catch (error) {
      next(error);
    }
  }




module.exports = getVideogamesByName;