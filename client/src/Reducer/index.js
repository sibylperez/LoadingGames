import { GET_VIDEOGAMES, SEARCH_BY_NAME, SEARCH_BY_ID, GET_GENRES, GET_PLATFORMS, ADD_NEW_VIDEOGAME, RESET_ALL, FILTER_ORIGIN, ORDER_AZ, ORDER_ZA, ORDER_ASC, ORDER_DESC, DISPLAY_GAMES
} from '../Actions/index';

const initialState = {
    videogames: [],
    searchByName: [],
    searchById: [],
    genres: [],
    platforms: [],
    filteredVideogames: [],
    displayGames: [],
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
                videogames: action.payload
            }
        case RESET_ALL:
            return {
                ...state,
                displayGames: []
            }
        case DISPLAY_GAMES:
            return {
                ...state,
                displayGames: action.payload
            }
        case ORDER_AZ: 
            const ordAZ = state.filteredVideogames.length > 0 ? state.filteredVideogames : state.videogames
            return {
                ...state, 
                filteredVideogames: ordAZ.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                }) 
            }
        case ORDER_ZA: 
            const ordZA = state.filteredVideogames.length > 0 ? state.filteredVideogames : state.videogames
            return {
            ...state,
            filteredVideogames: ordZA.sort((a, b) => {
                if (a.name < b.name) return 1;
                if (a.name > b.name) return -1;
                return 0;
            })
        } 
        case ORDER_ASC: 
        const ordAsc = state.filteredVideogames.length > 0 ? state.filteredVideogames : state.videogames
        return {
            ...state,
            filteredVideogames: ordAsc.sort((a, b) => {
                if (a.rating < b.rating) return 1;
                if (a.rating > b.rating) return -1;
                return 0;
            })
        }
        case ORDER_DESC: 
        const ordDesc = state.filteredVideogames.length > 0 ? state.filteredVideogames : state.videogames
        return {
            ...state,
            filteredVideogames: ordDesc.sort((a, b) => {
                if (a.rating > b.rating) return 1;
                if (a.rating < b.rating) return -1;                
                return 0;
            })
        }
        case FILTER_ORIGIN:
            return {
                ...state,
                /* filteredVideogames: action.payload.videogames,
                filterBy: action.payload.source, */
            };
        default:
            return state;
        } 
    }

