"use client"
import React, { createContext, useContext, useEffect, useState, useRef, ReactNode } from "react";

type ExtensionContextType = {
    isExtensionInstalled: boolean;
    isExtensionCheckComplete: boolean;
    clearExtensionData: () => void;
    updateThoughtfulXExtentionSettings: (twitterHandle:string) => void;
};

// Create a context for the extension state
const defaultExtensionContext: ExtensionContextType = {
    isExtensionInstalled: false,
    isExtensionCheckComplete: false,
    clearExtensionData: () => { },
    updateThoughtfulXExtentionSettings: () => { },
};

// Initialize the context with an undefined default value
export const ExtensionContext = createContext<ExtensionContextType>(defaultExtensionContext);

type Props = {
    children: ReactNode;
};

// Provider component
export const ExtensionProvider: React.FC<Props> = ({ children }) => {
    const [isExtensionInstalled, setIsExtensionInstalled] = useState(false);
    const [isExtensionCheckComplete, setIsExtensionCheckComplete] = useState(false);

    function useUpdateEffect(effect: () => void | (() => void | undefined), dependencies: any[]) {
        const isInitialMount = useRef(true);

        useEffect(() => {
            if (isInitialMount.current) {
                isInitialMount.current = false;
            } else {
                return effect();
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, dependencies);
    }

    // useUpdateEffect(() => {
    //     updateThoughtfulXExtentionSettings();
    // }, []);

    const updateThoughtfulXExtentionSettings = async (twitterHandle:string) => {
        console.log("twitterHandle updating in web app", twitterHandle)
        if (!twitterHandle) {
            return;
        }

        const settings = {
            twitterHandle,
        };
        
        window.postMessage({ type: "updateThoughtfulXProfile", settings }, "*");
    };

    const clearExtensionData = async () => {
        window.postMessage({ type: "clearExtensionData" }, "*");
    };

    // useEffect(() => {
    //     if (!isUserDataLoading && ser) {
    //         window.localStorage.removeItem("twitterHandle");
    //         window.localStorage.removeItem("refreshToken");
    //         clearExtensionData();
    //     }
    // }, [isUserDataLoading]);

    return (
        <ExtensionContext.Provider value={{
            isExtensionInstalled,
            isExtensionCheckComplete,
            clearExtensionData,
            updateThoughtfulXExtentionSettings
        }}>
            {children}
        </ExtensionContext.Provider>
    );
};

// Use this hook in your components to access the extension state
export const useExtension = () => useContext(ExtensionContext);
