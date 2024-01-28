import { Layers } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {

	const currentYear = new Date().getFullYear();

	return (
		
		<footer className=" px-10 bg-gradient-to-b from-[#ffd6b5] to-[#ffce97]">

			<Separator orientation="horizontal" />
			<div className="grid grid-cols-1 lg:grid-cols-12 pt-8 pb-8 lg:pb-16">
				<div className="lg:col-start-1 lg:col-span-6 flex flex-col justify-between items-start">
					<Link
						className="flex items-center gap-4"
						href="/"
					>
						<Layers size="64" />
						<span className="flex flex-col">
							<span className="text-2xl font-semibold">Mélaine D.</span>
							<span className="text-lg">© { currentYear }</span>
						</span>
					</Link>
					<Button
						variant="link"
						asChild
					>
						<Link href="/legal-notice">
							Mentions légales
						</Link>
					</Button>
				</div>
				<nav className="hidden lg:block lg:col-start-7 lg:col-span-3">
					<ul>
						<li>
							<Button
								variant="link"
								asChild
							>
								<Link
									href="#aboutme"
								>
									Qui-suis-je ?
								</Link>
							</Button>
						</li>
						<li>
							<Button
								variant="link"
								asChild
							>
								<Link
									href="#projects"
								>
									Projets
								</Link>
							</Button>
						</li>
						{ /* <li>
								<Button variant="link" asChild>
									<Link href="/">
										Tools
									</Link>
								</Button>
							</li> */ }
					</ul>
				</nav>
				<nav className="lg:col-start-10 lg:col-span-3">
					<ul>
						<li>
							<Button
								variant="link"
								asChild
							>
								<Link
									href="https://github.com/melaine69"
									target="_blank"
								>
									GitHub
								</Link>
							</Button>
						</li>
						<li>
							<Button
								variant="link"
								asChild
							>
								<Link
									href="https://linkedin.com/in/melaine-dewitte"
									target="_blank"
								>
									LinkedIn
								</Link>
							</Button>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;