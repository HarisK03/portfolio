"use client";

import Image from "next/image";
import businessman from "../app/assets/businessman.svg";
import { Button } from "@/components/ui/button";

type ProfileSectionProps = {
	handleScroll: (id: string) => void;
};

const ProfileSection: React.FC<ProfileSectionProps> = (props) => {
	return (
		<div
			id="profile"
			className="flex flex-col sm:flex-row sm:space-x-8 lg:space-x-24 h-screen w-screen justify-center items-center p-8 dark:bg-neutral-900 snap-start"
		>
			<div className="flex justify-center">
				<Image
					src={businessman}
					alt="businessman"
					className="relative w-full lg:w-96"
				/>
			</div>
			<div className="w-3/4 sm:w-1/2 lg:w-1/4 text-sm sm:text-base md:text-lg lg:text-xl flex flex-col space-y-4 dark:text-white">
				<p>
					I am excited about the future of technology and the role
					that I can play in shaping it. I am eager to connect with
					like-minded individuals who share my passion for learning
					and solving problems, and I look forward to exploring new
					opportunities in the tech industry.
				</p>
				<span className="flex space-x-8">
					<a
						target="_blank"
						href="https://drive.google.com/file/d/1ekTgXtFbMPJh8WWOxc1pzN9Amzxa5ZMe/view"
					>
						<Button>Resume</Button>
					</a>
					<a onClick={() => props.handleScroll("contact")}>
						<Button>Contact</Button>
					</a>
				</span>
			</div>
		</div>
	);
};

export default ProfileSection;
