import "./index.scss";
import "bootstrap";

import MobileOnly from "./components/MobileOnly/MobileOnly";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import Router from "./router/Router";
import combinedState from "./store";
import { createStore } from "redux";

const store = createStore(combinedState);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<MobileOnly />
			<Router />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);
