const getAllVideogames = require('./getAllVideogames');

async function getVideogameByName(type, data) {
  const videogames = await getAllVideogames();
  if (type === 'GET_NAME'){
    const result = videogames.find(e => e.name === data)
    return result 
  }
}


module.exports = getVideogameByName;