import { useDispatch, useSelector } from "react-redux";

import Coffee from "../../models/Coffee";
import React from "react";
import { RootState } from "../../store";

const Home: React.FC = () => {
	const drinked = useSelector<RootState, Coffee[]>((state) => state.coffeeReducer.drinked);

	return (
		<>
			<div className="home">
				<div className="card shadow-lg w-100">
					<div className="card-header">
						<h5 className="mb-0">Today</h5>
					</div>
					<div className="card-body">
						<p className="display-4 mb-0">
							<i className="bx bx-coffee me-2"></i>
							{drinked.length}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
