const { Genres } = require("../db");
const axios = require("axios");
const { GENRES_URL } = require("../utils/constants")


/* - [ ] __GET /genres__:
  - Obtener todos los tipos de géneros de videojuegos posibles
  - En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
 */

async function getAllGenres(_req, res) {
  try {
    let arrGenre = [];
    let apiUrl = GENRES_URL;
    const apigenresinfo = await axios.get(apiUrl);
    const apigenresresult = apigenresinfo.data.results;
    const genresDB = await Genres.findAll();
    let result = genresDB.concat(apigenresresult);
    for (let i = 0; i <= 5; i++) {
    result.forEach(p => {
      arrGenre.push(p.name)
     })
    apiUrl = apigenresinfo.data.next
  }
    for (let i = 0; i < arrGenre.length; i++) {
      await Genres.findOrCreate({
        where: {
          name: arrGenre[i]
        }
      })
    }
    return res.json(arrGenre)
  } catch (err) {
    res.status(404).json({
      error: "Género no encontrado"
    })
  }
};


module.exports = {
  getAllGenres,
};