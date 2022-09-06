import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ Color, setColor] = useState ("red")
	
	return (
	<div>
		<div className="topTraffic"></div>
		<div className="traffic-light">	
			
			<div onClick={() => setColor ("red")} className={"light red " +(Color === "red"? "glow" : "")}></div>
			 
			<div onClick={() => setColor ("yellow")} className={"light yellow " +(Color === "yellow"? "glow" : "")}></div>
			
			<div onClick={() => setColor ("green")} className={"light green " +(Color === "green"? "glow" : "")}></div>
		</div>
		
			

	</div>
	);
};


export default Home;
