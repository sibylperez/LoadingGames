const axios = require("axios");
const { BASE_URL } = require("../utils/constants");
const { Platform } = require('../db')

async function getAllPlatforms(_req, res) {
try {
  let apiUrl = BASE_URL;
  const apiplatforminfo = await axios.get(apiUrl);
  let apiplatformresult = apiplatforminfo.data.results;
  apiplatformresult && apiplatformresult.map(async (p) => {
  await Platform.findOrCreate({
    where: { name: p.platforms[0].platform.name }
      });
  });
  const platformDB = await Platform.findAll();
  return res.json(platformDB)
  } catch (err) {
    res.status(404).json({
    error: "Plataforma no encontrada"
    })
  }
};



module.exports = getAllPlatforms