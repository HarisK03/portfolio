import Peep from "react-peeps";

const HeroSection = () => {
	const peepStyle = {
		justifyContent: "center",
		alignSelf: "center",
	};

	return (
		<div
			id="hero"
			className="h-screen w-screen flex flex-col items-center justify-center space-y-8 dark:bg-neutral-900 snap-start"
		>
			<div className="w-32 h-auto sm:w-44 md:w-56">
				<Peep
					style={peepStyle}
					body="PoloSweater"
					face="Smile"
					hair="ShortMessy"
					facialHair="FullMedium"
				/>
			</div>
			<div className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl w-3/4 sm:w-1/2 text-center text-neutral-500 dark:text-gray-500">
				<h3>Hello, I&apos;m</h3>
				<h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black dark:text-white">
					Haris Kamal
				</h1>
				<h3>
					A third-year student studying Computer Science, Mathematics,
					and GIS at the University of Toronto Mississauga.
				</h3>
			</div>
		</div>
	);
};

export default HeroSection;
