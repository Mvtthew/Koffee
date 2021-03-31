import coffeeReducer from "./coffee/cofeeStore";
import { combineReducers } from "redux";

const combinedState = combineReducers({ coffeeReducer });

export type RootState = ReturnType<typeof combinedState>;
export default combinedState;
