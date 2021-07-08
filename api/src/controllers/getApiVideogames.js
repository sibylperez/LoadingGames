const axios = require("axios");
const { BASE_URL } = require("../utils/constants");


async function getApiVideogames() {
  const allgames = [];
  let apiUrl = BASE_URL;
  try {
    for (let i = 0; i <= 5; i++) { //5 paginas trae 100 juegos
      const apigamesinfo = await axios.get(apiUrl);
      let apigamesresult = apigamesinfo.data.results;
      apigamesresult.map((v) => {
        let info = {
          id: v.id,
          name: v.name,
          img: v.background_image,
          rating: v.ratings_count,
          platforms: v.platforms.map((p) => p.platform.name).filter(p => p != null).join(', '),
          genres: v.genres.map((g) => g.name).filter(g => g != null).join(', '),
        };
        allgames.push(info);
      });
      apiUrl = apigamesinfo.data.next; // se moviliza a la sig pag      
    }
    return (allgames);
  } catch (err) {
    console.log(err)
  }
}

module.exports = getApiVideogames