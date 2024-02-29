'use server'

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData) {
    const supabase = createClient();

    const userData = {
        email: formData.email,
        password: formData.password
    }

    const { data, error } = await supabase.auth.signInWithPassword(userData);

    if(error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout');
    redirect('/');
}

export async function signup(formData) {
    const supabase = createClient();

    const userData = {
        email: formData.email,
        password: formData.password
    }

    const { data, error } = await supabase.auth.signUp(userData);

    if(error) {
        redirect('/error')
    } else if (data.user && data.user.identities && data.user.identities.length === 0) {
        const error = encodeURIComponent('User already exists.');
        revalidatePath('/', 'layout');
        redirect('/auth/signup?error=' + error);
    }

    revalidatePath('/', 'layout');
    redirect('/?first-login=true');
}
