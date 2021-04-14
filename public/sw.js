const staticCacheName = "site-static"
const assets = [
    "/",
    "./index.html",
    "./css/styles.css",
    "./js/app.js",
    "./js/time.js",
    "./aos-master/dist/aos.css",
    "./aos-master/dist/aos.js",
    "./img/twitter.svg",
    "./img/whatsapp.svg",
    "./img/gmail.svg",
    "./img/linkedin.svg",
    "./img/facebook.svg"
]  


//install service worker  
self.addEventListener("install", evt=>{
    console.log("service worker installed")
    evt.waitUntil(
        caches.open(staticCacheName).then(cache=>{
            console.log("caching assets")
            cache.addAll(assets)
        })
    )
   
})

//activate service worker
self.addEventListener("activate", evt=>{
    console.log("service worker has been activated")
})

//fetch event
self.addEventListener("fetch", evt=>{
    console.log("fetch event..",evt)
    //get cache items
    evt.respondWith(
        caches.match(evt.request)
        .then(cacheRes=>{
            return cacheRes || fetch(evt.request)
        })
    )

})
