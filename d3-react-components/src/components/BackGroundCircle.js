import React from "react";

const BackGroundCircle = ({ radius, strokeWidth }) => {
	return (
		<circle
			r={radius}
			fill="lightblue"
			stroke="black"
			stroke-width={strokeWidth}
		/>
	);
};

export default BackGroundCircle;
