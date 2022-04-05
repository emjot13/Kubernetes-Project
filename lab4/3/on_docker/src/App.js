import logo from "./logo.svg";
import "./App.css";
import whale from "../src/whale.png";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={whale} className="App-logo" alt="logo" />
				<p>Welcome to react app hosted on Docker</p>
			</header>
		</div>
	);
}

export default App;
