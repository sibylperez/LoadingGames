const { Genres } = require("../db");
const axios = require("axios");
const { GENRES_URL } = require("../utils/constants")


/* - [ ] __GET /genres__:
  - Obtener todos los tipos de géneros de videojuegos posibles
  - En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
 */

async function getAllGenres() {
    try{
      let apiUrl = GENRES_URL;
      const apigenresinfo = await axios.get(apiUrl);
      let apigenresresult = apigenresinfo.data.results;
      const genresDB = await Genres.findAll();
      let resultAllGenres = genresDB.concat(apigenresresult);

      let result = resultAllGenres.map(async (g) => {
         await Genres.findOrCreate({
          where: {
            name: g.name
          }
        });
      });
      return result;
    }catch (err) {
      console.log(err)
    }
};


module.exports = {
  getAllGenres,
};