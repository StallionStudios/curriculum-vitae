interface SectionDividerProps {
	sectionTitle: string;
}
const SectionDivider = ({ sectionTitle }: SectionDividerProps) => {
	return (
		<div className='mb-3'>
			<h2>{sectionTitle}</h2>
			<hr />
		</div>
	);
};
export default SectionDivider;
