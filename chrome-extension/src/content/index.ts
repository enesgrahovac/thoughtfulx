

function isTwitterOrX(url: string): boolean {
  return url.includes("/twitter.co") || url.includes("/x.co") || url.includes(".x.co");
}

function shouldRedirect(url: string): boolean {
  return !url.includes("/messages") && !url.includes("/compose/post");
}

function handleNavigation(url: string) {
  if (isTwitterOrX(url) && shouldRedirect(url)) {
    window.location.href = "https://thoughtfulx.vercel.app/";
  }
}

// Initial check
handleNavigation(window.location.href);

// Observe URL changes
const observer = new MutationObserver(() => {
  handleNavigation(window.location.href);
});

observer.observe(document, { subtree: true, childList: true });
