"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./data";
import { Button } from "./ui/button";

const ProjectSection = () => {
	const filters = ["Favourites", "Other"];
	const [activeFilter, setActiveFilter] = useState<string>(filters[0]);

	return (
		<div
			id="project"
			className="h-screen w-screen flex items-center justify-center pt-12 pb-12 space-x-2 sm:space-x-12 p-12 dark:bg-neutral-900 snap-start"
		>
			<div className="flex flex-col space-y-4">
				{filters.map((filter) => (
					<Button
						key={filter}
						className={"dark:text-neutral-500"}
						variant={
							activeFilter === filter ? undefined : "outline"
						}
						onClick={() => setActiveFilter(filter)}
					>
						{filter}
					</Button>
				))}
			</div>
			<div className="grid gap-2 md:gap-4 w-full grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
				{projects.map(
					(project) =>
						project.category === activeFilter && (
							<ProjectCard
								key={project.id}
								title={project.title}
								description={project.description}
								icon={project.icon}
								link={project.link}
								tags={project.tags}
							/>
						)
				)}
			</div>
		</div>
	);
};

export default ProjectSection;
