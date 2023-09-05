type ProjectCardProps = {
	title: string;
	description: string;
	icon: React.ReactNode;
	tags: string[];
	key: number;
	link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
	return (
		<a target="_blank" href={props.link}>
			<div className="flex flex-col rounded-xl p-4 space-y-8 shadow-lg justify-between cursor-pointer hover:scale-105 duration-500 dark:border-rose-800">
				<div className="flex lg:flex-col space-y-4 space-x-4 lg:space-x-0 dark:text-white">
					<span className="text-5xl">{props.icon}</span>
					<h6 className="font-bold text-base sm:text-xl">
						{props.title}
					</h6>
					<p className="hidden lg:flex">{props.description}</p>
				</div>
				<div className="lg:flex space-x-2 text-xs font-semibold hidden">
					{props.tags.map((tag, i) => (
						<p
							key={i}
							className="bg-gray-200 dark:bg-neutral-800 dark:text-white rounded-3xl py-1 px-2 inline"
						>
							{tag}
						</p>
					))}
				</div>
			</div>
		</a>
	);
};

export default ProjectCard;
