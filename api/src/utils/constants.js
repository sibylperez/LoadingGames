require('dotenv').config();
const { API_KEY } = process.env;

const BASE_URL = 'https://api.rawg.io/api/games?key='+ API_KEY;
const GENRES_URL = 'https://api.rawg.io/api/genres?key='+ API_KEY;



module.exports = {
    BASE_URL,
    GENRES_URL,
}