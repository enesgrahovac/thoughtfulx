import React from 'react';
import styles from './RedirectPage.module.css';

const RedirectPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to ThoughtfulX</h1>
            <p className={styles.message}>You have been redirected here to avoid distractions.</p>
        </div>
    );
};

export default RedirectPage;
