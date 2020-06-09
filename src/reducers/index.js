import { combineReducers } from "redux";
import pokedexReducer from "./pokedexReducer";
import pokedexSearch from "./pokedexSearch";
import pokedexDetailReducer from "./pokedexDetail";
import pokedexArrayReducer from './pokdexArray'

const appReducer = combineReducers({
    pokedexes: pokedexReducer,
    pokedexSearches: pokedexSearch,
    pokedexDetails: pokedexDetailReducer,
    pokedexArray: pokedexArrayReducer,
})

export default appReducer