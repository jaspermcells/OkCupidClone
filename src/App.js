import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import HomepageBackground from "./components/HomepageBackground";
import "./index.css";
import HomepageContent from "./components/HomepageContent";
import ResponsiveMid from "./components/ResponsiveMid";
function App() {
	return (
		<React.Fragment className="relative w-screen">
			<div className="App w-[100%]  overflow-x-hidden   z-50 text-2xl grid justify-center items-start justify-items-center  xs:hidden hidden lg:block ">
				<HomepageContent />
				<HomepageBackground />

				<Footer />
			</div>
			<div className="Mid-screensize  w-[100%]  overflow-x-hidden  z-50  grid justify-center items-start justify-items-center visible lg:hidden absolute">
				<ResponsiveMid />
			</div>
		</React.Fragment>
	);
}

export default App;
