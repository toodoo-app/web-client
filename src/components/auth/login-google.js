'use client'

import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { createClient } from "@/lib/supabase/client";

const LoginWithGoogleButton = () => {

    async function handleSubmit() {
        const supabase = createClient();

        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `http://localhost:3000/auth/callback`,
                queryParams: {
                  access_type: 'offline',
                  prompt: 'consent',
                },
            },
        })
    }

    return (
        <Button variant="outline" onClick={() => handleSubmit()}>
            <FcGoogle className="mr-2" />
            Continue with Google
        </Button>
    );
}
 
export default LoginWithGoogleButton;