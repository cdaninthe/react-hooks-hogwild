import React, {useState} from "react";
import Nav from "./Nav";
import Hogs from "./Hogs";
import NewHogForm from "./NewHogForm";

import hogsData from "../porkers_data";

function App() {
	console.log("this is my data:", hogsData)
	const [hogs, setHogs] = useState(hogsData)

	function onHogFormSubmit(newHog){
		setHogs([...hogs, newHog])
	  }

	return (
		<div className="App">
			<Nav />
			<NewHogForm onHogFormSubmit={onHogFormSubmit}/>
			<Hogs hogs={hogs} setHogs={setHogs}/>
		</div>
	);
}

export default App;
