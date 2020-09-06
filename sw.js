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
    "url": "13bcbb8defae7318eb4e35a53c1098e5ddc76e82-58779a2189248d9d2fc7.js"
  },
  {
    "url": "13bcbb8defae7318eb4e35a53c1098e5ddc76e82-58779a2189248d9d2fc7.js.map",
    "revision": "b512925d8c583a2e91248e0c0a5a609b"
  },
  {
    "url": "29798ff7c59a770b9437c20c5a088bbd0c1e6a47-32d504bf422607c21d00.js"
  },
  {
    "url": "29798ff7c59a770b9437c20c5a088bbd0c1e6a47-32d504bf422607c21d00.js.map",
    "revision": "e7595ba361b99a22a5df95c72cefe11c"
  },
  {
    "url": "3fb6e09046e48dc2f922d0e7dbc6422de318ad33-ef64e6ea407fe15c0a6d.js"
  },
  {
    "url": "3fb6e09046e48dc2f922d0e7dbc6422de318ad33-ef64e6ea407fe15c0a6d.js.map",
    "revision": "df0846d9c4d312ea38c487e9355139ea"
  },
  {
    "url": "404.html",
    "revision": "a7e6d6f4bb1cf1f38dc7973603ef4bb1"
  },
  {
    "url": "404/index.html",
    "revision": "2ee59ab4141e1d2656913fcc4455bf09"
  },
  {
    "url": "7efcbb64e6531db39c789c77cd5c63c08b0064ad-02234e674e8a666911b4.js"
  },
  {
    "url": "7efcbb64e6531db39c789c77cd5c63c08b0064ad-02234e674e8a666911b4.js.map",
    "revision": "7fc9bd65c3476a9c9ee17f50b40f8961"
  },
  {
    "url": "8932d030cbc38467b89a4499d67fee28d41f8c45-00ce0ec2c6f4f6fa292c.js"
  },
  {
    "url": "8932d030cbc38467b89a4499d67fee28d41f8c45-00ce0ec2c6f4f6fa292c.js.map",
    "revision": "2630413607a9f2f6f5e5e27629fcd1c7"
  },
  {
    "url": "app-90544495104dd303162d.js"
  },
  {
    "url": "app-90544495104dd303162d.js.map",
    "revision": "677c26fce5622f8fb7c94ddf705301bb"
  },
  {
    "url": "b066986143f79e61dd04d04d7e4e6925b880f2d5-eb099fe1f42686694fdf.js"
  },
  {
    "url": "b066986143f79e61dd04d04d7e4e6925b880f2d5-eb099fe1f42686694fdf.js.map",
    "revision": "52db59cbd6282e1a31d16a4d955720e6"
  },
  {
    "url": "be6992839dc3f624646ca4d2e31d264f7ef64b32-1a731ce9ee7f513b6430.js"
  },
  {
    "url": "be6992839dc3f624646ca4d2e31d264f7ef64b32-1a731ce9ee7f513b6430.js.map",
    "revision": "c3317fd015eb5a8cf7efdae7b1e61e82"
  },
  {
    "url": "bf961a1bbd49fdcac823c6049c7eaa3ec5632a1c-ec666c3b577a0553f81c.js"
  },
  {
    "url": "bf961a1bbd49fdcac823c6049c7eaa3ec5632a1c-ec666c3b577a0553f81c.js.map",
    "revision": "0693e1af699cb3b110451245399c03d8"
  },
  {
    "url": "chunk-map.json",
    "revision": "de26cfd1803a973fdc0b7ceb0f4fce6f"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-44a3d32a276e43a00bf2.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-44a3d32a276e43a00bf2.js.map",
    "revision": "a56ff5f71a9ab8476cb58fa91d330432"
  },
  {
    "url": "component---src-pages-404-jsx-fd08e91353af8d4186a7.js"
  },
  {
    "url": "component---src-pages-404-jsx-fd08e91353af8d4186a7.js.map",
    "revision": "16e9640b7c77cb1754701e5a073cc174"
  },
  {
    "url": "component---src-pages-graphic-system-vhs-jsx-fe512a6bebdb995702f9.js"
  },
  {
    "url": "component---src-pages-graphic-system-vhs-jsx-fe512a6bebdb995702f9.js.map",
    "revision": "a0242b39e364bd77e20992a59bf2afd0"
  },
  {
    "url": "component---src-pages-index-jsx-f32abf5de8a53c5c5f21.js"
  },
  {
    "url": "component---src-pages-index-jsx-f32abf5de8a53c5c5f21.js.map",
    "revision": "461eb9c93fb2f102d15181bb79ca90d4"
  },
  {
    "url": "component---src-pages-osoznanny-graph-design-jsx-736c6d91497a393e8d32.js"
  },
  {
    "url": "component---src-pages-osoznanny-graph-design-jsx-736c6d91497a393e8d32.js.map",
    "revision": "df314e0acec73aec2db25f1d01b42af6"
  },
  {
    "url": "component---src-pages-privacy-jsx-44be63bc5368820c1a30.js"
  },
  {
    "url": "component---src-pages-privacy-jsx-44be63bc5368820c1a30.js.map",
    "revision": "75608533fc34f59c0263711175b11f3c"
  },
  {
    "url": "component---src-pages-public-offer-jsx-8ddeebf77151a321d975.js"
  },
  {
    "url": "component---src-pages-public-offer-jsx-8ddeebf77151a321d975.js.map",
    "revision": "143789c4d1dabd05a1b93082faae5c8d"
  },
  {
    "url": "component---src-templates-content-post-jsx-fd88cac9346a4c1575df.js"
  },
  {
    "url": "component---src-templates-content-post-jsx-fd88cac9346a4c1575df.js.map",
    "revision": "598ee3dca30aec8d15419c1d56119629"
  },
  {
    "url": "d0be601a090c420f104f65516843ab0659677663-ba0a59038ab0c1fa8f96.js"
  },
  {
    "url": "d0be601a090c420f104f65516843ab0659677663-ba0a59038ab0c1fa8f96.js.map",
    "revision": "7184138502b4ba0982aa64521091694a"
  },
  {
    "url": "DsSa/index.html",
    "revision": "a861188661d89eefc8c7c5b50a73dd5b"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "4aac0a1b69c0e3e547372f3f9b22a0c1"
  },
  {
    "url": "framework-a4a40a510a3f90360722.js"
  },
  {
    "url": "framework-a4a40a510a3f90360722.js.map",
    "revision": "cc276801ec703c80b7c924c256fc05ce"
  },
  {
    "url": "graphic-system-vhs/index.html",
    "revision": "e2157c1c3cdc0f9990d482380abe3d31"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "86b0dda32768b241f5487d92b0fe6def"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "6b506b8825c58f7c2feff277fb2e1d62"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "a5964e29bfc76dafb9c07458d5d49774"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "e0b3ecb11d432d10c7a5deade50bba9d"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "94d7241ca2da9ec544e897bb10d87a27"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "030c6d71f5a703a37ed903a2a5be3e8e"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "a1bf3b8a42031a1ca5ff4a66abc5467e"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "4803579e98254c95573be2fe9ece7ba6"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "6169fe49de07fcf46bb3cc79759a48a3"
  },
  {
    "url": "kak-oformit-abzac/index.html",
    "revision": "17aa8ad9fd53a08a474c59d9e33ec40a"
  },
  {
    "url": "kldfgj/index.html",
    "revision": "6b9f42e8e14be4c38c215db1b450fa00"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "c422908d757899e14d36022951c8b42b"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a497e946637c50ea5a15196f93bc96f1"
  },
  {
    "url": "osoznanny-graph-design/index.html",
    "revision": "a3739ce4b8b9f07e6d45d5ecc0a7cd53"
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
    "revision": "8e73e993ad825196b91d26e5be66b0cf"
  },
  {
    "url": "page-data/DsSa/page-data.json",
    "revision": "46f2a29c3dea182a208d86bdc7e5cee0"
  },
  {
    "url": "page-data/graphic-system-vhs/page-data.json",
    "revision": "ca101769f7e8bc8ddc95c64dfb169a9d"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "cfde5cd5484109c163307d037aac79cb"
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
    "revision": "8ecda6b3c7a710e93fa575e546131504"
  },
  {
    "url": "public-offer/index.html",
    "revision": "7f4fb2f2d5501298a9c513db79d5aa80"
  },
  {
    "url": "sdsa/index.html",
    "revision": "224011d5f5fdc3f5e48beb403721e9d4"
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
    "url": "static/6d91c86c0fde632ba4cd01062fd9ccfa/2a4de/gatsby-astronaut.png"
  },
  {
    "url": "static/6d91c86c0fde632ba4cd01062fd9ccfa/5db04/gatsby-astronaut.png"
  },
  {
    "url": "static/6d91c86c0fde632ba4cd01062fd9ccfa/62b1f/gatsby-astronaut.png"
  },
  {
    "url": "static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png"
  },
  {
    "url": "static/6d91c86c0fde632ba4cd01062fd9ccfa/6d161/gatsby-astronaut.png"
  },
  {
    "url": "static/6d91c86c0fde632ba4cd01062fd9ccfa/ee604/gatsby-astronaut.png"
  },
  {
    "url": "static/d/1024305506.json"
  },
  {
    "url": "static/d/1132682437.json"
  },
  {
    "url": "static/d/143701507.json"
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
    "url": "static/EBGaramond-Italic-098122b02f9e748abd72b2e60324f48c.woff2"
  },
  {
    "url": "static/EBGaramond-Italic-60dd11199206303d7a432c960741f97e.woff"
  },
  {
    "url": "static/EBGaramond-Italic-6ca0303680da56bcea3567199d676158.eot"
  },
  {
    "url": "static/EBGaramond-Italic-9f10fd9f93e369bf820083acd3bd93cd.ttf"
  },
  {
    "url": "static/EBGaramond-Medium-9f84a210cc6976fef03cd43a1b68fb4b.eot"
  },
  {
    "url": "static/EBGaramond-Medium-b6f13fda485df39e0e0afa71212871bb.ttf"
  },
  {
    "url": "static/EBGaramond-Medium-d574d615c410729e3a9a9ceae69e258d.woff"
  },
  {
    "url": "static/EBGaramond-Medium-db23d9144146b79435cdcd37ca6e9e01.woff2"
  },
  {
    "url": "static/EBGaramond-MediumItalic-3f655cb052f20d738dc43773d7e4b4d4.woff"
  },
  {
    "url": "static/EBGaramond-MediumItalic-72b88f057a83fa1d10d3d9446603ab1f.eot"
  },
  {
    "url": "static/EBGaramond-MediumItalic-8d14a579883f6e2da94dbed1e930e49e.ttf"
  },
  {
    "url": "static/EBGaramond-MediumItalic-f9da3ec36e3236485c6caf81af8a0689.woff2"
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
    "url": "styles.223c0323c6001b71ae2b.css"
  },
  {
    "url": "webpack-runtime-0543904cd5e6cd050570.js"
  },
  {
    "url": "webpack-runtime-0543904cd5e6cd050570.js.map",
    "revision": "64d32cd86509641cb6952bedba9f08c7"
  },
  {
    "url": "webpack.stats.json",
    "revision": "2380ece8471f863a9336dbc1666f7e86"
  },
  {
    "url": "xcxc/index.html",
    "revision": "22097a33c6f96d7a920622b85758a675"
  },
  {
    "url": "xczasdd/index.html",
    "revision": "147eb13b26e3f6d5a89d38303df02c86"
  },
  {
    "url": "xczczx/index.html",
    "revision": "7b17ea8192f238a7e8c9fc62d2b578aa"
  },
  {
    "url": "xzcsd/index.html",
    "revision": "fa1162c4213539a331c9f8e62be1b8c9"
  },
  {
    "url": "zxcsd/index.html",
    "revision": "2b50fb589578dbd2cb2625922131f6d7"
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
  if (!resources || !(await caches.match(`/app-90544495104dd303162d.js`))) {
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
