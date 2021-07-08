const axios = require("axios");
const { BASE_URL } = require("../utils/constants");
const { Platform } = require('../db')

async function getAllPlatforms(_req, res) {
    let arrPlat = []
    try {
        let apiUrl = BASE_URL;
        const apiplatforminfo = await axios.get(apiUrl);
        let apiplatformresult = apiplatforminfo.data.results;
        const platformDB = await Platform.findAll();
        let result = platformDB.concat(apiplatformresult);
        for (let i = 0; i <= 5; i++) {
            result.forEach(p => {
                arrPlat.push(p.platforms[0].platform.name)
             })
            apiUrl = apiplatforminfo.data.next
          }
        for (let i = 0; i < arrPlat.length; i++) {
            await Platform.findOrCreate({
              where: {
                name: arrPlat[i]
              }
            })
          }
          return res.json(arrPlat)
        } catch (err) {
          res.status(404).json({
            error: "Plataforma no encontrada"
          })
        }
      };



module.exports = getAllPlatforms