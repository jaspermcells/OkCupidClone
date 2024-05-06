import React from "react";
import Navbar from "./assets/Navbar";
import Body from "./assets/Body";
const HomepageContent = () => {
	return (
		<div className="  w-full    h-[650px] z-50 absolute   left   block">
			<div className=" grid justify-center justify-items-center">
				{" "}
				<Navbar />
				<Body />
			</div>
		</div>
	);
};

export default HomepageContent;
