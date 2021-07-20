import { GET_VIDEOGAMES, SEARCH_BY_NAME, SEARCH_BY_ID, GET_GENRES, GET_PLATFORMS, ADD_NEW_VIDEOGAME, RESET_ALL, ORDER_ASC, ORDER_DESC, ORDER_NAME, ORDER_RATING, FILTER_ORIGIN, FILTER_BY_GENRE
} from '../Actions/index';

const initialState = {
    videogames: [],
    searchAll: [],
    searchByName: [],
    searchById: [],
    genres: [],
    platforms: [],
    newGame: null,
    filteredVideogames: [],
    filterBy: 'All',
    orderBySelect:'Select'
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_VIDEOGAMES:
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
                newGame: action.payload
            }
        case RESET_ALL:
            return {
                ...state,
                videogames: [],
                filteredVideogames: [],
                orderBy: "Select",
                filterBy: "All",
            }        
        case ORDER_ASC: 
        case ORDER_DESC:
        case ORDER_NAME:
        case ORDER_RATING:        
            return {
                ...state, 
                filteredVideogames: action.payload.videogamesOrder,
                orderBy: action.payload.name,
         
        }        
        case FILTER_ORIGIN: return {
            ...state,
            filteredVideogames: action.payload.videogames,
            filterBy: action.payload.src,
        }
        case FILTER_BY_GENRE:
            return {
                ...state,
                filteredVideogames: action.payload.videogameGenre,
                filterBy: action.payload.genre,
            };
        default:
            return state;
        } 
    }

