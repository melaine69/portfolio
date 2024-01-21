"use client"

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import UserDropdown from "./Userdropdown";

const AdminHeader = () => {
    return (
        <nav className="p-4 border-b border-slate-300 flex justify-between">
           <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/admin" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle({})}>
                                Tableau de bord
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/admin" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle({})}>
                                Projets
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
           

                <NavigationMenuItem>
                    <Link href="https://www.linkedin.com/in/melaine-dewitte" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle({})}
                                target="_blank">
                            C.V
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <UserDropdown/>
        </nav>
    )
}
export default AdminHeader;