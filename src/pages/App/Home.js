'use client'

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import DialogOnboarding from "@/components/onboarding/dialog";

const Home = ({ firstlogin }) => {
    const router = useRouter();
    const supabase = createClient();

    async function handleSubmit() {
        const res = await supabase.auth.signOut();
        router.refresh()
    }

    return (
        <>
            <p>Homepage!</p>
            <DialogOnboarding />
            <button onClick={handleSubmit}>Sign Out</button>
        </>
    );
}
 
export default Home;