console.log('Content script running');

// Check if the current page is a Twitter (X) page
if (window.location.href.includes("/twitter.co") || window.location.href.includes("/x.co") || window.location.href.includes(".x.co")) {
    // Redirect to custom React page
    // const redirectUrl = chrome.runtime.getURL('redirect.html');
    // console.log('Redirecting to:', redirectUrl);
    if (!(window.location.href.includes("/messages") || window.location.href.includes("/compose/post"))) {
        window.location.href = "https://thoughtfulx.vercel.app/";
    }
}
