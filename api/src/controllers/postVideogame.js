const { Videogame } = require("../db");

async function addVideogame(req, res) {
  const { name, description, creationDate, rating, platforms, genres, imagen } = req.body;
   try{
      let addedGame = await Videogame.create({
        name,
        description,
        creationDate,
        rating,
        imagen
      })
      await addedGame.addGenres(genres);
      await addedGame.addPlatforms(platforms);   
      return res.status(200).json(addedGame)
    }catch (err) {
      next(err);
  }
}

module.exports = addVideogame