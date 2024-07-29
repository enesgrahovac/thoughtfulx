function isDeveloperDocs(url: string): boolean {
    return url.includes("developer.twitter.co") || url.includes("developer.x.co");
}

function isHelpPage(url: string): boolean {
    return url.includes("help.twitter.co") || url.includes("help.x.co");
}

function isApiRoute(url: string): boolean {
    return url.includes("api.twitter.co") || url.includes("api.x.co");
}

function isOauthRoute(url: string): boolean {
    return url.includes("/oauth/authorize");
}

function isTwitterOrX(url: string): boolean {


    let shouldRedirect = false;
    if (url.includes("/twitter.co") || url.includes("/x.co") || url.includes(".x.co")) {
        shouldRedirect = true;
    }

    if (isDeveloperDocs(url)) {
        shouldRedirect = false;
    }

    if (isHelpPage(url)) {
        shouldRedirect = false;
    }

    if (isApiRoute(url)) {
        shouldRedirect = false;
    }

    if (isOauthRoute(url)) {
        shouldRedirect = false;
    }

    return shouldRedirect;
}

function shouldRedirect(url: string): boolean {
    chrome.storage.local.get("focusSettings", function (result) {
        if (chrome.runtime.lastError) {
            return;
        }
        const settings = result.settings;
        console.log("user name handle", settings)

    });
    return !url.includes("/messages") && !url.includes("/compose/post");
}

function handleNavigation(url: string) {
    if (isTwitterOrX(url) && shouldRedirect(url)) {
        window.location.href = "https://thoughtfulx.vercel.app/dashboard";
    }
}

// Initial check
handleNavigation(window.location.href);

// Observe URL changes
const observer = new MutationObserver(() => {
    handleNavigation(window.location.href);
});

observer.observe(document, { subtree: true, childList: true });


window.addEventListener("message", async function (event) {
    if (event.source != window) return; // Only accept messages from the same window
    if (event.origin !== window.location.origin) {
        return;
    }
    const message = event.data;
    const messageType = message.type;

    switch (messageType) {
        case "updateThoughtfulXProfile":

            // Handle the update for focus settings
            const settings = message.settings;
            // Store the new value in chrome.storage.local or perform other actions
            chrome.storage.local.set(
                { settings },
                function () { }
            );
            break;
        default:
            break;
    }
}
)