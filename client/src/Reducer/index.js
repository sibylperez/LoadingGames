import {
    GET_VIDEOGAMES,
    SEARCH_BY_NAME,
    SEARCH_BY_ID, 
    GET_GENRES,
    GET_PLATFORMS,
    ADD_NEW_VIDEOGAME,
    RESET_ALL,
} from '../Actions/index';

const initialState = {
    videogames: [],
    searchByName: [],
    searchById: [],
    genres: [],
    platforms: [],
    loading: false,
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_VIDEOGAMES:
        //console.log(action.payload)
            return {
                ...state,
                videogames: action.payload
            }
        case SEARCH_BY_NAME:
            return {
                ...state,
                searchByName: action.payload
            }
        case SEARCH_BY_ID:
            return {
                ...state,
                searchById: action.payload
            }
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case GET_PLATFORMS:
            return {
                ...state,
                platforms: action.payload
            }
        case ADD_NEW_VIDEOGAME:
            return {
                ...state,
                videogames: action.payload
            }
        case RESET_ALL:
            return {
                videogames: []
                //faltan los filtros
            }
            default:
                return state;
        } 
    }

