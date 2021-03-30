import { BrowserRouter, Route } from "react-router-dom";

import Navigation from "../components/Navigation/Navigation";
import React from "react";
import { routes } from "./routes";

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Navigation />
			<main className="container-fluid">
				{routes.map((r, index) => (
					<Route key={`r_${index}_${r.path}`} path={r.path} exact={r.exact} component={r.component} />
				))}
			</main>
		</BrowserRouter>
	);
};

export default Router;
