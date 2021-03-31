import "./TopNavigation.scss";

import React, { useRef } from "react";

import { Collapse } from "bootstrap";
import { Link } from "react-router-dom";

const TopNavigation: React.FC = () => {
	const collapseRef = useRef<HTMLDivElement>(null);

	const toggleNav = () => {
		if (collapseRef.current) {
			const c = new Collapse(collapseRef.current);
			c.hide();
		}
	};

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
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={toggleNav}>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" ref={collapseRef}>
					<ul className="navbar-nav mt-3">
						<li className="nav-item text-center">
							<Link className="nav-link active" to="/" onClick={toggleNav}>
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
