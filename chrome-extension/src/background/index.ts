console.log('Background script running');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "PAGE_VISIT" && message.url) {
        console.log(`ThoughtfulX says you're on X! URL: ${message.url}`);
    }
});
