const getAllVideogames = require('./getAllVideogames');

  async function getVideogameById(type, data) {
    const videogames = await getAllVideogames();
     if (type === 'GET_ID'){
      const result = videogames.find(e => e.id.toString() === data)
      console.log(result)
    } 
  }
  
  
  module.exports = getVideogameById;