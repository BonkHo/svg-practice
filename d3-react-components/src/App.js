import "./App.css";

// Components
import BackGroundCircle from "./components/BackGroundCircle";
import Eye from "./components/Eye";
import Mouth from "./components/Mouth";

function App() {
	const width = 960;
	const height = 500;
	const centerX = width / 2;
	const centerY = height / 2;
	const eyeOffSetX = 90;
	const eyeOffSetY = 50;

	return (
		<div className="App">
			<body>
				<svg width={width} height={height}>
					<g transform={`translate(${centerX}, ${centerY})`}>
						<BackGroundCircle radius={200} />
						<Eye cx={-eyeOffSetX} cy={-eyeOffSetY} />
						<Eye cx={+eyeOffSetX} cy={-eyeOffSetY} />
						<Mouth />
					</g>
				</svg>
			</body>
		</div>
	);
}

export default App;
