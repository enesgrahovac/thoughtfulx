"use client"
import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { createClient } from '@/utils/supabase/auth/client';
import { useRouter } from 'next/navigation'
import { getUserSubscriptionStatus, addUserdata } from '@/utils/user'
import { useExtension } from '@/contexts/ExtensionContext';
type UserContextType = {
    userEmail?: string;
    userId?: string;
    isSubscribed?: boolean;
    hasUserPassedFreeTrial?: boolean;
    logOutUser?: () => void;
    twitterHandle?: string;
    isUserDataLoading?: boolean;

};

const defaultUserContext: UserContextType = {
    userEmail: '',
    userId: '',
    isSubscribed: false,
    hasUserPassedFreeTrial: true,
    logOutUser: () => { },
    twitterHandle: '',
    isUserDataLoading: true
};

export const UserContext = createContext<UserContextType>(defaultUserContext);

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
    // Initialize state without trying to access localStorage directly
    const [userEmail, setUserEmail] = useState<string>('')
    const [userId, setUserId] = useState<string>('')
    const [isSubscribed, setIsSubscribed] = useState<boolean>(false)
    const [hasUserPassedFreeTrial, setHasUserPassedFreeTrial] = useState<boolean>(false)
    const [twitterHandle, setTwitterHandle] = useState<string>('')
    const [isUserDataLoading, setIsUserDataLoading] = useState<boolean>(true)
    const {updateThoughtfulXExtentionSettings} = useExtension()
    const supabase = createClient();

    const logOutUser = async () => {
        setUserId('')
        setUserEmail('')
        setIsSubscribed(false)
    }

    // const checkSubscription = async () => {
    //     const userSub = await getUserSubscriptionStatus(userId);

    //     setIsSubscribed(userSub['isPremium'])
    // }

    // useEffect(() => {
    //     if (userId) {
    //         checkSubscription()
    //     }
    // }, [userId])

    const getUser = async () => {

        const { data, error } = await supabase.auth.getUser()
        console.log(data, error)
        if (error || !data?.user) {
            // router.push(`/auth`)
            return
        }

        if (!data.user?.email) {
            return
        }

        setUserEmail(data.user.email)
        setUserId(data.user.id)
        const twitterHandle = data.user.user_metadata?.user_name
        setTwitterHandle(twitterHandle)
        const userData = {
            createdAt: data.user.created_at,
            userId: data.user.id,
            email: data.user.email,
            name: data.user.user_metadata?.full_name,
            fullName: data.user.user_metadata?.full_name,
            handle: twitterHandle,
            avatarUrl: data.user.user_metadata?.avatar_url
        }
        addUserdata(userData)
        console.log("twitterHandle 1 ", twitterHandle)
        if (twitterHandle){
            updateThoughtfulXExtentionSettings(twitterHandle)
        }

    }

    useEffect(() => {
        setIsUserDataLoading(true)
        getUser()
        setIsUserDataLoading(false)
    }, [supabase.auth])

    return (
        <UserContext.Provider value={{ 
            userEmail, userId, isSubscribed, 
            hasUserPassedFreeTrial, logOutUser, 
            twitterHandle, isUserDataLoading }}>
            {children}
        </UserContext.Provider>
    );
};