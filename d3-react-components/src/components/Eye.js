import React from "react";

const Eye = ({ cx, cy, eyeRadius }) => {
	return <circle r={eyeRadius} cx={cx} cy={cy} stroke-width="10"></circle>;
};

export default Eye;
