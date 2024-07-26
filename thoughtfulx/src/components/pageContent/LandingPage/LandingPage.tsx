import React, { useEffect } from "react";
import PageLayout from "@/components/PageLayout/PageLayout";
import styles from "./LandingPage.module.css";
import books from "@/public/img/books_tall_1.png";
import Image from "next/image";
import Divider from "@/components/patterns/Divider/Divider";
import Button from "@/components/patterns/Button/Button";
import { Check, Plus, Send } from "lucide-react";
import Link from "next/link";
import { useUser } from '@/contexts/UserContext'

const LandingPageContent = ({ }: {}) => {
    const [showCopiedMessage, setShowCopiedMessage] = React.useState(false);
    const [showMenuBar, setShowMenuBar] = React.useState(false);
    const { userId } = useUser();

    useEffect(() => {
        if (userId) {
            setShowMenuBar(true);
        }
    }, [userId]);

    return (
        <PageLayout showStaticHeader={true} showMenu={showMenuBar}>
            <div className={styles.wrapper}>
                <div className={styles.main}>
                    <div className={styles.intro}>
                        {/* <p>Meet Molla</p> */}
                        <h1>Pablo template is a stylistic representation of Pablo's design taste.</h1>
                        <h2>
                            Create an app with this template.  👇
                        </h2>
                    </div>

                    <div className={styles.exampleSection}>
                        <Image
                            src={books}
                            alt="Example of smart redirection"
                            className={styles.exampleImage}
                            id={styles.lightBlock}
                        />

                        <div className={styles.exampleText}>
                            <p>
                                Be unburdened by what has been.
                            </p>
                        </div>
                    </div>


                    <Divider />

                    <div className={styles.footer}>
                        <h1>Are You Ready to Be Unburdened?</h1>
                        <div className={styles.buttons}>
                            <Button
                                variant="primary"
                                label="Get started for free"
                                icon={<Plus />}
                                onClick={() => {
                                    window.location.href =
                                        "/auth";
                                }}
                            />
                        </div>
                        {/* <p className={styles.logIn}>
                            Already have an account? <Link href="/auth">Log in</Link>.
                        </p> */}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default LandingPageContent;
