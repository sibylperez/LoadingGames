require('dotenv').config();
const {
  Videogame
} = require("../db");
const {
  v4: uuidv4
} = require("uuid");
const axios = require("axios");
const {
  BASE_URL
} = require("../utils/constants")
const {
  API_KEY
} = process.env;

//revisar y modificar 
/* - [ ] __GET /videogames__:
  - Obtener un listado de los primeras 15 videojuegos
  - Debe devolver solo los datos necesarios para la ruta principal
- [ ] __GET /videogames?name="..."__:
  - Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
  - Si no existe ningún videojuego mostrar un mensaje adecuado
- [ ] __GET /videogame/{idVideogame}__:
  - Obtener el detalle de un videojuego en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de videojuego
  - Incluir los géneros asociados
- [ ] __POST /videogame__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
  - Crea un videojuego en la base de datos
 */

async function getAllVideogames() {
  let allgames = [];
  let apiUrl = (BASE_URL + API_KEY)
    for (let i = 0; i <= 5; i++) { //5 paginas trae 100 juegos
      let apigames = (await axios.get(apiUrl)).data;
      let info = apigames.results.map((e) => {
        var vg = {
          id: e.id,
          name: e.name,
          img: e.background_image,
          rating: e.ratings_count,
          platforms: e.platforms.map((p) => p.platform.name).filter(p => p != null).join(', '),
          genres: e.genres.map(g => g.name)
        }
        return vg
      });
      apiUrl = apigames.next; // se moviliza a la sig pag
      return allgames = allgames.concat(info)
    }
  }

module.exports = {
  getAllVideogames,
};