import "./App.css";
import React from "react";
import ReactDOM from "react-dom";

console.log(ReactDOM);

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const eyeOffSetX = 90;
const eyeOffSetY = 50;

function App() {
	return (
		<div className="App">
			<body>
				<svg width={width} height={height}>
					<circle
						r="200"
						cx={centerX}
						cy={centerY}
						fill="yellow"
						stroke="black"
						stroke-width="10"
					></circle>
					<circle
						r="30"
						cx={centerX - eyeOffSetX}
						cy={centerY - eyeOffSetY}
						stroke-width="10"
					></circle>
					<circle
						r="30"
						cx={centerX + eyeOffSetX}
						cy={centerY - eyeOffSetY}
						stroke-width="10"
					></circle>
				</svg>
			</body>
		</div>
	);
}

export default App;
