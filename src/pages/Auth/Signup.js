'use client'

import { TypographyH3, TypographyMuted, TypographySmall } from "@/components/ui/typography/typo";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
                        Try Stuph free, cancel anytime
                    </TypographySmall>
                </div>
                <div className="flex flex-col gap-4 mb-4">
                    <Button variant="outline" > <FcGoogle className="mr-2" /> Continue with Google </Button>
                    <Button variant="outline" > <FaApple className="mr-2" /> Continue with Apple </Button>
                </div>
                <div className="relative my-8">
                    <hr />
                    <TypographyMuted className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                        OR
                    </TypographyMuted>
                </div>
                <form className="flex flex-col gap-4 mb-4">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Your Email Address</Label>
                        <Input type="email" id="email" placeholder="email@address.com" required/>
                    </div>

                    <div className="flex justify-center w-full">
                        <Button className="w-full">Sign up with email</Button>
                    </div>
                </form>
                <TypographyMuted className="text-center mb-8 text-xs">
                    By clicking the button above, you agree to<br/>our <Link href="/tos" className="underline">Terms of Use</Link> and <Link href="/privacy-policy" className="underline">Privacy Policy</Link>
                </TypographyMuted>
                <div className="w-full text-center">
                    <TypographySmall className="text-center">
                        Already have an account? <Link href="/login" className="underline">Login</Link>.
                    </TypographySmall>
                </div>
            </div>
        </main>
    );
}
 
export default Signup;