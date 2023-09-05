import {
	FaChessKnight,
	FaFileZipper,
	FaBomb,
	FaRobot,
	FaLinkedin,
	FaGithub,
	FaYoutube,
	FaBurger,
} from "react-icons/fa6";
import { BiSolidChess, BiMap } from "react-icons/bi";
import { BsCameraVideoFill, BsQrCode } from "react-icons/bs";
import { TbSquareLetterB } from "react-icons/tb";

export const projects = [
	{
		id: 1,
		title: "Huffman File Coding",
		description:
			"Compress and decompress arbitrary files using the Huffman coding algorithm.",
		icon: <FaFileZipper />,
		tags: ["C", "Data Structures"],
		link: "https://github.com/HarisK03/huffman-coding",
		category: "Favourites",
	},
	{
		id: 2,
		title: "Shogi Image Classifier",
		description: "Obtain the SFEN representation of a Shogi board image.",
		icon: <BiSolidChess />,
		tags: ["Python", "TensorFlow"],
		link: "https://github.com/HarisK03/shogi-image-classifier",
		category: "Favourites",
	},
	{
		id: 3,
		title: "Chess AI",
		description: "Chess AI using Minimax and Monte Carlo Tree Search.",
		icon: <FaChessKnight />,
		tags: ["Python", "Pygame"],
		link: "https://github.com/HarisK03/chess-ai",
		category: "Favourites",
	},
	{
		id: 4,
		title: "Boggle",
		description:
			"Boggle game with JavaFX UI as a part of CSC207H5 group project.",
		icon: <TbSquareLetterB />,
		tags: ["Java", "JavaFX"],
		link: "https://github.com/HarisK03/boggle",
		category: "Favourites",
	},
	{
		id: 5,
		title: "Minesweeper",
		description:
			"Recreation of Minesweeper with Java Swing UI as a part of ICS4UR final project.",
		icon: <FaBomb />,
		tags: ["Java", "Java Swing"],
		link: "https://github.com/HarisK03/minesweeper",
		category: "Other",
	},
	{
		id: 6,
		title: "NPHC Discord Bot",
		description: "Discord Bot to moderate the North Park Hack Club.",
		icon: <FaRobot />,
		tags: ["JavaScript", "Node.js"],
		link: "https://github.com/HarisK03/nphc-discord-bot",
		category: "Favourites",
	},
	{
		id: 7,
		title: "QR Code Generator",
		description: "Create and read QR codes using various APIs.",
		icon: <BsQrCode />,
		tags: ["HTML", "CSS", "JavaScript"],
		link: "https://github.com/HarisK03/qrcg.io",
		category: "Other",
	},
	{
		id: 8,
		title: "LeetCode Solutions",
		description: "Python and video solutions to LeetCode problems.",
		icon: <BsCameraVideoFill />,
		tags: ["Python", "Data Structures"],
		link: "https://github.com/HarisK03/leetcode-solutions",
		category: "Other",
	},
	{
		id: 9,
		title: "Mappy",
		description: "Discover local businesses and navigate using maps.",
		icon: <BiMap />,
		tags: ["Firebase", "JavaScript"],
		link: "https://github.com/HarisK03/mappy",
		category: "Other",
	},
	{
		id: 10,
		title: "ByteBites",
		description: "Social media platform focused on food.",
		icon: <FaBurger />,
		tags: ["Firebase", "JavaScript"],
		link: "https://github.com/HarisK03/bytebites",
		category: "Other",
	},
];

export const socials = [
	{
		id: 1,
		link: "https://github.com/HarisK03",
		icon: <FaGithub />,
	},
	{
		id: 2,
		link: "https://www.linkedin.com/in/hariskamal/",
		icon: <FaLinkedin />,
	},
	{
		id: 3,
		link: "https://www.youtube.com/@hariskamal03",
		icon: <FaYoutube />,
	},
];
