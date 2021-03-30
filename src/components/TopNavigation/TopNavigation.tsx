import "./TopNavigation.scss";

import { Link } from "react-router-dom";
import React from "react";

const TopNavigation: React.FC = () => {
	return (
		<nav className="top-navigation navbar fixed-top navbar-expand-lg navbar-light shadow-lg">
			<div className="container-fluid px-3">
				<Link className="navbar-brand" to="/">
					<i className="bx bx-coffee me-1"></i>
					Koffee
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav mt-3">
						<li className="nav-item text-center">
							<Link className="nav-link active" to="/">
								Home
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default TopNavigation;
