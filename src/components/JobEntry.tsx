interface JobEntryProps {
	jobTitle: string;
	employer: string;
	startDate: string;
	endDate: string;
	achievements: string[];
}
const JobEntry = ({ jobTitle, employer, startDate, endDate, achievements }: JobEntryProps) => {
	return (
		<div className="job-entry mb-6 rounded-lg border-l-4 border-[#018E94] bg-white p-4 shadow-sm">
			<div className="mb-3">
				<h3 className="text-xl font-bold text-gray-900">{jobTitle}</h3>
				<div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
					<span className="font-semibold text-[#018E94]">{employer}</span>
					<span className="text-gray-400">•</span>
					<span>
						{startDate} - {endDate}
					</span>
				</div>
			</div>
			<ul className="space-y-2">
				{achievements.map((achievement, index) => {
					return (
						<li key={index} className="flex items-start gap-2 text-sm leading-relaxed">
							<div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#018E94]"></div>
							<span>{achievement}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
export default JobEntry;
