import "./App.css";

// D3 Functions
import { range } from "d3";

// Components
import Face from "./components/Face";

const width = 160;
const height = 160;
const array = range(6 * 10);

function App() {
	return (
		<div className="App">
			{array.map(() => {
				return (
					<Face
						width={width}
						height={height}
						centerX={width / 2}
						centerY={height / 2}
						// stokeWidth={10}
						// eyeOffSetX={90}
						// eyeOffSetY={50}
						// eyeRadius={20}
						// mouthWidth={5}
						// mouthRadius={120}
						strokeWidth={6 + Math.random() * 3}
						eyeOffsetX={20 + Math.random() * 9}
						eyeOffsetY={20 + Math.random() * 15}
						eyeRadius={5 + Math.random() * 10}
						mouthWidth={7 + Math.random() * 9}
						mouthRadius={30 + Math.random() * 10}
					/>
				);
			})}
		</div>
	);
}

export default App;
