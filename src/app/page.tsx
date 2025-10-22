import Header from '@/components/Header';
import SectionDivider from '@/components/SectionDivider';
import JobEntry from '@/components/JobEntry';
import SchoolEntry from '@/components/SchoolEntry';
import SkillsList from '@/components/SkillsList';
import ContactInfo from '@/components/ContactInfo';
import KeyAchievements from '@/components/KeyAchievements';
import Projects from '@/components/Projects';

export default function Home() {
	const profilePicture: string = 'juan-daniel-profile_xbskaf';
	const name: string = 'Juan Daniel';
	const lastName: string = 'Sanchez Ramirez';
	const email: string = 'juan.sanchez@stallionstudios.net';
	const phoneNumber: string = '+52 388 102 4353';
	const address: string = 'Valle Dorado, Bahia de Banderas, Nay';
	const linkedIn: string = 'https://linkedin.com/in/juan-sanchez-ramirez';
	const gitHub: string = 'https://github.com/StallionStudios';
	const aboutMe: string =
		'Results-driven, bilingual (English/Spanish) Senior Web Developer with 4+ years of experience specializing in front-end JavaScript frameworks. Led teams of 3+ developers, achieved 40% performance improvements, and reduced deployment time by 40% through CI/CD implementation. Proven track record of mentoring junior developers, implementing modern development workflows, and driving significant improvements in website performance and user engagement. Passionate about leveraging cutting-edge technologies to create exceptional user experiences and optimize development workflows.';

	const keyAchievements = [
		'Led migration from legacy PHP to Nuxt.js, achieving 60% performance improvement',
		'Played an essential role in migrating multiple websites to an AWS EC2 instance',
		'Reduced deployment time by 40% through CI/CD pipeline implementation',
		'Mentored 3+ junior developers, fostering team growth and knowledge sharing',
		'Managed 15+ websites across multiple hotel brands with consistent high performance',
		'Led development of a modular UI system with atomic design and Storybook, setting the standard for future projects',
	];

	const projects = [
		{
			title: 'Vidanta World Website',
			technologies: ['Next.js', 'Contentstack', 'Vercel', 'TypeScript', 'Tailwindcss'],
			description: 'Maintained and enhanced corporate website consistently adding new features and improving user experience',
		},
		{
			title: 'Hotel Quote Calculator',
			technologies: ['PHP', 'Vue.js', 'REST API', 'Bootstrap'],
			description: 'Built a dynamic hotel quote calculator with real-time pricing and a quote-saving feature, enhancing the booking experience.',
		},
		{
			title: 'TAFER Multi-Brand Hotel Websites',
			technologies: ['PHP', 'Bootstrap', 'Vue.js', 'Laravel', 'AWS'],
			description: 'Maintained and optimized 15+ hotel brand websites, delivering consistent performance, reliability, and user experience.',
		},
		{
			title: 'Accelerated Development Workflow',
			technologies: ['Docker', 'CI/CD', 'Bitbucket Pipelines'],
			description: 'Built a custom Docker-based dev environment and automated CI/CD pipeline, cutting setup time by 80%. Standardized PR workflows to boost code quality and team collaboration.',
		},
	];
	const jobs = [
		{
			jobTitle: 'Mid Level Full Stack Developer',
			employer: 'Vidanta, IT Department',
			startDate: 'May 2024',
			endDate: 'Present',
			achievements: [
				'Maintain and update the VidantaWorld website using Next.js framework, ensuring optimal performance and modern user experience across all devices.',
				'Support content managers by providing technical assistance and training for Contentstack CMS, enabling efficient content updates and website maintenance.',
				'Generate and implement content models for new components and features, ensuring scalable and maintainable content architecture.',
				'Collaborate with cross-functional teams to implement new features and enhancements, improving user engagement.',
				'Participate in CRM implementation projects, contributing to the development of customer relationship management features and integrations.',
				'Maintain CI/CD pipelines using Github Actions and Vercel CLI for automated deployments, ensuring reliable and efficient release processes.',
				'Document and present all code changes, feature implementations, and technical decisions to maintain codebase knowledge and facilitate team collaboration.',
			],
		},
		{
			jobTitle: 'Senior Frontend Developer',
			employer: 'TAFER Hotels & Resorts, Marketing',
			startDate: 'March 2023',
			endDate: 'May 2024',
			achievements: [
				'Key member of the web development team managing 15+ websites, including key brands like Garza Blanca Resorts and Hotel Mousai, ensuring high performance and consistent user experience.',
				"Pioneered the team's transition to a pull request workflow, improving code quality and fostering a collaborative environment.",
				'Designed and implemented a CI/CD pipeline, reducing deployment time by 40% and minimizing deployment errors.',
				'Developed interactive tools, such as real-time quote calculators, enhancing user engagement and streamlining booking processes.',
				'Mentored 3+ junior developers, providing guidance and fostering their professional growth.',
				'Spearheaded a refactoring project to migrate websites from legacy PHP to Nuxt.js, resulting in a 40% improvement in site performance and Lighthouse scores.',
				'Implemented a Docker-based local development workflow, ensuring a consistent and scalable environment, reducing setup time by 80%.',
				'Developed and deployed a personalized user experience solution, increasing user engagement by 15% through targeted content based on user interactions.',
			],
		},
		{
			jobTitle: 'Junior Frontend Developer',
			employer: 'TAFER Hotels & Resorts, Marketing',
			startDate: 'November 2021',
			endDate: 'March 2023',
			achievements: [
				'Created and deployed high-converting landing pages for marketing campaigns, enhancing user engagement and driving lead generation.',
				'Maintained and updated website content, ensuring fresh and engaging user interactions.',
				'Integrated third-party tools via APIs, streamlining processes and enhancing website functionality.',
				'Collaborated with cross-functional teams to implement responsive designs, improving user experience across devices.',
				'Provided mentorship to junior developers, fostering a collaborative and supportive team environment.',
				'Led website performance optimization initiatives, achieving a 20% reduction in load times and significantly improving speed index, FCP, and LCP.',
			],
		},
		{
			jobTitle: 'Freelance Full Stack Developer',
			employer: 'Various Clients',
			startDate: 'February 2021',
			endDate: 'November 2021',
			achievements: [
				'Designed and developed responsive websites using PHP and JavaScript.',
				'Implemented robust back-end services with MySQL databases and APIs, ensuring efficient data handling and seamless front-end integration.',
				'Collaborated directly with clients to gather requirements and delivered tailored solutions within project timelines.',
				'Optimized application performance, resulting in improved user engagement and satisfaction.',
			],
		},
	];
	const education = [
		{
			title: 'Engineering in Multimedia Communication',
			school: 'Centro Universitario de la Costa',
			startDate: 'August 2018',
			endDate: 'January 2022',
		},
		{
			title: 'Diploma in Video Game Development',
			school: 'Centro Universitario de los Valles',
			startDate: 'April 2018',
			endDate: 'December 2018',
		},
	];
	const technicalSkills = [
		{
			title: 'Programming Languages',
			list: ['C#', 'Java', 'Javascript', 'PHP', 'Python', 'Typescript'],
		},
		{
			title: 'Frameworks',
			list: ['Alpine.js', 'Laravel', 'Next.js', 'Nuxt.js', 'React', 'Vue.js'],
		},
		{
			title: 'CSS Frameworks',
			list: ['Bootstrap', 'Foundation', 'SCSS', 'Tailwindcss'],
		},
		{
			title: 'Platforms / Dev Tools',
			list: [
				'Adobe XD',
				'AWS',
				'Bitbucket',
				'Bun',
				'Contentstack',
				'Docker',
				'DockerHub',
				'Figma',
				'Firebase',
				'Git',
				'GitHub',
				'GitLab',
				'HubSpot',
				'Mamp',
				'Npm',
				'Postman',
				'Vercel',
				'Vite',
				'Webpack',
				'Wordpress',
				'Xamp',
			],
		},
		{
			title: 'Miscellaneous Tools & Technologies',
			list: ['Bash', 'Composer', 'in18n', 'MySQL', 'Perch CMS', 'Pinia', 'SQLite', 'Strapi', 'Vue Router', 'Vuex'],
		},
	];

	const softSkills = [
		{
			title: 'Communication',
			list: ['Active listening', 'Mentorship', 'Presentation skills', 'Team collaboration'],
		},
		{
			title: 'Personal Effectiveness',
			list: ['Adaptability', 'Attention to detail', 'Critical thinking', 'Problem-solving', 'Time management'],
		},
		{
			title: 'Leadership',
			list: ['Conflict resolution', 'Decision-making', 'Negotiation'],
		},
	];
	return (
		<main className="relative w-full shadow">
			<Header
				name={name}
				lastName={lastName}
				profilePicture={profilePicture}
				contactInfo={{
					email: email,
					phoneNumber: phoneNumber,
					address: address,
					linkedIn: linkedIn,
					gitHub: gitHub,
				}}
			/>
			<div className="flex flex-col lg:flex-row-reverse">
				<div className="p-4 pt-[calc(var(--header-height)+1rem)] lg:w-3/5 lg:pt-[var(--header-height)]">
					<SectionDivider sectionTitle="About me" />
					<p className="mb-4">{aboutMe}</p>
					<KeyAchievements achievements={keyAchievements} />
					<Projects projects={projects} />
					<SectionDivider sectionTitle="Experience" />
					{jobs.map((item, index) => {
						return <JobEntry key={index} jobTitle={item.jobTitle} employer={item.employer} startDate={item.startDate} endDate={item.endDate} achievements={item.achievements} />;
					})}
				</div>
				<div className="bg-zinc-800 p-4 text-white lg:w-2/5 lg:pt-[var(--header-height)]">
					<SectionDivider sectionTitle="Education" />
					{education.map((item, index) => {
						return <SchoolEntry key={index} title={item.title} school={item.school} startDate={item.startDate} endDate={item.endDate} />;
					})}
					<SectionDivider sectionTitle="Languages" />
					<SkillsList skillTitle="Native/Fluent" skills={['English', 'Spanish']} />
					<SectionDivider sectionTitle="Technical Skills" />
					{technicalSkills.map((item, index) => {
						return <SkillsList key={index} skillTitle={item.title} skills={item.list} />;
					})}
					<SectionDivider sectionTitle="Soft Skills" />
					{softSkills.map((item, index) => {
						return <SkillsList key={index} skillTitle={item.title} skills={item.list} />;
					})}
					<div className="lg:hidden">
						<SectionDivider sectionTitle="Contact Information" />
						<ContactInfo email={email} phoneNumber={phoneNumber} address={address} linkedIn={linkedIn} gitHub={gitHub} />
					</div>
				</div>
			</div>
		</main>
	);
}
