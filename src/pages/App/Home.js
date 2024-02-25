'use client'

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const Home = () => {
    const router = useRouter();
    const supabase = createClient();

    async function handleSubmit() {
        const res = await supabase.auth.signOut();
        
        router.refresh()
    }

    return (
        <>
            <p>Homepage!</p>
            <button onClick={handleSubmit}>Sign Out</button>
        </>
    );
}
 
export default Home;