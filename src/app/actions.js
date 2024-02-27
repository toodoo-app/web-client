'use server'

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProfile(data) {
    const supabase = createClient();
    const uuid = await supabase.auth.getUser().then( (res) => {
        return res.data.user.id;
    })

    // TODO: change once I'll add RLS
    const { error } = await supabase
    .from('profiles')
    .upsert({name: data.name, reason: data.reason, first_update: 1})
    .eq("user_id", uuid);

    // TODO: save user plan in another table

    if(error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout');
    redirect('/')
}