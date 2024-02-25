'use client'

import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyMuted, TypographySmall } from "@/components/ui/typography/typo";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import Link from "next/link";
import LoginForm from "@/components/auth/login-form";

const Login = () => {
    return (
        <main className="h-full px-4">
            <div className="max-w-80 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="pb-8 text-center">
                    { /* Add logo <img> here */}
                    <TypographyH3>
                        Log In
                    </TypographyH3>
                </div>
                <div className="flex flex-col gap-4 mb-4">
                    <Button variant="outline" > <FcGoogle className="mr-2" /> Login with Google </Button>
                    <Button variant="outline" > <FaApple className="mr-2" /> Login with Apple </Button>
                </div>
                <div className="relative my-8">
                    <hr />
                    <TypographyMuted className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                        OR
                    </TypographyMuted>
                </div>
                <LoginForm />
                <div className="w-full text-center">
                    <TypographySmall asChild>
                        <Link href="/auth/signup" className="underline">Register instead.</Link>
                    </TypographySmall>
                </div>
            </div>
        </main>
    );
}
 
export default Login;