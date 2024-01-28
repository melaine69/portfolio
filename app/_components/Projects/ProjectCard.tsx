import { ExternalLink } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export type ProjectData = {
	id: number,
	title: string,
	description: string,
	github_url?: string,
	status: 'under-development' | 'released',
	version?: string,
	website_url?: string,
	technos: {
		title: string;
		photo_url: StaticImageData;
	}[]
};

type ProjectCardProps = {
	project: ProjectData;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<Card className="bg-red w-full lg:min-w-[700px] lg:max-w-[750px]">
			<CardHeader>
				<CardTitle>{ project.title }</CardTitle>
				<CardDescription>{ project.description }</CardDescription>
				<div className="flex gap-3">
					{
						project.status === 'under-development' && (
							<Badge variant="secondary">En développement</Badge>
						)
					}
					{
						project.status === 'released' && (
							<Badge variant="default">Réalisé</Badge>
						)
					}
				</div>
			</CardHeader>
			{
				project.technos.length > 0 ? (
					<CardContent>
						<div className="flex gap-2">
							{
								project.technos.map((techno) => (
									<Image
										key={ techno.title }
										alt={ techno.title }
										className="rounded-sm"
										height="24"
										src={ techno.photo_url }
										title={ techno.title }
										width="24"
									/>
								))
							}
						</div>
					</CardContent>
				) : null
			}
			<CardFooter className="justify-end gap-4">
				{
					project.website_url ? (
						<Button
							className="gap-2 items-center"
							variant="outline"
							asChild
						>
							<Link
								href={ project.website_url }
								target="_blank"
							>
								Voir mon site <ExternalLink size="16" />
							</Link>
						</Button>
					) : null
				}
				
				{
					project.github_url ? (
						<Button
							className="gap-2 items-center"
							asChild
						>
							<Link
								href={ project.github_url }
								target="_blank"
							>
								Voir mon Github<ExternalLink size="16" />
							</Link>
						</Button>
					) : null
				}
			</CardFooter>
		</Card>
	);
};

export default ProjectCard;