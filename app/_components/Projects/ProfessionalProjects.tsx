import reactPng from './assets/react.png';
import tailwindPng from './assets/tailwind.png';
import vitePng from "./assets/vite.png";
import ProjectCard, { ProjectData } from './ProjectCard';

const projects: ProjectData[] = [
	{
		id: 1,
		title: '',
		description: '',
		status: 'under-development',
		website_url: '',
		technos: [
			{
				title: 'React',
				photo_url: reactPng,
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

const ProfessionalProjects = () => {

	return (
		projects.map((project) => (
			<ProjectCard
				key={ project.id }
				project={ project }
			/>
		))
	);
};

export default ProfessionalProjects;