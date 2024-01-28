import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import Link from "next/link";

const UserDropdown = () => {

        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar>
                        <AvatarImage src="#" alt="Profile Picture"/>
                        <AvatarFallback className="bg-slate-100 cursor-pointer"><User size="16"/></AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My account</DropdownMenuLabel>
                    <DropdownMenuSeparator/>

                    <DropdownMenuItem>
                       <Link href="/admin/account">
                       <User className="mr-2 h-4 w-4"/>
                        <span>Profile</span>
                       </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="text-destructive hover:text-red-500">
                        <LogOut className="mr-2 h-4 w-4 "/>
                        <span>Log out</span>
                    </DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>
        )
}
export default UserDropdown;