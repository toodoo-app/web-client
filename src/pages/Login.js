import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { TypographyMuted } from "@/components/ui/typography/typo";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
    return (
        <main className="h-full">
            <Card className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4">
                <CardHeader>
                    <img src="" />
                    <CardTitle className="mx-auto">Login</CardTitle>
                    <CardDescription className="mx-auto">Enter your credentials below to login.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-4 mb-4">
                        <Button variant="outline"> <FcGoogle className="mr-2" /> Login with Google</Button>
                        <Button variant="outline"> <FaFacebookF className="mr-2" fill="blue"/>Login with Facebook</Button>
                        <Button variant="outline"> <FaApple className="mr-2" /> Login with Apple</Button>
                        <hr/>
                    </div>
                    <form className="flex flex-col gap-4 mb-8">
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Password" />
                        <div className="flex justify-center w-full">
                            <Button className="w-full">Login</Button>
                        </div>
                    </form>
                    <TypographyMuted className="text-center">
                        By clicking continue, you agree to our <Link href="#" className="underline">Terms of Service</Link> and <Link className="underline" href="#">Privacy Policy</Link>.
                    </TypographyMuted>
                </CardContent>
            </Card>
        </main>
    );
}
 
export default Login;