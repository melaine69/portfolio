'use client';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Layers } from "lucide-react";
import Link from "next/link"

export default function Navbar() {
    return (
		<nav className="flex justify-between items-center p-4 lg:p-6 border border-slate-100 bg-white/50 backdrop-blur-lg drop-shadow-sm rounded-2xl">
			<Link
				className="text-base lg:text-3xl flex items-center gap-2 lg:gap-4"
				href="/"
			>
				<Layers className="h-4 w-4 lg:h-8 lg:w-8" />
				<span className="font-semibold">Mélaine D.</span>
			</Link>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem className="lg:inline-flex">
						<Link
							href="#aboutme"
							legacyBehavior
							passHref
						>
							<NavigationMenuLink
								className={ navigationMenuTriggerStyle({ className: 'bg-transparent hover:bg-white' }) }
							>
								A propos
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem className="lg:inline-flex">
						<Link
							href="#projects"
							legacyBehavior
							passHref
						>
							<NavigationMenuLink className={ navigationMenuTriggerStyle({ className: 'bg-transparent hover:bg-white' }) }>
								Réalisations
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
                    <Link href="https://www.linkedin.com/in/melaine-dewitte" legacyBehavior passHref>
							<NavigationMenuLink
								className={ navigationMenuTriggerStyle({ className: 'bg-primary !text-primary-foreground hover:bg-primary/90' }) }
								target="_blank"
							>
								Contact
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</nav>
	);
};
