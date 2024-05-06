import React, { useState, useEffect } from "react";
import SliderContainer from "./assets/SliderContainer";
const HomepageBackground = () => {
	const colors = ["#F9DBFF", "#FAC4EB", "#C0DFFB", "#C0CCFB"];
	// Set of hex codes

	const [currentColorIndex, setCurrentColorIndex] = useState(0);
	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
		}, 5000); // Change color every 5 seconds

		return () => clearInterval(intervalId);
	}, [colors]); // Run effect whenever colors change

	const currentColor = colors[currentColorIndex];

	return (
		<div className="container w-screen h-[695px]  ">
			<div
				style={{ backgroundColor: currentColor }}
				className=" w-screen h-[100%]  duration-500 grid grid-cols-2"
			>
				<div className=" w-full h-full "> </div>
				<div className=" container w-full h-full ">
					{" "}
					<SliderContainer />
				</div>
			</div>
		</div>
	);
};

export default HomepageBackground;
