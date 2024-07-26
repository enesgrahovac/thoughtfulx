// Register.tsx
import { use, useEffect, useState } from "react";
import React from "react";

import PageLayout from "@/components/PageLayout/PageLayout";
import styles from "./Register.module.css";
import Header from "@/components/patterns/Header/Header";
import Button from "@/components/patterns/Button/Button";
import Image from "next/image";
// import google from "@/public/img/google.png";
// import twitter from "@/public/img/twitter-icon.svg";
import xTwitter from "@/public/img/x-twitter.png";
import { createClient } from '@/utils/supabase/auth/client';
import {useUser} from '@/contexts/UserContext'
const RegisterContent = ({ }: {}) => {
    const supabase = createClient();
    const { lastFileID, setLastFileID } = useUser();
    const [login, setLogin] = useState(false)
    const [titleText, setTitleText] = useState("Register for ThoughtfulX")
    const [preLinkText, setPreLinkText] = useState("Have an account?")
    const [linkText, setLinkText] = useState("Sign in instead")
    const [labelText, setLabelText] = useState("Register with X (Twitter)")

    

    // const [fromUpload, setFromUpload] = useState(false)
    // Check for a fromUpload query parameter
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const fromUpload = urlParams.get('fromUpload');
    }, []);

    useEffect(() => {
        if (login === true) {
            setTitleText("Log in to ThoughtfulX")
            setPreLinkText("Don't have an account?")
            setLinkText("Sign up instead")
            setLabelText("Log in with X (Twitter)")
        } else {
            setTitleText("Register for ThoughtfulX")
            setPreLinkText("Have an account?")
            setLinkText("Sign in instead")
            setLabelText("Register with X (Twitter)")

        }
    }, [login])

    useEffect(() => {
        
        
    }, [supabase.auth])


    useEffect(() => {
        
    }, [lastFileID])

    const callTwitterAuth = async (nextUrl:string) => {
        
        const redirectToURL= `${window.location.origin}/auth/callback`
        
        const result = await supabase.auth.signInWithOAuth({
            provider: "twitter",
            options: {
                redirectTo: redirectToURL,
            },
          });
      
        return result
    }

    const handleLogin = async () => {
        const result = await callTwitterAuth("/dashboard");
        
        const { data, error } = result;
        console.log("registration data", data)
        
        if (error) {
            console.error('Error logging in:', error.message);
        } else {
            
        }
    };

    return (
        <PageLayout showHeader={false}>
            <div className={styles.wrapper}>
                <div className={styles.main}>
                    <Header
                        title={titleText}
                        subtitle={
                            <>
                                {preLinkText}{" "}
                                <a href="#" onClick={(e) => {
                                    e.preventDefault();
                                    setLogin(!login);
                                }}>
                                    {linkText}
                                </a>.
                            </>
                        }
                        className={styles.header}
                    />
                    <div className={styles.buttonWrapper}>
                        <Button
                            variant="primary"
                            label={labelText}
                            icon={
                                <div className={styles.iconWrapper}>
                                    <Image alt="X (Twitter) icon" src={xTwitter} width={16} height={16} />
                                </div>
                            }
                            className={styles.button}
                            onClick={handleLogin}
                        />
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default RegisterContent;
