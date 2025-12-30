import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const yearsOfExperience = new Date().getFullYear() - 2021;

export const metadata: Metadata = {
	title: 'Juan Daniel Sanchez Ramirez - Senior Web Developer',
	description:
		`Senior Web Developer with ${yearsOfExperience}+ years of experience specializing in front-end JavaScript frameworks. Expert in Next.js, Vue.js, and modern web technologies. Led teams, achieved 40% performance improvements, and implemented CI/CD pipelines.`,
	keywords: ['Web Developer', 'Frontend Developer', 'Next.js', 'Vue.js', 'JavaScript', 'React', 'TypeScript', 'Full Stack Developer'],
	authors: [{ name: 'Juan Daniel Sanchez Ramirez' }],
	creator: 'Juan Daniel Sanchez Ramirez',
	openGraph: {
		title: 'Juan Daniel Sanchez Ramirez - Senior Web Developer',
		description: `Senior Web Developer with ${yearsOfExperience}+ years of experience specializing in front-end JavaScript frameworks.`,
		type: 'website',
		locale: 'en_US',
	},
	twitter: {
		card: 'summary',
		title: 'Juan Daniel Sanchez Ramirez - Senior Web Developer',
		description: `Senior Web Developer with ${yearsOfExperience}+ years of experience specializing in front-end JavaScript frameworks.`,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} container mx-auto max-w-5xl antialiased`}>{children}</body>
		</html>
	);
}
