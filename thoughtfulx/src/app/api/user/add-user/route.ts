import { createClient } from "@/utils/supabase/auth/server";
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises'; // Use fs promises for async operations

export async function POST(
    request: Request,
) {
    const supabase = createClient();
    const params = await request.json();
    
    const userId = params.userId;
    const userEmail = params.email;
    const name = params.name;
    const fullName = params.fullName;

    // Check if user already exists
    const { data: existingUser, error: fetchError } = await supabase
        .from('auth.users')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

    if (fetchError) {
        return new Response(JSON.stringify({ error: fetchError.message }), { status: 500 });
    }

    if (existingUser) {
        return new Response(JSON.stringify({ message: 'User already exists.' }), { status: 400 });
    }

    // upload data to auth.user table in supabase
    const { data, error } = await supabase
        .from('auth.users')
        .insert([
            {
                id: userId,
                email: userEmail,
                name,
                full_name: fullName
            }
        ]);
    
    if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ data }), { status: 201 });
}

