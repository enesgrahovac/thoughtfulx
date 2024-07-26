import { createClient } from '@/utils/supabase/auth/server';

export const callTwitterAuth = async (nextUrl:string) => {
    const supabase = createClient();
    const redirectToURL= `${window.location.origin}/auth/callback`
    
    const result = await supabase.auth.signInWithOAuth({
        provider: "twitter",
        options: {
            redirectTo: redirectToURL,
        },
      });
  
    return result
}

export const handleLogin = async () => {
    const result = await callTwitterAuth("/dashboard");
    
    const { data, error } = result;
    console.log("registration data", data)
    
    if (error) {
        console.error('Error logging in:', error.message);
    } else {
        
    }
};
