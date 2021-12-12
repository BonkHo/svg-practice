import React from "react";
import ReactDOM from "react-dom";
import { arc } from "d3";
import "./App.css";

function App() {
	const width = 960;
	const height = 500;
	const centerX = width / 2;
	const centerY = height / 2;
	const eyeOffSetX = 90;
	const eyeOffSetY = 50;
	const mouthWidth = 5;
	const mouthRadius = 120;

	const mouthArc = arc()
		.innerRadius(mouthRadius)
		.outerRadius(mouthRadius + mouthWidth)
		.startAngle(Math.PI / 2)
		.endAngle((Math.PI * 3) / 2);

	return (
		<div className="App">
			<body>
				<svg width={width} height={height}>
					<g transform={`translate(${centerX}, ${centerY})`}>
						<circle
							r="200"
							fill="yellow"
							stroke="black"
							stroke-width="10"
						></circle>
						<circle
							r="30"
							cx={-eyeOffSetX}
							cy={-eyeOffSetY}
							stroke-width="10"
						></circle>
						<circle
							r="30"
							cx={+eyeOffSetX}
							cy={-eyeOffSetY}
							stroke-width="10"
						></circle>
						<path d={mouthArc()} stroke="black" stroke-width="10"></path>
					</g>
				</svg>
			</body>
		</div>
	);
}

export default App;
