/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "13bcbb8defae7318eb4e35a53c1098e5ddc76e82-22a71d42d1fd0b562bb7.js"
  },
  {
    "url": "13bcbb8defae7318eb4e35a53c1098e5ddc76e82-22a71d42d1fd0b562bb7.js.map",
    "revision": "c01576fd65cb064a05e23adf4a560761"
  },
  {
    "url": "144x144.png",
    "revision": "86b0dda32768b241f5487d92b0fe6def"
  },
  {
    "url": "192x192.png",
    "revision": "6b506b8825c58f7c2feff277fb2e1d62"
  },
  {
    "url": "256x256.png",
    "revision": "a5964e29bfc76dafb9c07458d5d49774"
  },
  {
    "url": "29798ff7c59a770b9437c20c5a088bbd0c1e6a47-bb3b6bac80298de88a50.js"
  },
  {
    "url": "29798ff7c59a770b9437c20c5a088bbd0c1e6a47-bb3b6bac80298de88a50.js.map",
    "revision": "629adf12d37876ef95ecbd792882e54c"
  },
  {
    "url": "32x32.png",
    "revision": "4aac0a1b69c0e3e547372f3f9b22a0c1"
  },
  {
    "url": "384x384.png",
    "revision": "e0b3ecb11d432d10c7a5deade50bba9d"
  },
  {
    "url": "404.html",
    "revision": "652c2cab0a3e74fd768d8434276b236d"
  },
  {
    "url": "404/index.html",
    "revision": "b341253b8ff676bcb9626a7b6b4ee046"
  },
  {
    "url": "48x48.png",
    "revision": "94d7241ca2da9ec544e897bb10d87a27"
  },
  {
    "url": "512x512.png",
    "revision": "030c6d71f5a703a37ed903a2a5be3e8e"
  },
  {
    "url": "64x64.png",
    "revision": "e884a6ded696e0f0dba1c3b578e572b8"
  },
  {
    "url": "72x72.png",
    "revision": "a1bf3b8a42031a1ca5ff4a66abc5467e"
  },
  {
    "url": "7efcbb64e6531db39c789c77cd5c63c08b0064ad-0dd301d8af0f6878671b.js"
  },
  {
    "url": "7efcbb64e6531db39c789c77cd5c63c08b0064ad-0dd301d8af0f6878671b.js.map",
    "revision": "8b8c22c002714d07b516f2d71cdc8a24"
  },
  {
    "url": "8932d030cbc38467b89a4499d67fee28d41f8c45-d56c459ef611bfce920d.js"
  },
  {
    "url": "8932d030cbc38467b89a4499d67fee28d41f8c45-d56c459ef611bfce920d.js.map",
    "revision": "b4dc1841275bd069130bc699175276a2"
  },
  {
    "url": "96x96.png",
    "revision": "4803579e98254c95573be2fe9ece7ba6"
  },
  {
    "url": "app-8d92b016b072b680c54a.js"
  },
  {
    "url": "app-8d92b016b072b680c54a.js.map",
    "revision": "ccdffcb6fb86980bcb953ea648063f03"
  },
  {
    "url": "b066986143f79e61dd04d04d7e4e6925b880f2d5-089c201c15c91336e796.js"
  },
  {
    "url": "b066986143f79e61dd04d04d7e4e6925b880f2d5-089c201c15c91336e796.js.map",
    "revision": "0d417fae01626014317699530655cc56"
  },
  {
    "url": "be6992839dc3f624646ca4d2e31d264f7ef64b32-40384aea8006fce81537.js"
  },
  {
    "url": "be6992839dc3f624646ca4d2e31d264f7ef64b32-40384aea8006fce81537.js.map",
    "revision": "3c57dc9ea3de7609e4a81d8af1622aae"
  },
  {
    "url": "bf961a1bbd49fdcac823c6049c7eaa3ec5632a1c-4f2b38212cb40de8e488.js"
  },
  {
    "url": "bf961a1bbd49fdcac823c6049c7eaa3ec5632a1c-4f2b38212cb40de8e488.js.map",
    "revision": "c460853448c7a8ed5753a86735277419"
  },
  {
    "url": "chunk-map.json",
    "revision": "92c58d9611299f9f8603bff3511f15cf"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-8bd234f402a318d0d4d6.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-8bd234f402a318d0d4d6.js.map",
    "revision": "a98e93624c51e986739619c3f62d3cb9"
  },
  {
    "url": "component---src-pages-404-jsx-dc2cab651e8eecf97a04.js"
  },
  {
    "url": "component---src-pages-404-jsx-dc2cab651e8eecf97a04.js.map",
    "revision": "a9b544e25cf66c52e2106ede79d97f3e"
  },
  {
    "url": "component---src-pages-graphic-system-vhs-jsx-9755473321373463dde2.js"
  },
  {
    "url": "component---src-pages-graphic-system-vhs-jsx-9755473321373463dde2.js.map",
    "revision": "7a407614c6c891400d4b718279362b4d"
  },
  {
    "url": "component---src-pages-index-jsx-f0cd5d42e068ea857941.js"
  },
  {
    "url": "component---src-pages-index-jsx-f0cd5d42e068ea857941.js.map",
    "revision": "e28610705a3e36a035b3f14451902e61"
  },
  {
    "url": "component---src-pages-osoznanny-graph-design-jsx-54c48f160f2cc8f1b0d6.js"
  },
  {
    "url": "component---src-pages-osoznanny-graph-design-jsx-54c48f160f2cc8f1b0d6.js.map",
    "revision": "5395a50bfc36dd577a9cd5366aaf1336"
  },
  {
    "url": "component---src-pages-privacy-jsx-5a0b40a063fc6e8a32d4.js"
  },
  {
    "url": "component---src-pages-privacy-jsx-5a0b40a063fc6e8a32d4.js.map",
    "revision": "0475b3bafe080df7e7d2c563c4ade21b"
  },
  {
    "url": "component---src-pages-public-offer-jsx-8be31dd6a7ee14b3a2c8.js"
  },
  {
    "url": "component---src-pages-public-offer-jsx-8be31dd6a7ee14b3a2c8.js.map",
    "revision": "44001e3cf8beb1b7ece8e35676037f24"
  },
  {
    "url": "component---src-templates-content-post-jsx-9e20930903eed84aecae.js"
  },
  {
    "url": "component---src-templates-content-post-jsx-9e20930903eed84aecae.js.map",
    "revision": "ca3ab87ec604981230a029feaaca8d37"
  },
  {
    "url": "d0be601a090c420f104f65516843ab0659677663-a096991c4ffd8724c182.js"
  },
  {
    "url": "d0be601a090c420f104f65516843ab0659677663-a096991c4ffd8724c182.js.map",
    "revision": "47c26653cced61ac0d3e12fdc2ead8b1"
  },
  {
    "url": "DsSa/index.html",
    "revision": "3dd72a0db9acc2e6e6c42797fb479749"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "4aac0a1b69c0e3e547372f3f9b22a0c1"
  },
  {
    "url": "favicons/32x32.png",
    "revision": "4aac0a1b69c0e3e547372f3f9b22a0c1"
  },
  {
    "url": "framework-9c47b3451f4be90d9ca2.js"
  },
  {
    "url": "framework-9c47b3451f4be90d9ca2.js.map",
    "revision": "6d9d95e2ff2cdab570c615ae55846642"
  },
  {
    "url": "graphic-system-vhs/index.html",
    "revision": "897fbad548bda86775f81cdbf24dbeca"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "4aee4083c10cd3cbef26189913f00715"
  },
  {
    "url": "kak-oformit-abzac/index.html",
    "revision": "346881003a3edc7f0cc9f96c83ea196d"
  },
  {
    "url": "kldfgj/index.html",
    "revision": "9922f007d0373836945a78ab72ac9765"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "6855b3b5ddeb66ab520f746af65c05ef"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "27ca886e3bc156f69acd76e03482a74b"
  },
  {
    "url": "osoznanny-graph-design/index.html",
    "revision": "0aead9ebe23da69878112030d36cce4e"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "2956e8129a28d1ca1b63ec8374ee3b4f"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "b3e7121ad8ab5b516db5e90df2370fe2"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "68eb8ce55162ea6f6466179284cf5992"
  },
  {
    "url": "page-data/DsSa/page-data.json",
    "revision": "46f2a29c3dea182a208d86bdc7e5cee0"
  },
  {
    "url": "page-data/graphic-system-vhs/page-data.json",
    "revision": "3816c90656219866f4f5b1a47367fae6"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "391406f71a50066ab69a3433338f5b13"
  },
  {
    "url": "page-data/kak-oformit-abzac/page-data.json",
    "revision": "3e0f4ee2e8afc899a670cd48af9943eb"
  },
  {
    "url": "page-data/kldfgj/page-data.json",
    "revision": "27b975a2dcb81b662591357b8c8cc520"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/osoznanny-graph-design/page-data.json",
    "revision": "28e63b2da162eaaba2b2ac1255730628"
  },
  {
    "url": "page-data/privacy/page-data.json",
    "revision": "79427f71d372be81a96350bdf72a3bf3"
  },
  {
    "url": "page-data/public-offer/page-data.json",
    "revision": "3fbbfa843ca95cb8507544e833455502"
  },
  {
    "url": "page-data/sdsa/page-data.json",
    "revision": "06eb454103d2d37d15674a812dea1600"
  },
  {
    "url": "page-data/xcxc/page-data.json",
    "revision": "9004fcc64c61a5c2a05fa708cbbb735f"
  },
  {
    "url": "page-data/xczasdd/page-data.json",
    "revision": "af566078d5ee798a19fa710c1ff9da2d"
  },
  {
    "url": "page-data/xczczx/page-data.json",
    "revision": "da2eeab482146cfbeea00a4b267d2246"
  },
  {
    "url": "page-data/xzcsd/page-data.json",
    "revision": "f60d23bd9946e55146b668946d67628a"
  },
  {
    "url": "page-data/zxcsd/page-data.json",
    "revision": "eb170d1fae6301e515d4a2c6c58f13b9"
  },
  {
    "url": "privacy/index.html",
    "revision": "3dd30e777889f8b78c9a6067eb444e59"
  },
  {
    "url": "public-offer/index.html",
    "revision": "087f7fd378d3f66095de5e95d28f9471"
  },
  {
    "url": "sdsa/index.html",
    "revision": "8e0b8a4985269852478c31cac81aef11"
  },
  {
    "url": "sitemap.xml",
    "revision": "65bbb038f5bf35dc488acca9453c1839"
  },
  {
    "url": "static/2681434cb9dd2f190e7bebea8dc12eb3/09c1a/example-02.jpg"
  },
  {
    "url": "static/2681434cb9dd2f190e7bebea8dc12eb3/59538/example-02.jpg"
  },
  {
    "url": "static/2681434cb9dd2f190e7bebea8dc12eb3/84d81/example-02.jpg"
  },
  {
    "url": "static/2681434cb9dd2f190e7bebea8dc12eb3/88b18/example-02.jpg"
  },
  {
    "url": "static/2681434cb9dd2f190e7bebea8dc12eb3/c3638/example-02.jpg"
  },
  {
    "url": "static/2681434cb9dd2f190e7bebea8dc12eb3/f0719/example-02.jpg"
  },
  {
    "url": "static/2681434cb9dd2f190e7bebea8dc12eb3/faa31/example-02.jpg"
  },
  {
    "url": "static/d/1024305506.json"
  },
  {
    "url": "static/d/283452613.json"
  },
  {
    "url": "static/d/3225741509.json"
  },
  {
    "url": "static/d/341965058.json"
  },
  {
    "url": "static/dc4dd6f7fa635fe15d8081d01fa66679/59538/example-01.jpg"
  },
  {
    "url": "static/dc4dd6f7fa635fe15d8081d01fa66679/88b18/example-01.jpg"
  },
  {
    "url": "static/dc4dd6f7fa635fe15d8081d01fa66679/c3638/example-01.jpg"
  },
  {
    "url": "static/dc4dd6f7fa635fe15d8081d01fa66679/faa31/example-01.jpg"
  },
  {
    "url": "static/ezgif.com-gif-to-mp4-d7c0e622a07fe0a029c68515fc1e8909.mp4"
  },
  {
    "url": "static/ff41fc53ab9d288e2a3a121e921614b2/09c1a/author.jpg"
  },
  {
    "url": "static/ff41fc53ab9d288e2a3a121e921614b2/84d81/author.jpg"
  },
  {
    "url": "static/ff41fc53ab9d288e2a3a121e921614b2/dd568/author.jpg"
  },
  {
    "url": "static/ff41fc53ab9d288e2a3a121e921614b2/f0719/author.jpg"
  },
  {
    "url": "static/ff41fc53ab9d288e2a3a121e921614b2/ff087/author.jpg"
  },
  {
    "url": "static/minus-b34c28dfdb3189b74a9b396d852e4faa.png"
  },
  {
    "url": "static/plus-d26e08576e988083b01a2aff3df5d7cb.png"
  },
  {
    "url": "styles-823ae8103e36ae8a7f9f.js"
  },
  {
    "url": "styles-823ae8103e36ae8a7f9f.js.map",
    "revision": "cb39b01d419a543685bd5ad719f1bc3e"
  },
  {
    "url": "styles.bf77f70288cbd2e855bc.css"
  },
  {
    "url": "webpack-runtime-b7443e7c5419e1c3d119.js"
  },
  {
    "url": "webpack-runtime-b7443e7c5419e1c3d119.js.map",
    "revision": "09e22534ef55d26dff06e6fbd1f3c148"
  },
  {
    "url": "webpack.stats.json",
    "revision": "a7055a9d0f8240fcd741d7327f940222"
  },
  {
    "url": "xcxc/index.html",
    "revision": "00002e8aea328b364975382606d5f695"
  },
  {
    "url": "xczasdd/index.html",
    "revision": "6b120d07fa2adca4b02afea62247bf8b"
  },
  {
    "url": "xczczx/index.html",
    "revision": "65949e52f8b17277d3b4c361a5b31714"
  },
  {
    "url": "xzcsd/index.html",
    "revision": "9eaf6a57406ff0bba57a51c0ff400c0b"
  },
  {
    "url": "zxcsd/index.html",
    "revision": "f162fd37b1a1b424be2a46bef512c4a2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-8d92b016b072b680c54a.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
