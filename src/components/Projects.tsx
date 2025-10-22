interface Project {
	title: string;
	technologies: string[];
	description: string;
}

interface ProjectsProps {
	projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
	return (
		<div className="mb-6">
			<h3 className="mb-4 text-xl font-bold text-gray-800">Featured Projects</h3>
			<div className="space-y-4">
				{projects.map((project, index) => (
					<div key={index} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
						<h4 className="mb-2 font-semibold text-gray-900">{project.title}</h4>
						<p className="mb-3 text-sm text-gray-600">{project.description}</p>
						<div className="flex flex-wrap gap-1">
							{project.technologies.map((tech, techIndex) => (
								<span key={techIndex} className="rounded-full bg-[#018E94] px-2 py-1 text-xs font-medium text-white">
									{tech}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
