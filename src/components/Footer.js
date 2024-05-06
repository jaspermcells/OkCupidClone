import React from "react";
import rightarrow from "./assets/pictures/rightarrowicon.svg";
const Footer = () => {
	return (
		<div className="w-full h-[240px] bg-[#1a1a1a] relative  grid justify-center items-center justify-items-center">
			<grid className=" w-[78%] h-[80%] pt-6 grid gap-7 grid-cols-8 justify-stretch  items-start justify-items-stretch text-left text-white  font-SignikaNegative font-semibold text-[15px]  gap-0 relative bottom-2 font-stretch-wider mt-2">
				<grid className=" grid justify-center items-center relative left-[60px]">
					{" "}
					<button className="w-[205px] h-[45px] bg-blue-700 uppercase text-[13px] font-bold rounded-sm">
						Join OkCupid
					</button>
					<grid className=" leading-5 grid justify-center justify-items-center relative left-[40px] items-center text-center  w-[60%] font-normal font-sans text-[13px] mt-3 text-slate-300">
						{" "}
						&copy; OkCupid 2024{" "}
						<grid className="mt-2 text-white">
							<p className="text-[12px] font-medium">from</p>
							<p> U Match Group</p>
						</grid>
					</grid>
				</grid>
				<grid className="uppercase relative left-[110px] 	">
					{" "}
					<h1 className="uppercase font-bold tracking-wider text-[15px]">
						Language
					</h1>{" "}
					<div className="grid grid-cols-2 justify-between border-white border-[1px] items-center px-[4px]">
						{" "}
						<div className="text-[12px] normal-case"> English </div>
						<img
							src={rightarrow}
							alt="right arrow icon "
							className="w-4 h-3 justify-self-end"
						></img>
					</div>
				</grid>
				<grid className="  relative left-[110px]  font-stretch-expanded">
					<h1 className="uppercase font-bold tracking-wider text-[15px]">
						{" "}
						Company
					</h1>
					<ul className="text-[12px] w-[100%] font-normal tracking-wide font-sans leading-6 ">
						<li className="">About</li>
						<li className="">Careers</li>
						<li> Press</li>
						<li> Ad Choices</li>
					</ul>
				</grid>
				<grid className="col-span-2   relative left-[100px]">
					{" "}
					<h1 className="uppercase font-bold tracking-wider text-[15px]">
						Conditions{" "}
					</h1>
					<ul className="text-[12px] font-normal  tracking-wide font-sans leading-6">
						<li>Privacy </li>
						<li>Cookies - Manage preferences</li>
						<li> Terms</li>
						<li> Community Guidelines</li>
						<li> Consumer Health Data Privacy Policy</li>
					</ul>
				</grid>
				<grid className=" relative left-[50px]">
					{" "}
					<h1 className="uppercase  font-bold tracking-wider text-[15px] ">
						Contact{" "}
					</h1>
					<ul className="text-[12px] font-normal tracking-wide font-sans leading-6">
						<li>Support </li>
						<li>Security</li>
						<li> Safety Tips</li>
						<li> Impressum </li>
					</ul>
				</grid>
				<grid className="  relative left-[35px] ">
					{" "}
					<h1 className=" uppercase  font-bold tracking-wider text-[15px]  ">
						Follow{" "}
					</h1>{" "}
					<ul className="text-[12px] font-normal tracking-wide font-sans leading-6">
						<li>Blog </li>
						<li>Tech Blog</li>
						<li> Facebook</li>
						<li> Instagram </li>
						<li> Twitter </li>
					</ul>
				</grid>
				<grid className="">
					<h1 className="uppercase font-bold tracking-wider text-[15px] ">
						Special{" "}
					</h1>{" "}
					<ul className="text-[12px] font-normal  tracking-wide font-sans leading-6 ">
						<li>Download Apps</li>{" "}
					</ul>
				</grid>
			</grid>
		</div>
	);
};

export default Footer;
