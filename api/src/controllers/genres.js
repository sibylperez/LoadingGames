const { Genres } = require("../db");
const axios = require("axios");
const { GENRES_URL } = require("../utils/constants")


/* - [ ] __GET /genres__:
  - Obtener todos los tipos de géneros de videojuegos posibles
  - En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
 */

async function getAllGenres(_req, res) {
  try {
    let apiUrl = GENRES_URL;
    const apigenresinfo = await axios.get(apiUrl);
    const apigenresresult = apigenresinfo.data.results;
    apigenresresult && apigenresresult.map(async (g) => {
      await Genres.findOrCreate({
          where: { name: g.name }
      });
  });
    const genresDB = await Genres.findAll();
    return res.status(200).json(genresDB)
  } catch (err) {
    res.status(404).json({
      error: "Género no encontrado"
    })
  } 
};


module.exports = {
  getAllGenres,
};