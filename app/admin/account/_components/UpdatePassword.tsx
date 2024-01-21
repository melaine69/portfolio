import ButtonItem from "@/components/ui/ButtonList/ButtonItem";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useSession from "@/hooks/useSession";
import { updateUserPassword } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { Loader2, Save } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";


const UpdatePasswordFormSchema = z.object({
    password: z.string().min(8, 'Password must contain at least 8 chars.'),
    newPassword: z.string().min(8, 'Password must contain at least 8 chars.'),
    confirmNewPassword: z.string().min(8, 'Password must contain at least 8 chars.'),
}).refine(data => data.newPassword === data.confirmNewPassword, {
    message: 'Passwords do not match',
    path: ['confirmNewPassword'],
});

type UpdatePasswordFormValues = z.infer<typeof UpdatePasswordFormSchema>;



const UpdatePasswordBtn = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const { user, loading, refreshSession } = useSession();

    const form = useForm<UpdatePasswordFormValues>({
        mode: "onSubmit",
        resolver: zodResolver(UpdatePasswordFormSchema)
    })

    const handleSubmit = async (values: UpdatePasswordFormValues) => {
        try {
            setIsLoading(true);
            await updateUserPassword(values.newPassword, {
                email: user?.email || '',
                password: values.password,
            });

        } catch (error) {
            console.log(error)

        } finally {
            setIsLoading(false)
        }
    }

    const handleOpenChange = (isOpen: boolean) => {
        setIsDialogOpen(isOpen);
    }

    const handleOpen = () => {
        setIsDialogOpen(true)
    }

    return (
        <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>

            <DialogTrigger asChild>
                <ButtonItem
                    onClick={handleOpen}
                    isLoading={loading}>
                    Password
                </ButtonItem>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)}>
                        <DialogHeader>
                            <DialogTitle>Update password</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here.
                            </DialogDescription>
                        </DialogHeader>

                        <div className="grid gp-4 py-4">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Current password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="********"
                                                {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />

                            <FormField
                                control={form.control}
                                name="newPassword"
                                render={({ field }) => (<FormItem>
                                    <FormLabel>New Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="********"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )} />

                            <FormField
                                control={form.control}
                                name="confirmNewPassword"
                                render={({ field }) => (<FormItem>
                                    <FormLabel>Confirm your Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="********"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )} />
                        </div>

                        <DialogFooter>
                            <Button
                                className="gap-2"
                                disabled={isLoading}>
                                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> :
                                    <Save size='16' />}
                                Save
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>

            </DialogContent>

        </Dialog>

    )
}

export default UpdatePasswordBtn;