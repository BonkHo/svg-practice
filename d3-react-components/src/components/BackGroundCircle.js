import React from "react";

const BackGroundCircle = ({ radius }) => {
	return (
		<circle
			r={radius}
			fill="lightblue"
			stroke="black"
			stroke-width="10"
		></circle>
	);
};

export default BackGroundCircle;
