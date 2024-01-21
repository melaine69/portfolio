import reactPng from './assets/react.png';
import laravelPng from './assets/laravel.png'
import tailwindPng from './assets/tailwind.png';
import vitePng from './assets/vite.png';
import ProjectCard, { ProjectData } from './ProjectCard';

const projects: ProjectData[] = [
	{
		id: 1,
		title: "Garage Parrot",
		description: "Site d'un garage qui propose des véhicules d'occasions à la vente",
		github_url: 'https://github.com/melaine69/garage-app',
		status: 'released',
		technos: [
			{
				title: 'Laravel',
				photo_url: laravelPng,
			},
			{
				title: 'Tailwind',
				photo_url: tailwindPng,
			},
			{
				title: 'Vite',
				photo_url: vitePng,
			},
		
		],
	},
	{
		id: 2,
		title: 'Site diététicienne',
		description: "Site vitrine d'une diététicienne proposant des recettes en fonction des allergènes de ses patients",
		github_url: 'https://github.com/melaine69/dieteticien-app',
		status: 'released',
		technos: [
			{
				title: 'Laravel',
				photo_url: laravelPng,
			},
			{
				title: 'Tailwind',
				photo_url: tailwindPng,
			},
			{
				title: 'Vite',
				photo_url: vitePng,
			},
			
		],
	},
];

const OpenSourceProjects = () => {

	return (
		projects.map((project) => (
			<ProjectCard
				key={ project.id }
				project={ project }
			/>
		))
	);
};

export default OpenSourceProjects;