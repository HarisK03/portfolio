import { FaHouse, FaBriefcase } from "react-icons/fa6";
import { BsPersonFill, BsFillEnvelopeFill } from "react-icons/bs";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { Link } from "react-scroll";

type HeaderProps = {
	darkMode: boolean;
	setDarkMode: (value: boolean) => void;
	handleScroll: (id: string) => void;
};

const Header: React.FC<HeaderProps> = (props) => {
	return (
		<div className="fixed w-full flex items-center justify-center space-x-4 sm:space-x-16 text-xl sm:text-2xl p-4 bg-white dark:text-white dark:bg-neutral-900 z-10">
			<a
				className="p-3 rounded-full cursor-pointer duration-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
				onClick={() => props.handleScroll("hero")}
			>
				<FaHouse />
			</a>
			<a
				className="p-3 rounded-full cursor-pointer duration-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
				onClick={() => props.handleScroll("profile")}
			>
				<BsPersonFill />
			</a>

			<a
				className="p-3 rounded-full cursor-pointer duration-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
				onClick={() => props.handleScroll("project")}
			>
				<FaBriefcase />
			</a>
			<a
				className="p-3 rounded-full cursor-pointer duration-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
				onClick={() => props.handleScroll("contact")}
			>
				<BsFillEnvelopeFill />
			</a>
			<a
				className="p-3 rounded-full cursor-pointer duration-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
				onClick={() => props.setDarkMode(!props.darkMode)}
			>
				{props.darkMode ? <MdNightsStay /> : <MdWbSunny />}
			</a>
		</div>
	);
};

export default Header;
