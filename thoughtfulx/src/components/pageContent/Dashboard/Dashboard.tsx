import { useEffect, useState } from 'react';
import styles from './Dashboard.module.css';
import { useUser } from '@/contexts/UserContext'
import Button from "@/components/patterns/Button/Button";
import Divider from "@/components/patterns/Divider/Divider";
import Header from "@/components/patterns/Header/Header";
import { AlertCircle, Bell, BellOff, Check, Clock, Share } from "lucide-react";
import PageLayout from "@/components/PageLayout/PageLayout";

export async function copyTextToClipboard(text: string): Promise<void> {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) { }
}

export default function DashboardContent() {

    // const [ showCopiedMessage, setShowCopiedMessage ] = useState(false);
    const { userId } = useUser();

    return (
        <PageLayout title="Home" showStaticHeader={true} showMenu={false}>
            <div className={styles.dashboardContainer}>
                <div className={styles.actionsContainer}>
                    <div className={styles.actionsContents}>
                        <h2 >Choose an action!</h2>
                        <div className={styles.actionButtonsContainer}>
                            <div className={styles.actionButtons}>
                                <Button label="Send Message" onClick={() => { window.location.href = 'https://x.com/messages/compose'; }} />
                                <Button label="Write a Post" onClick={() => { window.location.href = 'https://x.com/compose/post'; }} />
                                <Button label="Check Inbox" onClick={() => { window.location.href = 'https://x.com/messages'; }} />
                                <Button label="View Profile" onClick={() => { window.location.href = 'https://x.com/profile'; }} />
                            </div>
                        </div>
                        <div className={styles.featureRequest}>
                            Missing something? <a href="https://www.google.com">request a new action</a>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
