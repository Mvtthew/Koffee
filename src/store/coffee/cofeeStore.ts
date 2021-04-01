import Coffee from "../../models/Coffee";

type ADD_COFFEE = "ADD_COFFEE";
type CoffeeActionTypes = ADD_COFFEE;

export interface CoffeeState {
	drinked: Coffee[];
}

export const addCoffee = {
	type: "ADD_COFFEE",
};

const initialState: CoffeeState = {
	drinked: [],
};

const coffeeReducer = (
	state: CoffeeState = initialState,
	action: {
		type: CoffeeActionTypes;
	},
): CoffeeState => {
	switch (action.type) {
		case "ADD_COFFEE":
			return { drinked: [...state.drinked, new Coffee()] };
		default:
			return state;
	}
};

export default coffeeReducer;
