(()=>{"use strict";function e(e){(function(e){let t=!1;return(e.includes("/twitter.co")||e.includes("/x.co")||e.includes(".x.co"))&&(t=!0),function(e){return e.includes("developer.twitter.co")||e.includes("developer.x.co")}(e)&&(t=!1),function(e){return e.includes("help.twitter.co")||e.includes("help.x.co")}(e)&&(t=!1),function(e){return e.includes("api.twitter.co")||e.includes("api.x.co")}(e)&&(t=!1),t})(e)&&function(e){return!e.includes("/messages")&&!e.includes("/compose/post")}(e)&&(window.location.href="https://thoughtfulx.vercel.app/dashboard")}e(window.location.href),new MutationObserver((()=>{e(window.location.href)})).observe(document,{subtree:!0,childList:!0})})();