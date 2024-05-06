import React, { useState } from "react";
import logo from "./assets/pictures/okcupidlogo.svg";
import Carousel from "./assets/Carousel";
import gplayicon from "./assets/pictures/googleplaybtn.svg";
import appstoreicon from "./assets/pictures/appstorebtn.svg";
import FooterMdSize from "./assets/FooterMdSize";
import downarrow from "./assets/pictures/downarrow.svg";
const ResponsiveMid = () => {
	const [showMore, setShowMore] = useState(false);
	return (
		<div className=" grid h-full grid-cols-1 overflow-hidden block  ">
			<div className="w-screen  h-[120%]  pb-[138px]  ">
				<div className=" w-screen h-[100%] bg-[#96abff] relative">
					<div className="w-auto h-[100%] bg-bgimg bg-cover bg-no-repeat text-7xl text-black ">
						{" "}
						<div className="w-[90%] grid justify-center justify-items-center items-top top-[5px] relative cols-1">
							{" "}
							<img
								src={logo}
								alt="logo"
								className="w-[380px] h-[20%] relative left-[6%] "
							></img>
							<div className="text-[30px]  w-[100%] text-center text-[30px] font-PublicSans font-extrabold grid justify-center items-center  h-[72px] relative  text-white font-wide  bottom-[300px] ">
								<div className="absolute top-0 left-0 text-black drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] ">
									DATING FOR EVERY SINGLE PERSON
								</div>
								<div className="absolute top-[-4px] left-[4px] ">
									DATING FOR EVERY SINGLE PERSON
								</div>
							</div>
							<div className="left-[12px] relative text-[11px] text-white text-center w-[92%] bottom-[30px] z-50">
								By clicking Join, you agree to our{" "}
								<heading className=" underline font-bold">Terms</heading>. Learn
								how we process your data in our{" "}
								<heading className=" underline font-bold">
									Privacy Policy
								</heading>{" "}
								and
								<heading className=" underline font-bold">
									{" "}
									Cookies Policy.{" "}
								</heading>
							</div>
							<button className="left-[12px]  relative text-[13px] text-black text-center bg-white w-[92%]  h-[50px] rounded-full font-bold bottom-[10px] z-50">
								{" "}
								JOIN OKCUPID
							</button>
							<div className="text-[12px] uppercase font-bold text-white z-50 relative top-[10px] left-[12px] ">
								Sign in
							</div>
							<div className="text-[12px] underline font-bold text-white z-50 top-[25px] relative  left-[12px]">
								from Match Group
							</div>
						</div>
						<div className="absolute bottom-0 left-0 w-screen h-screen bg-gradient-to-b from-transparent via-transparent to-black"></div>
					</div>
				</div>
			</div>
			<div className=" grid grid-cols-1">
				<div className="w-screen h-auto bg-[#f0f2f6]  grid justify-center justify-items-center  grid-cols-1 block ">
					<h1 className="w-[100%] h-[100%] text-center text-[12px]  relative left-[-4%] uppercase font-bold top-[15px] mb-[12px]  block">
						Success Stories
					</h1>
					<div className="w-screen relative ">
						{" "}
						<Carousel />
					</div>
					<div className=" content relative mt-[50px] text-[12.5px] grid justify-center justify-items-center tracking-wide leading-[20px] text-left">
						<p className="mb-4 w-[90%] ">
							Get the best online dating app for singles to find a match based
							on who you really are and what you love. No matter who you are or
							what you are looking for, you are welcome at OkCupid.
						</p>
						<p
							className={
								showMore ? "more-text mb-4 w-[90%]" : "more-text hidden "
							}
						>
							Great dates come from great connections - that’s why OkCupid shows
							off who you are beyond a photo. Meet new people and find love
							based on what makes you, well, you - because you deserve it. Our
							free dating app helps you meet singles, connect, chat or have a
							deep conversation through our one-of-a-kind messaging system.
						</p>
						<p
							className={
								showMore ? "more-text mb-4 w-[90%]" : "more-text hidden"
							}
						>
							Love doesn’t discriminate, and neither does OkCupid. You love your
							own way - if you’re straight, LGBTQ, gay, lesbian, nonbinary, or
							don’t fit into any one label, OkCupid can help you find love too.
							You can even set your pronouns at registration. Flirt, find love,
							build connections and go on great dates with OkCupid!
						</p>

						<button
							className={
								showMore
									? "hidden "
									: "read-more bg-transparent text-[#0000bf] hover:text-blue-500 text-white font-bold py-2 px-4 rounded relative bottom-2 z-50 w-full text-left uppercase mb-5 relative left-[1%]"
							}
							onClick={() => setShowMore(!showMore)}
						>
							{showMore ? "Read Less" : "Read More"}
							<img
								src={downarrow}
								className="w-3 h-3 relative left-[80px] bottom-[15px] hover:text-blue-500"
							></img>
						</button>
						<div className=" block w-screen bg-white h-[120px] grid grid-cols-1 justify-center justify-items-center items-center">
							<div className="mt-6 font-bold">Download the OkCupid App</div>{" "}
							<div className="grid grid-cols-2 relative bottom-[30px] gap-1">
								<img
									src={appstoreicon}
									alt="appstoreicon"
									className="w-[128px] h-[120px]"
								></img>
								<img
									src={gplayicon}
									alt="gplayicon"
									className="w-[128px] h-[120px]"
								></img>{" "}
							</div>{" "}
						</div>
						<div className="footer-container w-screen h-[380px] bg-black">
							{" "}
							<FooterMdSize />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResponsiveMid;
