import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PageLayout from "@/components/PageLayout/PageLayout";
import styles from "./SettingsPageContent.module.css";
import classNames from "classnames";
import TextInput from "@/components/patterns/TextInput/TextInput";
import Header from "@/components/patterns/Header/Header";
import Divider from "@/components/patterns/Divider/Divider";
import Button from "@/components/patterns/Button/Button";
import { SubscriptionBenefits } from "@/components/patterns/Modal/templates/SubscribeModal/SubscribeModal";
import { useUser } from '@/contexts/UserContext'
import { createClient } from '@/utils/supabase/auth/client'

import { upgradeToPremium } from '@/utils/stripe/subscription'
export interface FocusTimeSettingsProps { }

const SettingsPageContent = ({ }) => {
    const router = useRouter();
    const [isOnTrial, setIsOnTrial] = useState(false);
    // const [renewalDate, setRenewalDate] = useState("");
    const { userEmail, userId, isSubscribed, logOutUser } = useUser();
    const supabase = createClient();



    const manageSubscription = async () => {
        // const portalUrl = await getStripeCheckoutURL();
        // router.push(portalUrl);
    };

    const signOut = async () => {
        
        await supabase.auth.signOut();
        if (logOutUser) {
            await logOutUser()
        }
        router.push("/auth");

    };

    return (
        <PageLayout title="Settings" showStaticHeader={true}>
            <div className={styles.main}>
                <div className={styles.section}>
                    <Header
                        title="Your plan"
                        subtitle={
                            !isSubscribed
                                ? isOnTrial
                                    ? "Currently on the free trial. Upgrade to Pro now to ensure you don't lose access to unlimited quiz taking and quiz creation."
                                    : <span>Join ThoughtfulX Pro to gain access to unlimited quiz taking, and quiz creation!<br /><br /> For early supporters, we're offering a one-time payment of $99 for lifetime access. 7-day money-back guarantee. This will change to a subscription model soon.</span>
                                // : `Your subscription renews on ${renewalDate}.`
                                : `You're on an active subscription forever! This is the perks of being an early adopter. Tell a friend!`
                        }
                    />
                    {isSubscribed ? (
                        // <Button
                        //     label="Manage subscription"
                        //     className={styles.button}
                        //     onClick={manageSubscription}
                        // />
                        ``
                    ) : (
                        <>
                            <div className={styles.benSection}>
                                <p className={styles.miniHeader}>
                                    {isOnTrial ? (
                                        <>Join Pro to keep...</>
                                    ) : (
                                        <>Join Pro to unlock...</>
                                    )}
                                </p>
                                <SubscriptionBenefits />
                            </div>
                            <Button
                                variant="primary"
                                label="Join ThoughtfulX Pro for a one-time payment of $99"
                                className={styles.button}
                                onClick={() => {
                                    if (userId) {
                                        upgradeToPremium(userId);
                                    } else {
                                        // Optionally handle the case where userId is undefined
                                        console.error("User ID is undefined. Cannot upgrade to premium.");
                                    }
                                }}
                            />
                        </>
                    )}
                </div>
                <Divider />
                <div className={styles.section}>
                    <TextInput label="Email" prefilledValue={userEmail || ""} disabled />
                    <Button
                        variant="secondary"
                        label="Log out"
                        className={styles.button}
                        onClick={signOut}
                    />
                </div>
            </div>
        </PageLayout>
    );
};

export default SettingsPageContent;
