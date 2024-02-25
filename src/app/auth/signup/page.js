import Signup from "@/pages/Auth/Signup";
import { createClient } from "@/lib/supabase/server";

const RegisterPage = async () => {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();

    if(data.user) {
        redirect('/')
    }

    return (
        <Signup />
    );
}
 
export default RegisterPage;