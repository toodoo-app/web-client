'use client'

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import {useForm } from "react-hook-form";
import { z } from "zod";
import { login } from "@/app/auth/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { LuLoader } from "react-icons/lu";

const FormSchema = z.object({
    email: z.string().email({
        message: "Email must be a valid email.",
    }),
    password: z.string({
        message: "Password must be a valid password.",
    })
});

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(formData) {
        setLoading(true);
        const res = await login(formData);
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
                                <Input type="email" placeholder="Email" {...field} required disabled={loading}/>
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
                                <Input type="password" placeholder="Password" {...field} required disabled={loading}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-center w-full">
                    <Button className="w-full" type="submit" disabled={loading}>
                        { loading ? <LuLoader className="mr-2 h-4 w-4 animate-spin" /> : '' }
                        Login
                    </Button>
                </div>
            </form>
        </Form>
    );
}
 
export default LoginForm;