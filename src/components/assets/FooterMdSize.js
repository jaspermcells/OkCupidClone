import React from "react";
import rightarrow from "./pictures/rightarrowicon.svg";
import plusicn from "./pictures/plusicon.svg";
const FooterMdSize = () => {
	return (
		<div>
			<div
				id="footer-grid"
				className=" divide -y divide-zinc-700/70 w-full h-[380px] bg-[#1a1a1a] grid grid-cols-1  "
			>
				{" "}
				<div
					className=" h-[20px] border-t-[1px] border-l-[1px] grid grid-cols-2 justify-between items-center   text-[13px] uppercase
            
           text-white font-bold "
				>
					{" "}
					<div className="ml-[15px] top-[10px] relative "> Language</div>
					<div className=" grid  justify-self-end grid-cols-2 justify-items-end relative right-[40px] text-[20px]  w-[160px]  border-[1px] rounded-sm py-[8px]  top-[8px] ">
						<div className="  relative text-right justify-self-start normal-case text-[12px] ml-[5px] font-normal">
							English
						</div>
						<img
							src={rightarrow}
							alt="plusicon"
							className="w-4 h-4  mr-[4px]"
						></img>
					</div>
				</div>
				<div
					className=" border-t-[1px] border-l-[1px] grid grid-cols-2 justify-between items-center  text-[13px] uppercase text-white font-bold
            "
				>
					{" "}
					<div className="ml-[15px]"> Company</div>
					<div className=" grid justify-end relative right-[40px] text-[20px] ">
						+
					</div>
				</div>
				<div
					className=" border-t-[1px] border-l-[1px] grid grid-cols-2 justify-between items-center  text-[13px] uppercase text-white font-bold
            "
				>
					{" "}
					<div className="ml-[15px]"> Conditions</div>
					<div className=" grid justify-end relative right-[40px] text-[20px]">
						+
					</div>
				</div>
				<div
					className=" border-t-[1px] border-l-[1px] grid grid-cols-2 justify-between items-center  text-[13px] uppercase text-white font-bold
            "
				>
					{" "}
					<div className="ml-[15px]"> Contact</div>
					<div className=" grid justify-end relative right-[40px] text-[20px]">
						+
					</div>
				</div>
				<div
					className=" border-t-[1px] border-l-[1px] grid grid-cols-2 justify-between items-center  text-[13px] uppercase text-white font-bold
            "
				>
					{" "}
					<div className="ml-[15px]"> Follow</div>
					<div className=" grid justify-end relative right-[40px] text-[20px]">
						+
					</div>
				</div>
				<div
					className=" border-t-[1px] border-l-[1px] grid grid-cols-2 justify-between items-center  text-[13px] uppercase text-white font-bold 
            "
				>
					{" "}
					<div className="ml-[15px]"> Special</div>
					<div className=" grid justify-end relative right-[40px] text-[20px]">
						+
					</div>
				</div>
				<div
					className=" border-[#1a1a1a] grid grid-cols-2 justify-between items-center  text-[13px] uppercase text-white font-bold 
                   "
				>
					{" "}
					<p className="ml-[15px] text-[12px] font-medium text-slate-400 normal-case font-[600]">
						{" "}
						&#169; OkCupid 2024
					</p>
					<div className=" grid justify-end relative right-[40px]  text-[13px] normal-case underline">
						from Match Group
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterMdSize;
