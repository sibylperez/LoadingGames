const axios = require("axios");
const { BASE_URL } = require("../utils/constants");

async function getAllPlatforms() {
    let arrPlat = []
    try {
        let apiUrl = BASE_URL;
        const apiplatforminfo = await axios.get(apiUrl);
        let apiplatformresult = apiplatforminfo.data.results;
        for (let i = 0; i <= 5; i++) {
            apiplatformresult.map((p) => {
                let info = {
                    name: p.platforms[0].platform.name
                }
                arrPlat.push(info)
            });
        }
        apiUrl = apiplatforminfo.data.next;
        return arrPlat
    } catch (err) {
        console.log(err)
    }
};



module.exports = getAllPlatforms