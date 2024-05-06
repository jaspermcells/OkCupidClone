import React, { useState } from "react";

import logo from "./pictures/okcupidlogo.svg";
const Navbar = () => {
	const [showSignIn, setShowSignIn] = useState(false);

	const toggleSignIn = () => {
		setShowSignIn(!showSignIn);
	};

	const handleSignIn = (e) => {
		e.preventDefault();
		// Add your sign-in logic here
	};
	return (
		<span className=" w-[95%]  relative grid grid-cols-2 justify-center justify-items-start items-center content-center   text-center  mx-[65px]  ">
			<div className="text-lg text-start relative left-[7px]">
				<img alt="logo" src={logo} className="w-[82px] h-[92px]"></img>
			</div>
			<div className="grid grid-cols-2   w-[50%] place-items-end place-content- relative left-[43%]">
				<div className=" text-[52%] text-right relative left-8">
					{" "}
					Have an account?
				</div>
				<div className="  text-[50%] w-[60%]">
					<button
						className="w-[85%] h-3/4 text-[12px]  border-[1px] border-black rounded-sm items-start font-semibold "
						onClick={toggleSignIn}
					>
						{" "}
						Sign in
					</button>
					{showSignIn && (
						<div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50 ">
							<div className="w-[375px] pt-10 bg-white p-10 rounded shadow-lg ">
								<button
									type="button"
									onClick={toggleSignIn}
									className="px-4 py-2 bg-transparent text-gray-700 rounded hover:bg-gray-400 relative bottom-[40px] left-[167px]"
								>
									X
								</button>

								<div className=" text-black w-full grid justify-center items-center justify-items-center relative bottom-[30px] ">
									<h2 className=" font-bold mb-4 relative  text-[23px]  w-[295px]	">
										Enter email and password
									</h2>
									<form onSubmit={handleSignIn}>
										<div className="mb-2">
											<label
												htmlFor="email"
												className="block text-[15px] font-medium text-black w-[295px]  text-left font-bold "
											>
												Email
											</label>
											<input
												placeholder="Email"
												type="email"
												id="email"
												name="email"
												className=" p-2  w-[295px] border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
												required
											/>
										</div>
										<div className="mb-4">
											<label
												htmlFor="password"
												className="block text-[15px] font-medium text-gray-700 w-[295px]  text-left font-bold"
											>
												Password
											</label>
											<input
												placeholder="Password"
												type="password"
												id="password"
												name="password"
												className=" p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
												required
											/>
										</div>
										<div className="grid text-center justify-center items-center w-[295px] text-white   text-[15px] h-[50px] font-bold tracking-wider uppercase rounded-sm bg-gray-400">
											<h1>NEXT</h1>
										</div>
										<div className="w-[295px] text-white text-blue-800 text-[13px] font-bold tracking-wider uppercase">
											Forgot Password?
										</div>

										<div class="relative flex py-5 items-center">
											<div class="flex-grow border-t border-gray-400"></div>
											<span class="flex-shrink mx-4 text-gray-400">or</span>
											<div class="flex-grow border-t border-gray-400"></div>
										</div>

										<button
											type="submit"
											className="w-[295px] bg-[#0000bf]  text-white text-[15px] font-bold rounded hover:bg-[#5c69ff] uppercase h-[50px] "
										>
											Log in with phone
										</button>
									</form>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</span>
	);
};

export default Navbar;
