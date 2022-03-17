import {createStore} from "redux";
import {countries} from "./countries.js";

export const getCountriesList = state => state.countries;

const reducer = (state, action) => {
    return state;
};

const initialState = {
    countries: [...countries]
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;