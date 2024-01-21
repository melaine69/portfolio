"use client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInUser } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, LogIn } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod"
import { useRouter } from "next-nprogress-bar";

const LoginFormSchema = z.object({
    email: z.string().email('Adresse e-mail invalide'),
    password: z.string().min(8, 'Le mot de passe doit comporter minimum 8 caractères')

})

type LoginFormValues = z.infer<typeof LoginFormSchema>;

export default function LoginPage() {
const [isLoading, setIsLoading] = useState(false)

const router = useRouter()

    const form = useForm<LoginFormValues>({ resolver: zodResolver(LoginFormSchema) })

    const handleSubmit = async (values: LoginFormValues) => {
        try {
            setIsLoading(true)
            await signInUser(values);
            router.push('/admin')

        } catch (error: any) {
            console.error(error)
            toast.error(error.message)
            
        } finally {
            setIsLoading(false);
        }
       
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="flex h-screen w-screen justify-center items-center">
                <Card>
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>Login to the administration space</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="example@example.com"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (<FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="********"
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )} />

                    </CardContent>
                    <CardFooter className="justify-center">
                        <Button 
                        disabled={isLoading}
                        className="gap-2">
                        { isLoading ?
                            <Loader2 size="16" className="animate-spin"/> 
                            : <LogIn size="16"/> 
                        }
                            Login</Button>  
                            
                    </CardFooter>
                </Card>
            </form>

        </Form>

    )
}