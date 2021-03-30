import { BrowserRouter, Route } from "react-router-dom";

import React from "react";
import { routes } from "./routes";

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			{routes.map((r, index) => (
				<Route key={`r_${index}_${r.path}`} path={r.path} exact={r.exact} component={r.component} />
			))}
		</BrowserRouter>
	);
};

export default Router;
