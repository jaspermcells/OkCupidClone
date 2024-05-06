import React from "react";
import appstorebtn from "./pictures/appstorebtn.svg";
import googleplaybtn from "./pictures/googleplaybtn.svg";
const Body = () => {
	return (
		<div className="grid  h-[555px] grid-cols-1 w-[930px]  text-left  h-[120%] mx-[65px] relative bottom-[-3px] right-[25px]">
			<div className="text-[50px]  w-[65%] font-PublicSans font-extrabold grid justify-center items-center  h-[250%] relative  text-white font-wide tracking- leading-[60px] ">
				<div className="absolute top-0 left-0 text-black drop-shadow-[0_1.9px_1.8px_rgba(0,0,0,0.8)] ">
					DATING FOR EVERY SINGLE PERSON
				</div>
				<div className="absolute top-[-2px] left-[7px] ">
					DATING FOR EVERY SINGLE PERSON
				</div>
			</div>
			<div className="text-lg w-[45%] mt-[146px] font-[100px] leading-[27px] font-PublicSans ">
				<h6 className=" w-[100%]">
					OkCupid is the only dating app that matches you on what matters to
					you.
				</h6>{" "}
				<h6 className="w-[90%]">
					{" "}
					You deserve to find who you’re looking for. Meet them today!
				</h6>
				<div className="w-[67%] leading-5 pt-[25px] pb-[20px]   text-[16px]">
					{" "}
					By clicking Join, you agree to our{" "}
					<heading className="underline font-semibold">Terms</heading>. Learn
					how we process your data in our{" "}
					<heading className="underline font-semibold">Privacy Policy</heading>{" "}
					and{" "}
					<heading className="underline font-semibold">Cookies Policy.</heading>
				</div>
				<div className="bg-black rounded-sm text-white text-[16px] w-[62%] text-center h-[58px] grid items-center font-SignikaNegative font-extrabold tracking-[1px]">
					{" "}
					JOIN OKCUPID{" "}
				</div>
				<div className="w-[60%] pt-[40px] font-SignikaNegative font-bold uppercase text-[15px] tracking-widest leading-[15%]">
					{" "}
					Get the app
				</div>
				<div className="w-[60%] relative grid grid-cols-2 bottom-[28px]">
					<img
						src={appstorebtn}
						alt="appstore button"
						className="w-[98%] rounded-lg"
					></img>
					<img
						src={googleplaybtn}
						alt="google play button"
						className="w-[98%] rounded-lg relative left-1"
					></img>
				</div>
			</div>
		</div>
	);
};

export default Body;
