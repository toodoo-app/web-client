'use client'

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import {useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
    email: z.string().email({
        message: "Email must be a valid email.",
    }),
    password: z.string({
        message: "Password must be a valid password.",
        // TODO: validate password with zod
    })
});

const LoginForm = () => {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit() {
        
    }
    
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4 mb-4"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={ ({ field }) => (
                        <FormItem>
                            <FormLabel>Email address</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="Email" {...field} required />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={ ({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Password" {...field} required />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-center w-full">
                    <Button className="w-full" type="submit">Login</Button>
                </div>
            </form>
        </Form>
    );
}
 
export default LoginForm;