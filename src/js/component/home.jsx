import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ Color, setColor] = useState ("yellow")
	return (
		<div className="traffic-light">	
			
			<div onClick={() => setColor ("red")} className={"light red " +(Color === "red"? "glow" : "")}></div>
			 
			<div onClick={() => setColor ("yellow")} className={"light yellow " +(Color === "yellow"? "glow" : "")}></div>
			
			<div onClick={() => setColor ("green")} className={"light green " +(Color === "green"? "glow" : "")}></div>
		</div>
	);
};

export default Home;
