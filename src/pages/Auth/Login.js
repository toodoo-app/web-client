import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TypographyH1, TypographyMuted, TypographySmall } from "@/components/ui/typography/typo";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const Login = () => {
    return (
        <main className="h-full px-4">
            <div className="max-w-80 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="pb-8 text-center">
                    { /* Add logo <img> here */}
                    <TypographyH1>
                        Log In
                    </TypographyH1>
                </div>
                <div>
                    <div className="flex flex-col gap-4 mb-4">
                        <Button variant="outline" > <FcGoogle className="mr-2" /> Login with Google </Button>
                        <Button variant="outline" > <FaApple className="mr-2" /> Login with Apple </Button>
                        <div className="relative h-4">
                            <hr className="mt-2"/>
                            <TypographyMuted className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                                OR
                            </TypographyMuted>
                        </div>
                    </div>
                </div>
                <form className="flex flex-col gap-4 mb-4">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Email address</Label>
                        <Input type="email" id="email" placeholder="Email" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" placeholder="Password" />
                    </div>
                    
                    <div className="flex justify-center w-full">
                        <Button className="w-full">Login</Button>
                    </div>
                </form>
                <div className="w-full text-center">
                    <TypographySmall>
                        <Link href="/signup" className="underline">Register instead.</Link>
                    </TypographySmall>
                </div>
            </div>
        </main>
    );
}
 
export default Login;