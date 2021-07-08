const getApiVideogames = require('./getApiVideogames');
const getDBVideogames = require('./getDBVideogames');

async function getAllVideogames(_req, res) {
try{
    const api = await getApiVideogames();
    const db = await getDBVideogames();
    const result = db.concat(api); 
    return res.json(result)
} catch (err) {
    return res.status(404).json({
        error: "no se ha encontrado el videojuego"
    })
}
}
module.exports = getAllVideogames