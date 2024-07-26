import { createClient } from '@/utils/supabase/auth/client';

export const callTwitterAuth = async () => {
    const supabase = createClient();
    const redirectToURL= `${window.location.origin}/auth/callback`
    console.log("redirect to url", redirectToURL)
    const result = await supabase.auth.signInWithOAuth({
        provider: "twitter",
        options: {
            redirectTo: redirectToURL,
        },
      });
  
    return result
}

export const handleLogin = async () => {
    const result = await callTwitterAuth();
    
    const { data, error } = result;
    console.log("registration data", data)
    
    if (error) {
        console.error('Error logging in:', error.message);
    } else {
        
    }
};
