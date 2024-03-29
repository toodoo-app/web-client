'use client'

import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import {useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signup } from "@/app/auth/actions";
import { useState } from "react";
import { LuLoader } from "react-icons/lu";
import { useSearchParams } from "next/navigation";

const FormSchema = z.object({
    email: z.string().email({
        message: "Email must be a valid email.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long."
    })
    .refine( (password) => {
        const lowercaseRegex = /[a-z]/;
        const uppercaseRegex = /[A-Z]/;
        const symbolRegex = /^[\w!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+$/;

        const containsLowercase = lowercaseRegex.test(password);
        const containsUppercase = uppercaseRegex.test(password);
        const containsSymbol = symbolRegex.test(password);

        return containsLowercase && containsUppercase && containsSymbol;
    }, {message: "Password must contain at least one lowercase letter, one uppercase letter, and one symbol."})
});

const SingupEmailForm = () => {
    const params = useSearchParams();
    const error = params.get('error');
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
        const res = await signup(formData);
        setLoading(false);
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
                            <FormLabel>Your Email Address</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="email@address.com" {...field} required disabled={loading} />
                            </FormControl>
                            <FormMessage>{ error ? error : '' }</FormMessage>
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
                                <Input type="password" placeholder="Password" {...field} required disabled={loading} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex justify-center w-full">
                    <Button className="w-full" type="submit" disabled={loading}>
                        { loading ? <LuLoader className="mr-2 h-4 w-4 animate-spin" /> : '' }
                        Sign up with email
                    </Button>
                </div>
            </form>
        </Form>
    );
}
 
export default SingupEmailForm;