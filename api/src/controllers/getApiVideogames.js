const axios = require("axios");
const { BASE_URL } = require("../utils/constants");


async function getApiVideogames() {
  let allgames = [];
  let apiUrl = BASE_URL;
  try {
    for (let i = 0; i <= 5; i++) { //5 paginas trae 100 juegos
      const apigamesinfo = (await axios.get(apiUrl)).data;
      let apigamesresult = apigamesinfo.results.map((v) => {
        let info = {
          id: v.id,
          name: v.name,
          img: v.background_image,
          rating: v.ratings_count,
          platforms: v.platforms.map((p) => p.platform.name).filter(p => p != null).join(', '),
          genres: v.genres.map((g) => g.name).filter(g => g != null).join(', '),
        };
        return info
      });
      allgames = allgames.concat(apigamesresult)
      apiUrl = apigamesinfo.next; // se moviliza a la sig pag      
    }
    return (allgames);
  } catch (err) {
    console.log(err)
  }
}

module.exports = getApiVideogames