if('serviceWorker' in  navigator){
    navigator.serviceWorker.register("./sw.js")
    .then( data=> console.log("service worker found", data))
    .catch(err=> console.log(err))
}
