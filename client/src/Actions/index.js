import axios from 'axios';

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const SEARCH_BY_ID = 'SEARCH_BY_ID';
export const GET_GENRES = 'GET_GENRES';
export const GET_PLATFORMS = 'GET_PLATFORMS';
export const ADD_NEW_VIDEOGAME = 'ADD_NEW_VIDEOGAME';
export const RESET_ALL = 'RESET_ALL';
export const ORDER_ASC = 'ORDER_ASC';
export const ORDER_DESC = 'ORDER_DESC';
export const ORDER_NAME = 'ORDER_NAME';
export const ORDER_RATING = 'ORDER_RATING'
export const FILTER_ORIGIN = 'FILTER_ORIGIN';
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';


export function getVideogames() {
  return (dispatch) => {
    axios.get('http://localhost:3001/videogames')
      .then(res => {
        dispatch({
          type: GET_VIDEOGAMES,
          payload: res.data
        });
      })
  }
}

export function searchByName(name) {
  return (dispatch) => {
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
      type: RESET_ALL,
    });
  };
};


// FILTROS

export const orderAsc = (type) => (dispatch, getState) => {
  const filtered = getState().filteredVideogames;
  let videogamesOrder = []

  if(type === "AZ") {
      videogamesOrder = filtered.sort((a, b) => {
          if(a.name > b.name) return 1;
          if(a.name < b.name) return -1;
          return 0;
      })
  } else if(type === "asc") {
      videogamesOrder = filtered.sort(
          (a, b) => a.rating - b.rating
      )
  }
  dispatch({
      type: ORDER_ASC, 
      payload: {videogamesOrder, name: type}
  })
}

export const orderDesc = (type) => (dispatch, getState) => {
  const filtered = getState().filteredVideogames;
  let videogamesOrder = []
    
  if (type === "ZA") {
      videogamesOrder = filtered.sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
      });
  } else if (type === "desc") {
      videogamesOrder = filtered.sort(
          (a, b) => b.rating - a.rating
      );
  }
  dispatch({
      type: ORDER_DESC, 
      payload: {videogamesOrder, name: type,}
  });
}

export const filterOrigin = (src) => (dispatch, getState) => {
  const videogames = getState().videogames.filter(game => game.id.length > 8);
  dispatch({
      type: FILTER_ORIGIN, 
      payload: {
        videogames, 
        src
      }
  });
};

export const filterByGenre = (genres) => (dispatch, getState) => {
  let filterGenre = [];
  if (genres === "All") {
    filterGenre = getState().videogames;
} else {
    filterGenre = getState().videogames.filter((g) =>
        (g.genres).includes(genres)
    )
};       
  dispatch({
      type: FILTER_BY_GENRE,
      payload: {
          genres,
          videogameGenre: filterGenre,
      },
  });
};



