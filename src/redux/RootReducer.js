import { combineReducers } from "redux";
import LocationReducer from "./reducers/LocationReducer";


const RootReducer = combineReducers({
    location: LocationReducer,
});

export default RootReducer;
