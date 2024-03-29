'use client'

import { TypographyH3, TypographyMuted, TypographySmall } from "@/components/ui/typography/typo";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SingupEmailForm from "@/components/auth/signup-form";
import LoginWithGoogleButton from "@/components/auth/login-google";

const Signup = () => {
    return (
        <main className="h-full px-4">
            <div className="max-w-80 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="pb-8 text-center">
                    { /* Add logo <img> here */}
                    <TypographyH3>
                        Sign up to start your free trial
                    </TypographyH3>
                    <TypographySmall>
                        Try Things2Do free, cancel anytime
                    </TypographySmall>
                </div>
                <div className="flex flex-col gap-4 mb-4">
                    <LoginWithGoogleButton />
                </div>
                <div className="relative my-8">
                    <hr />
                    <TypographyMuted className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                        OR
                    </TypographyMuted>
                </div>
                <SingupEmailForm />
                <TypographyMuted className="text-center mb-8 text-xs">
                    By clicking the button above, you agree to<br/>our <Link href="/tos" className="underline">Terms of Use</Link> and <Link href="/privacy-policy" className="underline">Privacy Policy</Link>
                </TypographyMuted>
                <div className="w-full text-center">
                    <TypographySmall className="text-center">
                        Already have an account? <Link href="/auth/login" className="underline">Login</Link>.
                    </TypographySmall>
                </div>
            </div>
        </main>
    );
}
 
export default Signup;