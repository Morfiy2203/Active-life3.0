const staticCachename='s-app-v1'
const assetUrls =[
    'service-worker.js',
    'index.html',
]

self.addEventListener('install',async event =>{
    const cache = await caches.open(staticCachename)
    await cache.addAll(assetUrls)
})

self.addEventListener('activate', event =>{
    console.log('service-worker: activate')
})

self.addEventListener('fetch', event =>{
    event.respondWith(cacheFirst(event.request))
})

async function cacheFirst(request){
    const cached = await caches.match(request)
    return cached ?? await fetch(request)
}