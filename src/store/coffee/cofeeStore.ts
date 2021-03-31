type ADD_COFFEE = "ADD_COFFEE";
type REMOVE_COFFEE = "REMOVE_COFFEE";
type CoffeeActionTypes = ADD_COFFEE | REMOVE_COFFEE;

export interface CoffeeState {
	coffeeAmount: number;
}

export const addCoffee = {
	type: "ADD_COFFEE",
};

const initialState: CoffeeState = {
	coffeeAmount: 0,
};

const coffeeReducer = (
	state: CoffeeState = initialState,
	action: {
		type: CoffeeActionTypes;
	},
): CoffeeState => {
	switch (action.type) {
		case "ADD_COFFEE":
			return { coffeeAmount: state.coffeeAmount + 1 };
		case "REMOVE_COFFEE":
			return { coffeeAmount: state.coffeeAmount - 1 };
		default:
			return state;
	}
};

export default coffeeReducer;
