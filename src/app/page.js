import Home from "@/pages/App/Home";
import { createClient } from "@/lib/supabase/server";
import { redirect } from 'next/navigation';

export default async function HomePage() {

  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if(error || !data?.user) {
      redirect('/auth/login')
  }

  return (
    <Home />    
  );
}
