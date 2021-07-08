const { Videogame, Genres, Platform } = require("../db");


async function getDBVideogames() {
  const videogamesDB = await Videogame.findAll({
    include: Genres,
  }, {
    include: Platform,
  });
  return videogamesDB;
}

module.exports = getDBVideogames