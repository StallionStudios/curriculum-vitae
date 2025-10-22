interface SkillsListProps {
	skillTitle: string;
	skills: Array<string>;
}
const SkillsList = ({ skillTitle, skills }: SkillsListProps) => {
	return (
		<div className="skills-section mb-6">
			<h3 className="mb-3 text-lg font-semibold text-white">{skillTitle}</h3>
			<div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-2">
				{skills.map((skill, index) => {
					return (
						<div key={index} className="flex items-center gap-2">
							<div className="h-1.5 w-1.5 rounded-full bg-[#018E94]"></div>
							<span className="text-sm text-gray-200">{skill}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default SkillsList;
