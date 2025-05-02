interface SchoolEntryProps {
	title: string;
	school: string;
	startDate: string;
	endDate: string;
}
const SchoolEntry = ({ title, school, startDate, endDate }: SchoolEntryProps) => {
	return (
		<>
			<div className='mb-12'>
				<h3 className='text-xl font-bold'>{title}</h3>
				<span className='font-semibold'>{school}</span>
				<span className='block'>
					{startDate} - {endDate}
				</span>
			</div>
		</>
	);
};
export default SchoolEntry;
