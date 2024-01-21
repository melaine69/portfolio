"use client"

import ButtonList from "@/components/ui/ButtonList";
import ButtonItem from "@/components/ui/ButtonList/ButtonItem";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import useSession from "@/hooks/useSession";
import UpdateEmailBtn from "./_components/UpdateEmailBtn";
import UpdatePasswordBtn from "./_components/UpdatePassword";

const AccountPage = () => {

    const { user } = useSession();

    console.log(user)

    const handleClick = () => {
        console.log('click')
    }

    return (
        <div className="container mx-auto py-8 space-y-8">
            <h1 className="text-xl font-bold">Compte</h1>
            <div className="grid grid-cols-3">
            <Card className="col-span-2">
                <CardHeader>
                    <CardTitle>Informations personnelles</CardTitle>
                    <CardDescription>Gestion du profil</CardDescription>
                </CardHeader>
                <CardContent>
                    <ButtonList>

                        <ButtonItem
                            value="Mélaine Dewitte"
                            onClick={handleClick}>
                            Nom Prénom
                        </ButtonItem>

                        <ButtonItem>
                            Bio
                        </ButtonItem>

                        <UpdateEmailBtn />

                        <UpdatePasswordBtn/>
                    </ButtonList>

                </CardContent>

            </Card>
            </div>
        </div>
    );
};
export default AccountPage;