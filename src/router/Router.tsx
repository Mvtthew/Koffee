import { BrowserRouter, Route } from "react-router-dom";

import BottomNavigation from "../components/BottomNavigation/BottomNavigation";
import React from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import { routes } from "./routes";

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<TopNavigation />
			<main>
				{routes.map((r, index) => (
					<Route key={`r_${index}_${r.path}`} path={r.path} exact={r.exact} component={r.component} />
				))}
			</main>
			<BottomNavigation />
		</BrowserRouter>
	);
};

export default Router;
