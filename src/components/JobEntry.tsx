interface JobEntryProps {
	jobTitle: string;
	employer: string;
	startDate: string;
	endDate: string;
	achievements: string[];
}
const JobEntry = ({ jobTitle, employer, startDate, endDate, achievements }: JobEntryProps) => {
	return (
		<>
			<div className='mb-2'>
				<h3 className='text-2xl font-bold'>{jobTitle}</h3>
				<span className='font-semibold'>{employer}</span>
				<span className='block'>
					{startDate} - {endDate}
				</span>
			</div>
			<ul className='mb-4 list-disc pl-4'>
				{achievements.map((achievement, index) => {
					return <li key={index}>{achievement}</li>;
				})}
			</ul>
		</>
	);
};
export default JobEntry;
