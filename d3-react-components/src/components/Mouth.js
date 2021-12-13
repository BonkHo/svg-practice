import React from "react";
import { arc } from "d3";

const mouthWidth = 5;
const mouthRadius = 120;

const mouthArc = arc()
	.innerRadius(mouthRadius)
	.outerRadius(mouthRadius + mouthWidth)
	.startAngle(7.1)
	.endAngle(5.5);

const Mouth = () => {
	return (
		<path
			d={mouthArc()}
			stroke="black"
			stroke-width="10"
			transform={"translate(0 180)"}
		></path>
	);
};

export default Mouth;
