import "./index.scss";
import "bootstrap";

import MobileOnly from "./components/MobileOnly/MobileOnly";
import React from "react";
import ReactDOM from "react-dom";
import Router from "./router/Router";

ReactDOM.render(
	<React.StrictMode>
		<MobileOnly />
		<Router />
	</React.StrictMode>,
	document.getElementById("root"),
);
