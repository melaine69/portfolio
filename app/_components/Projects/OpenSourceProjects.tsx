import nextJs from "./assets/nextjs.svg"
import wordpressPng from "./assets/wordpress.png";
import laravelPng from './assets/laravel.png'
import tailwindPng from './assets/tailwind.png';
import vitePng from './assets/vite.png';
import ProjectCard, { ProjectData } from './ProjectCard';

const projects: ProjectData[] = [
	{
		id: 1,
		title: "Garage Parrot",
		description: "Site d'un garage qui propose des véhicules d'occasions à la vente",
		website_url: "https://studi-garage.melaine.dev/",
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
		title: "Agence de voyages",
		description: "Site vitrine de Colibri Voyages qui présente des activités, circuits et séjours nationaux et internationaux",
		website_url: "https://colibri-voyages.melaine.dev/",
		github_url: 'https://github.com/melaine69/colibri-voyages',
		status: 'released',
		technos: [
			{
				title: 'Wordpress',
				photo_url: wordpressPng,
			},
			
		],
	},

	{
		id: 3,
		title: "Portfolio photograhe",
		description: "Site vitrine pour le portfolio d'un photographe avec galerie et tarifications",
		website_url: "https://strong-gecko-44e3b1.netlify.app/",
		github_url: 'https://github.com/melaine69/charles-photographe',
		status: 'released',
		technos: [
			{
				title: 'NextJs',
				photo_url: nextJs,
			},
			{
				title: 'Tailwind',
				photo_url: tailwindPng,
			},

			
		],
	},

	{
		id: 4,
		title: 'Site diététicienne',
		description: "Site vitrine d'une diététicienne proposant des recettes en fonction des allergènes de ses patients",
		website_url: 'http://dieteticien-app.test/',
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