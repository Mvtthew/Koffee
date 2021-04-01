import "./BottomNavigation.scss";

import React from "react";
import { addCoffee } from "../../store/coffee/cofeeStore";
import { useDispatch } from "react-redux";

const BottomNavigation: React.FC = () => {
	const dispatch = useDispatch();

	const addNewCoffee = () => {
		dispatch(addCoffee);
	};

	return (
		<nav className="bottom-navigation fixed-bottom shadow-lg">
			<button className="btn">
				<i className="bx bx-wrench h4 m-0"></i>
				<p>Ustawienia</p>
			</button>
			<button
				className="btn btn-add btn-outline-dark btn-icon btn-icon-lg rounded-circle btn-add-coffee"
				onClick={addNewCoffee}>
				<i className="bx bx-coffee"></i>
			</button>
			<button className="btn">
				<i className="bx bx-chart h4 m-0"></i>
				<p>Statystyki</p>
			</button>
		</nav>
	);
};

export default BottomNavigation;
