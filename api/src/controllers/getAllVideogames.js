const getApiVideogames = require('./getApiVideogames');
const getDBVideogames = require('./getDBVideogames');

async function getAllVideogames(_req, res) {
try{
    const api = await getApiVideogames();
    const db = await getDBVideogames();
    Promise.all([api, db])
    .then((response) => {
        let[apiResponse, dbResponse] = response;
        return res.status(200).json(
            dbResponse.concat(apiResponse)
        );
    })    
} catch (err) {
    return res.status(404).json({
        error: "no se ha encontrado el videojuego"
    })
}
}
module.exports = getAllVideogames