import { combineReducers } from "redux";
import pokedexReducer from "./pokedexReducer";

const appReducer = combineReducers({
    pokedexes: pokedexReducer
})

export default appReducer