import React from "react";

const FaceContainer = ({ children, width, height, centerX, centerY }) => {
	return (
		<div>
			<svg width={width} height={height}>
				<g transform={`translate(${centerX}, ${centerY})`}>{children}</g>
			</svg>
		</div>
	);
};

export default FaceContainer;
