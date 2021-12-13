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
		.startAngle(7.1)
		.endAngle(5.5);

	return (
		<div className="App">
			<body>
				<svg width={width} height={height}>
					<g transform={`translate(${centerX}, ${centerY})`}>
						<circle
							r="200"
							fill="lightblue"
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
						<path
							d={mouthArc()}
							stroke="black"
							stroke-width="10"
							transform={"translate(0 180)"}
						></path>
					</g>
				</svg>
			</body>
		</div>
	);
}

export default App;
