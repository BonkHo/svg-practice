import React from "react";
import { arc } from "d3";

const Mouth = ({ mouthRadius, mouthWidth }) => {
	const mouthArc = arc()
		.innerRadius(mouthRadius)
		.outerRadius(mouthRadius + mouthWidth)
		.startAngle(7.1)
		.endAngle(5.5);
	return <path d={mouthArc()} stroke="black" stroke-width="10"></path>;
};

export default Mouth;
