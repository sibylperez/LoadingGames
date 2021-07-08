const { Videogame } = require("../db");

async function addVideogame(name, description, creationDate, rating, platforms, genres, imagen) {
       let addedGame = await Videogame.create({
        name,
        description,
        creationDate,
        rating,
        imagen
      })
      await addedGame.addGenres(genres);
      await addedGame.addPlatforms(platforms)    
      return (addedGame)
  };


module.exports = addVideogame