import React, {useState} from "react";
import Nav from "./Nav";
import Hogs from "./Hogs";

import hogsData from "../porkers_data";

function App() {
	const [hogs, setHogs] = useState(hogsData)
	console.log("this is my data:", hogsData)
	return (
		<div className="App">
			<Nav />
			<Hogs hogs={hogs}/>
		</div>
	);
}

export default App;
