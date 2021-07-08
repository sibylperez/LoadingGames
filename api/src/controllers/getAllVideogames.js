const getApiVideogames = require('./getApiVideogames');
const getDBVideogames = require('./getDBVideogames');

async function getAllVideogames() {
    const api = await getApiVideogames();
    const db = await getDBVideogames();
    /* Promise.all([api, db]).then(results => {
        const [apiResults, dbResults] = results;
        return dbResults.concat(apiResults) 
    })*/
    const result = db.concat(api); 
    return result
}

module.exports = getAllVideogames