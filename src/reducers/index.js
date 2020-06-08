import { combineReducers } from "redux";
import pokedexReducer from "./pokedexReducer";
import pokedexDetailReducer from "./pokedexDetail";
import pokedexArrayReducer from "./pokdexArray";

const appReducer = combineReducers({
    pokedexes: pokedexReducer,
    pokedexDetails: pokedexDetailReducer,
    pokedexArray: pokedexArrayReducer,
})

export default appReducer