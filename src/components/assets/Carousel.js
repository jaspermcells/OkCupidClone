import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Carousel = () => {
	const dotStyles = {
		dot: " relative bottom-[20px] bg-green-400 w-[10px] h-[20px] rounded-full  mx-2 z-50", // Base dot style
		activeDot: "bg-blue-500 z-50 w-[100px]", // Active dot style
	};
	const [currentSlide, setCurrentSlide] = useState(0);
	useEffect(() => {
		// Ensure that Tailwind's utility classes are applied properly
		require("slick-carousel/slick/slick-theme.css");
	}, []);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
		customPaging: function (i) {
			return (
				<button
					className={`${dotStyles.dot} ${
						i === currentSlide ? dotStyles.activeDot : ""
					}`}
				></button>
			);
		},
	};
	return (
		<div className=" carouselPage w-screen h-[98%] rounded-md relative     grid  ">
			<div className=" overflow-hidden w-[90%] h-[100%] relative left-[5%] top-[10px] rounded-md">
				<style>
					{`
          /* Adjust the size of Slick slider dots */
          .slick-dots li button {
            width: 40px; /* Adjust width as needed */
            height: 40px; /* Adjust height as needed */
          }
        `}
				</style>
				<Slider
					{...settings}
					dotsClass="slick-dots"
					className=" w-[100%] h-[100%] bg-white relative"
				>
					<div className=" rounded-md w-[100%] h-[320px] text-[15px] carousel-item leading-6  px-[15px] py-[12px] tracking-wide text-left bg-white">
						“Both of us lived in the Bay Area for years but had no idea each
						other existed until OKCupid brought us together in the sunny summer
						of ’16. We knew after the first date when we both had butterflies
						and barely touched our lunches that we were each other’s someone
						special. Love can spring from anywhere given the chance and we will
						always be grateful to OKCupid for helping give us our chance and
						being the start to our strong and beautiful relationship.”{" "}
						<div className="font-bold text-[13px] relative mt-2">
							&hearts; CARLENE AND COLIN &hearts;
						</div>
					</div>
					<div className=" rounded-md w-full h-[320px] text-[15px] carousel-item leading-6  px-[15px] py-[12px] tracking-wide text-left bg-white ">
						We met on OkCupid way back in 2013. Online dating can be
						intimidating but connecting on OKC was simple. We got to see and
						read a little about each other, message back and forth, and
						eventually meet in person! That one message was life changing. It
						led us to start dating, move in together, get married, and we just
						welcomed our first child in 2021! I’m so thankful that OKC (and
						Michelle’s bravery) led me to my adventure partner for life.”
						<div className="font-bold text-[13px]  relative mt-2">
							&hearts; CANDACE AND MICHELLE &hearts;
						</div>
					</div>
					<div className="rounded-md w-full h-[90%] md:text-[15px] carousel-item leading-6  px-[15px] py-[12px] tracking-wide text-left bg-white xs:tracking-normal xs:text-[14px] text-[14px]">
						“The wildest part is that, when we met, it was her first night on
						the app! We had a lot in common, from a love of burgers to Todd
						Rundgren, and both of us rearranged our schedules to meet up as soon
						as we possibly could. That was in 2016. Almost 6 years later, we are
						married, we have two cats, a niece and a nephew. We are each other’s
						family, and we gained new, amazing extended families as well. We
						love everything about one another, aside from the times we have to
						be apart. We’ve built this amazing life together and it all started
						on OkCupid.”
						<div className="font-bold text-[13px] relative mt-2">
							&hearts;KYLE AND ASHLEY &hearts;
						</div>
					</div>
					{/* Add more carousel items as needed */}
				</Slider>
			</div>
		</div>
	);
};
export default Carousel;
