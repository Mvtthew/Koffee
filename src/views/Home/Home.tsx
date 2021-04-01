import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { RootState } from "../../store";
import { addCoffee } from "../../store/coffee/cofeeStore";

const Home: React.FC = () => {
	const dispatch = useDispatch();
	const coffeeAmount = useSelector<RootState, number>((state) => state.coffeeReducer.coffeeAmount);

	return (
		<>
			<div className="home">
				<div className="card shadow-lg w-100">
					<div className="card-header">
						<h2 className="mb-0">Coffe drined</h2>
					</div>
					<div className="card-body">
						{coffeeAmount}
						<button
							onClick={() => {
								dispatch(addCoffee);
							}}>
							++
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
