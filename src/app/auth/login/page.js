import Login from "@/pages/Auth/Login";
import { redirect } from 'next/navigation';
import { createClient } from "@/lib/supabase/server";

const LoginPage = async () => {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();

    if(data.user) {
        redirect('/')
    }

    return (
        <Login />
    );
}
 
export default LoginPage;