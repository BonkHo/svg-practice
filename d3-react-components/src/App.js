import "./App.css";

// Components
import Face from "./components/Face";

const width = 160;
const height = 160;
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
						stokeWidth={20}
						eyeOffSetX={90 + Math.random() * 30}
						eyeOffSetY={50 + Math.random() * 30}
						eyeRadius={10 + Math.random() * 30}
						mouthWidth={5 + Math.random() * 30}
						mouthRadius={120 + Math.random() * 30}
					/>
				);
			})}
		</div>
	);
}

export default App;
