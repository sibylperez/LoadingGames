const { Videogame } = require("../db");

async function addVideogame(req, res, next) {
  const { name, description, creationDate, rating, platforms, genres, imagen } = req.body;
   try{
      let addGame = await Videogame.create({
        name,
        description,
        creationDate,
        rating,
        imagen,
        platforms
      })
      await addGame.setGenres(genres);  
      return res.status(200).json(addGame)
    }catch (err) {
      next(err);
  }
}

module.exports = addVideogame