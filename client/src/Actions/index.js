import axios from 'axios';


export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const SEARCH_BY_ID = 'SEARCH_BY_ID';
export const GET_GENRES = 'GET_GENRES';
export const GET_PLATFORMS = 'GET_PLATFORMS';
export const ADD_NEW_VIDEOGAME = 'ADD_NEW_VIDEOGAME';
export const RESET_ALL = 'RESET_ALL';



export function getVideogames() {
  return (dispatch) => {
    return axios.get('http://localhost:3001/videogames')
      .then(res => {
        dispatch({
          type: GET_VIDEOGAMES,
          payload: res.data
        });
      })
  }
}

export function searchByName(name) {
  return function (dispatch) {
    axios.get(`http://localhost:3001/videogame?name=${name}`)
      .then(res => {
        dispatch({
          type: SEARCH_BY_NAME,
          payload: res.data
        });
      })
  }
}

export function searchById(id) {
  return (dispatch) => {
    axios.get(`http://localhost:3001/videogame/${id}`)
      .then(res => {
        dispatch({
          type: SEARCH_BY_ID,
          payload: res.data
        });
      })
  }
}

export function getGenres() {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/genres`)
      .then(res => {
        dispatch({
          type: GET_GENRES,
          payload: res.data
        })
      })
  }
}

export function getPlatforms() {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/platforms`)
      .then(res => {
        dispatch({
          type: GET_PLATFORMS,
          payload: res.data
        })
      })
  }
}

export function addNewVideogame(game) {
  return (dispatch) =>
    axios.post(`http://localhost:3001/videogame`, game)
    .then((res) => {
      dispatch({
        type: ADD_NEW_VIDEOGAME,
        payload: res.data
      });
    });
}

export function resetAll() {
  return (dispatch) => {
    dispatch({
      type: RESET_ALL
    });
  };
};

// FILTROS