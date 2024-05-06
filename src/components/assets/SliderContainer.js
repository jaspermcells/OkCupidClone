import React, { useState, useEffect } from "react";
import okcupidbg1 from "./pictures/okcupidpic1-removebg-preview.png";
import okcupidbg2 from "./pictures/okcupidpic2-removebg-preview.png";
import okcupidbg3 from "./pictures/okcupidpic3-removebg-preview.png";
import okcupidbg4 from "./pictures/okcupidpic4-removebg-preview.png";
const SliderContainer = () => {
	const images = [okcupidbg1, okcupidbg2, okcupidbg3, okcupidbg4];
	const [slideIndex, setSlideIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);
	return (
		<div className="w-full h-full bg-transparent relative 	  ">
			{" "}
			<div
				className={`fade absolute  top-[20%] left-[42px]  ${
					slideIndex === 0 ? "opacity-100" : "opacity-0"
				} transition-opacity duration-500`}
			>
				<img src={okcupidbg1} alt="photo1" className="w-full bg" />
			</div>
			<div
				className={`fade absolute  top-[15%] left-[85px] ${
					slideIndex === 1 ? "opacity-100" : "opacity-0"
				} transition-opacity duration-500`}
			>
				<img src={okcupidbg2} alt="photo2" className="w-full" />
			</div>
			<div
				className={`fade absolute  top-[5%] left-[120px] ${
					slideIndex === 2 ? "opacity-100" : "opacity-0"
				} transition-opacity duration-500`}
			>
				<img src={okcupidbg3} alt="photo3" className="w-full" />
			</div>
			<div
				className={`fade absolute  top-[21%] left-[-120px] w-[800px] h-[600px] ${
					slideIndex === 3 ? "opacity-100" : "opacity-0"
				} transition-opacity duration-500`}
			>
				<img src={okcupidbg4} alt="photo4" className=" w-[800px] h-[600px] " />
			</div>
		</div>
	);
};

export default SliderContainer;
