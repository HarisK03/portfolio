"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Header from "../components/Header";
import ProfileSection from "@/components/ProfileSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
	const [darkMode, setDarkMode] = useState<boolean>(false);

	const handleScroll = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div
			className={`${
				darkMode ? "dark" : ""
			} snap-y snap-mandatory h-screen w-screen overflow-y-auto overflow-x-hidden`}
		>
			<Header
				darkMode={darkMode}
				setDarkMode={setDarkMode}
				handleScroll={handleScroll}
			/>
			<HeroSection />
			<ProfileSection handleScroll={handleScroll} />
			<ProjectSection />
			<ContactSection />
		</div>
	);
}
