'use server'

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData) {
    const supabase = createClient();

    const data = {
        email: formData.email,
        password: formData.password
    }

    const { error } = await supabase.auth.signInWithPassword(data);

    if(error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout');
    redirect('/');
}

export async function signup(formData) {
    const supabase = createClient();

    const data = {
        email: formData.email,
        password: formData.password
    }

    const { error } = await supabase.auth.signUp(data);

    if(error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout');
    redirect('/?first-login=true');
}