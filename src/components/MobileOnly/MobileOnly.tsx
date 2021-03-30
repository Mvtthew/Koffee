import "./MobileOnly.scss";

import React from "react";

const MobileOnly: React.FC = () => {
	return (
		<div className="mobile-only d-none d-sm-flex align-items-center justify-content-center">
			<div>
				<h1 className="text-center">
					<i className="bx bx-phone"></i>
				</h1>
				<h1>You need to load this app on smaller device</h1>
			</div>
		</div>
	);
};

export default MobileOnly;
