interface SkillsListProps {
	skillTitle: string;
	skills: Array<string>;
}
const SkillsList = ({ skillTitle, skills }: SkillsListProps) => {
	return (
		<div className='mb-8'>
			<h3 className='mb-2 text-xl font-semibold'>{skillTitle}</h3>
			<ul className='columns-2 md:columns-4 lg:columns-2'>
				{skills.map((skill, index) => {
					return (
						<li key={index}>
							<h4>{skill}</h4>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
export default SkillsList;
