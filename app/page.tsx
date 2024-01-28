import { Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import AboutMe from './_components/AboutMe';
import Footer from './_components/Footer';
import Navbar from './_components/Navbar';
import OpenSourceProjects from './_components/Projects/OpenSourceProjects';
import ProfessionalProjects from './_components/Projects/ProfessionalProjects';

const Home = () => {

	return (
		<>
			<div className="pb-2 lg:pb-8 bg-gradient-to-tr relative from-[#ffce97] to-[#ffd6b5] 2xl:min-h-screen">
			<div className="absolute inset-0 bg-gradient-to-t from-white to-transparent 2xl:min-h-screen z-0">
				</div>
				<div className="relative 2xl:min-h-screen z-10">
					<div className="px-2 md:px-8 py-2 md:py-8">
						<Navbar />
					</div>
					<div className="w-full px-2 md:px-10 2xl:px-0 lg:container lg:m-auto flex flex-col">
						<div className=" pt-8 md:pt-4 2xl:pt-12 4xl:pt-16 5xl:pt-24 flex flex-col gap-0 lg:gap-4 2xl:gap-6 mb-6 lg:mb-8 2xl:mb-10 5xl:mb-11">
							<p className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-semibold">Bonjour à tous 👋</p>
							<h1 className="text-xl md:text-2xl lg:text-5xl 2xl:text-6xl font-bold">Je suis Mélaine</h1>
							<h2 className="text-xl md:text-2xl lg:text-5xl 2xl:text-6xl font-semibold">Développeuse passionnée</h2>
						</div>
					
						<AboutMe />
					</div>
				</div>
			</div>
			<div
				className="px-2 w-full md:px-8 lg:px-0 lg:container lg:m-auto text-center py-8 md:pt-16 2xl:pt-8 flex flex-col gap-8"
				id="projects">
				<h2 className="text-3xl lg:text-5xl font-bold">Mes projets</h2>
			
			
				<Tabs
					className="text-left"
					defaultValue="open-source">
					<TabsList className="w-full grid grid-cols-2 mb-8 lg:w-fit mx-auto">
						<TabsTrigger value="open-source">Open source</TabsTrigger>
						<TabsTrigger value="professional">Professionnels</TabsTrigger>
					</TabsList>
					<TabsContent
						className="flex flex-col gap-8 items-center"
						value="open-source">
						<OpenSourceProjects />
					</TabsContent>
					<TabsContent
						className="flex flex-col gap-8 items-center"
						value="professional">
						<ProfessionalProjects />
					</TabsContent>
				</Tabs>
		
			
			
			<Button
					className="mx-auto gap-2 items-center relative z-20"
					variant="link"
					asChild>
					<Link
						href="https://github.com/melaine69"
						target="_blank">
						En savoir plus sur GitHub <ExternalLink size="16" />
					</Link>
				</Button>
				
			</div>
			
			<Footer />
		</>
	);
};

export default Home;