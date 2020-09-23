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
    "url": "144x144.png",
    "revision": "86b0dda32768b241f5487d92b0fe6def"
  },
  {
    "url": "192x192.png",
    "revision": "3fbfc42e8cdf9b1ff2ca725367f8fad9"
  },
  {
    "url": "256x256.png",
    "revision": "a5964e29bfc76dafb9c07458d5d49774"
  },
  {
    "url": "29798ff7c59a770b9437c20c5a088bbd0c1e6a47-c8695f46b5090bcc23c5.js"
  },
  {
    "url": "29798ff7c59a770b9437c20c5a088bbd0c1e6a47-c8695f46b5090bcc23c5.js.map",
    "revision": "ebab8e8baad4bf33e9415449745a2e42"
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
    "revision": "53776e6f79d28458e5352331c7582da9"
  },
  {
    "url": "404/index.html",
    "revision": "e44c64271e52f34efc6754c864960a36"
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
    "url": "625520763f98a4997b62b01037b3105d225de680-02b17afce657c45a2b69.js"
  },
  {
    "url": "625520763f98a4997b62b01037b3105d225de680-02b17afce657c45a2b69.js.map",
    "revision": "fc04fc855dd86dd72dd5031185d0b326"
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
    "url": "7a10ce5dfd848bb6bb33d0707dab5ed3877b250c-940014ffef477b21cd6b.js"
  },
  {
    "url": "7a10ce5dfd848bb6bb33d0707dab5ed3877b250c-940014ffef477b21cd6b.js.map",
    "revision": "86b356c0c2c56834a438b9c02ea99e92"
  },
  {
    "url": "7efcbb64e6531db39c789c77cd5c63c08b0064ad-899544be483e978ab5d0.js"
  },
  {
    "url": "7efcbb64e6531db39c789c77cd5c63c08b0064ad-899544be483e978ab5d0.js.map",
    "revision": "230b1954c3f506c657b52c909d76c3b2"
  },
  {
    "url": "85390c2c5a1f25d985c16673ae069ff7fcd61bc4-d1a73ed0cf134d86e6ac.js"
  },
  {
    "url": "85390c2c5a1f25d985c16673ae069ff7fcd61bc4-d1a73ed0cf134d86e6ac.js.map",
    "revision": "d44272760dd5afcaa7a6ba1aa33fc934"
  },
  {
    "url": "96x96.png",
    "revision": "4803579e98254c95573be2fe9ece7ba6"
  },
  {
    "url": "app-21c0afa73a6a0d8ba184.js"
  },
  {
    "url": "app-21c0afa73a6a0d8ba184.js.map",
    "revision": "4601f165485f71db52f40d35863b19d7"
  },
  {
    "url": "blog/index.html",
    "revision": "4f915df496fcc84723cd1f3c9cb18064"
  },
  {
    "url": "c008ada3e173a60331faea31dca12cf57fb6c38f-0ed69c5b0d8f71141d73.js"
  },
  {
    "url": "c008ada3e173a60331faea31dca12cf57fb6c38f-0ed69c5b0d8f71141d73.js.map",
    "revision": "0b58ea0e523c784a12278a63844947a6"
  },
  {
    "url": "chunk-map.json",
    "revision": "9b82bafe9263345f9f2469a9382e1292"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-0339ae868cdf073a992d.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-0339ae868cdf073a992d.js.map",
    "revision": "ff45aae603c3a7de85792d3658e70f2e"
  },
  {
    "url": "component---src-pages-404-jsx-a04f5f60825e187b2790.js"
  },
  {
    "url": "component---src-pages-404-jsx-a04f5f60825e187b2790.js.map",
    "revision": "c55637eb6daadb5ae3632bb3daea45ca"
  },
  {
    "url": "component---src-pages-blog-jsx-d1171d89dca3486dc2b5.js"
  },
  {
    "url": "component---src-pages-blog-jsx-d1171d89dca3486dc2b5.js.map",
    "revision": "5e73536a3c85ffa674782d0da257d809"
  },
  {
    "url": "component---src-pages-graphic-system-vhs-jsx-5f41da26b2b81d38d10b.js"
  },
  {
    "url": "component---src-pages-graphic-system-vhs-jsx-5f41da26b2b81d38d10b.js.map",
    "revision": "c0e411d9a3c965b02977ab14d90eb67b"
  },
  {
    "url": "component---src-pages-index-jsx-b8742f170f88cc0733da.js"
  },
  {
    "url": "component---src-pages-index-jsx-b8742f170f88cc0733da.js.map",
    "revision": "bbef9ff5a6ae5b548f0329c35ca2e976"
  },
  {
    "url": "component---src-pages-osoznanny-graph-design-jsx-3f262ff95b01b8ec4caa.js"
  },
  {
    "url": "component---src-pages-osoznanny-graph-design-jsx-3f262ff95b01b8ec4caa.js.map",
    "revision": "630f945636acb82a35f325fbc9b8db17"
  },
  {
    "url": "component---src-pages-privacy-jsx-8c71548313dd4f28b4e2.js"
  },
  {
    "url": "component---src-pages-privacy-jsx-8c71548313dd4f28b4e2.js.map",
    "revision": "787046c309949e389a21be10dd4b66d8"
  },
  {
    "url": "component---src-pages-public-offer-jsx-e2fb581b0af03bbf7768.js"
  },
  {
    "url": "component---src-pages-public-offer-jsx-e2fb581b0af03bbf7768.js.map",
    "revision": "5a1e195fe2dfd281fe3440016a0b72a9"
  },
  {
    "url": "component---src-templates-content-post-jsx-78df7cd406469b289fd4.js"
  },
  {
    "url": "component---src-templates-content-post-jsx-78df7cd406469b289fd4.js.map",
    "revision": "b0351ffb75b64b0a696127a0486d5d39"
  },
  {
    "url": "component---src-templates-podborka-jsx-3c792884b4a0bdf1140e.js"
  },
  {
    "url": "component---src-templates-podborka-jsx-3c792884b4a0bdf1140e.js.map",
    "revision": "862b8adec02e6076955b598ab6954219"
  },
  {
    "url": "dd5eab29447d6307f940396869c932a10bc336ff-2742bd349849985cd7aa.js"
  },
  {
    "url": "dd5eab29447d6307f940396869c932a10bc336ff-2742bd349849985cd7aa.js.map",
    "revision": "644ef1fa38af453351ef9404a251d345"
  },
  {
    "url": "f7d5a900547e88214faaba8307947e149ba9a7c9-6cafc5d7ce2281154b38.js"
  },
  {
    "url": "f7d5a900547e88214faaba8307947e149ba9a7c9-6cafc5d7ce2281154b38.js.map",
    "revision": "74f4024492f9598c7f0cfc44b9669922"
  },
  {
    "url": "f94defc1b2e491750d12a0b7fcbef5d9178dcdd3-2c8460573583f940e1d1.js"
  },
  {
    "url": "f94defc1b2e491750d12a0b7fcbef5d9178dcdd3-2c8460573583f940e1d1.js.map",
    "revision": "3060596cad2963ee58b09a926a0e0f58"
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
    "url": "framework-9d3734cf067746fe215a.js"
  },
  {
    "url": "framework-9d3734cf067746fe215a.js.map",
    "revision": "b44e5f9d37a15fa65051c9d43fc5e822"
  },
  {
    "url": "graphic-system-vhs/index.html",
    "revision": "6ec4ddf5a4c6ad4e9aed0dfac610b86a"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "7bd5b87589e753836a15ce6a2a7871fc"
  },
  {
    "url": "kak-oformit-abzac/index.html",
    "revision": "4305de41da07dec489b06381be763381"
  },
  {
    "url": "maket-neo-geo/index.html",
    "revision": "0167c99264fd9ff9793f261aa1c33e13"
  },
  {
    "url": "maket-techno/index.html",
    "revision": "617c65f4d523bf3e69ce484832b619c7"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "6855b3b5ddeb66ab520f746af65c05ef"
  },
  {
    "url": "modulnaya-setka-1/index.html",
    "revision": "5b5fc19ba45296c47f3b3bfcd710da1a"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ad30d5e38db1c18178dd7a355f25dc62"
  },
  {
    "url": "oshibka-mishleniya/index.html",
    "revision": "a9d070d2bfdebe7ec4ff18f2c3e94365"
  },
  {
    "url": "osoznannaya-podborka-freelance/index.html",
    "revision": "c80ba8dc3924b18d780e09f498026584"
  },
  {
    "url": "osoznannaya-podborka-graphdesign/index.html",
    "revision": "9468ef515c8d2604e51e86533370128c"
  },
  {
    "url": "osoznanny-graph-design/index.html",
    "revision": "c5e09ac08d79371e4fb4ab2d5b3b252d"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "f440389d9437987c1aab05d07759499a"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "763aec8f1994ed7591dfa5b96e21829a"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "75e9ed8ec23e6acdf1ead0396e0665cd"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "5173b8491ac5e913ffe3fcc31fd33985"
  },
  {
    "url": "page-data/graphic-system-vhs/page-data.json",
    "revision": "2ba35d6ad87e68992c175002bf5a65a9"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "424198e243cc33e04377e2a087c29ea1"
  },
  {
    "url": "page-data/kak-oformit-abzac/page-data.json",
    "revision": "33642cb9438f3320efded6b653f44148"
  },
  {
    "url": "page-data/maket-neo-geo/page-data.json",
    "revision": "dc1868b7be1415f68fcebdf63ac68a20"
  },
  {
    "url": "page-data/maket-techno/page-data.json",
    "revision": "a9a9d5db765ca49654427dbb81a7a69c"
  },
  {
    "url": "page-data/modulnaya-setka-1/page-data.json",
    "revision": "1b40ae19aab95b043d1ebca6b2174c84"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/oshibka-mishleniya/page-data.json",
    "revision": "60245dccb7210634ec0f54d8e8b83242"
  },
  {
    "url": "page-data/osoznannaya-podborka-freelance/page-data.json",
    "revision": "fc58a81f7c54bdb0027540326784245f"
  },
  {
    "url": "page-data/osoznannaya-podborka-graphdesign/page-data.json",
    "revision": "262fc0ed5d7e1c8dc3a424a74a7eff52"
  },
  {
    "url": "page-data/osoznanny-graph-design/page-data.json",
    "revision": "02a67bee48d7cfdeda01d9b2c77f562a"
  },
  {
    "url": "page-data/plakat-za-5-minut/page-data.json",
    "revision": "250ba8c987f0153b2462bf96eba19cf2"
  },
  {
    "url": "page-data/privacy/page-data.json",
    "revision": "fd36e538f3ad92ac022c95f7bcc352f1"
  },
  {
    "url": "page-data/public-offer/page-data.json",
    "revision": "4380ab7687afab1c9206ddeff6b35b60"
  },
  {
    "url": "page-data/sdsa/page-data.json",
    "revision": "a1da8037435af1edc0d11f3ff847a23a"
  },
  {
    "url": "page-data/sq/d/1579113659.json",
    "revision": "6431b938716cbfe417f43157815fe03d"
  },
  {
    "url": "page-data/sq/d/1605903896.json",
    "revision": "a7ee502200d8c1460d68e69ba8a8abb8"
  },
  {
    "url": "page-data/sq/d/2747322716.json",
    "revision": "614e4203562c5b492bdcb8d6994ae7c7"
  },
  {
    "url": "page-data/sq/d/3211202430.json",
    "revision": "977bc38a83d81a8d644e0d05e8a7873a"
  },
  {
    "url": "page-data/sq/d/3815106830.json",
    "revision": "980ab7ea38741b2f7b844365ef964c54"
  },
  {
    "url": "page-data/strim-swiss/page-data.json",
    "revision": "b11e20801e7ae65de7d8e14f360dba52"
  },
  {
    "url": "page-data/strim-typography/page-data.json",
    "revision": "343aa337558b1b76986b1f3e8442aa8a"
  },
  {
    "url": "page-data/vidy-garnitur/page-data.json",
    "revision": "16ce25b2a96938230fb0049e8b76c468"
  },
  {
    "url": "plakat-za-5-minut/index.html",
    "revision": "3b25f3333de01679d517ca0ebacf57a1"
  },
  {
    "url": "polyfill-0921ec7cad0d253d02d3.js"
  },
  {
    "url": "polyfill-0921ec7cad0d253d02d3.js.map",
    "revision": "21a4c62ade754bbbd89be4609f493958"
  },
  {
    "url": "privacy/index.html",
    "revision": "c3f54cff437b0dc1df95cb81008234bb"
  },
  {
    "url": "public-offer/index.html",
    "revision": "eb0c6f8c08f7e0c1efaf82e2c4edc831"
  },
  {
    "url": "robots.txt",
    "revision": "06e9c0759c9d42e3a3ffe646648e2317"
  },
  {
    "url": "sdsa/index.html",
    "revision": "019020f2b83a4351f5a391fc326bf7a6"
  },
  {
    "url": "sitemap.xml",
    "revision": "8e85a6ac28eb7548c32a2104250c40b2"
  },
  {
    "url": "static/1cb32932886acdbb93335c77e5cb2ff8/03643/behance-link-icon.png"
  },
  {
    "url": "static/1cb32932886acdbb93335c77e5cb2ff8/05ef1/behance-link-icon.png"
  },
  {
    "url": "static/1cb32932886acdbb93335c77e5cb2ff8/29096/behance-link-icon.png"
  },
  {
    "url": "static/1cb32932886acdbb93335c77e5cb2ff8/a7c38/behance-link-icon.png"
  },
  {
    "url": "static/1cb32932886acdbb93335c77e5cb2ff8/a7e7e/behance-link-icon.png"
  },
  {
    "url": "static/1cb32932886acdbb93335c77e5cb2ff8/bfe26/behance-link-icon.png"
  },
  {
    "url": "static/2681434cb9dd2f190e7bebea8dc12eb3/0f3a1/example-02.jpg"
  },
  {
    "url": "static/2681434cb9dd2f190e7bebea8dc12eb3/1ada3/example-02.jpg"
  },
  {
    "url": "static/2681434cb9dd2f190e7bebea8dc12eb3/8f7df/example-02.jpg"
  },
  {
    "url": "static/2681434cb9dd2f190e7bebea8dc12eb3/f9913/example-02.jpg"
  },
  {
    "url": "static/44efe73ab8ab1f1ad281e0491c8cc26e/05ef1/youtube-icon.png"
  },
  {
    "url": "static/44efe73ab8ab1f1ad281e0491c8cc26e/29096/youtube-icon.png"
  },
  {
    "url": "static/44efe73ab8ab1f1ad281e0491c8cc26e/a7c38/youtube-icon.png"
  },
  {
    "url": "static/44efe73ab8ab1f1ad281e0491c8cc26e/a7e7e/youtube-icon.png"
  },
  {
    "url": "static/44efe73ab8ab1f1ad281e0491c8cc26e/bfe26/youtube-icon.png"
  },
  {
    "url": "static/44efe73ab8ab1f1ad281e0491c8cc26e/fa936/youtube-icon.png"
  },
  {
    "url": "static/94954ab21da2dd967b0f1467afeee059/03643/pinterest-icon.png"
  },
  {
    "url": "static/94954ab21da2dd967b0f1467afeee059/05ef1/pinterest-icon.png"
  },
  {
    "url": "static/94954ab21da2dd967b0f1467afeee059/29096/pinterest-icon.png"
  },
  {
    "url": "static/94954ab21da2dd967b0f1467afeee059/a7c38/pinterest-icon.png"
  },
  {
    "url": "static/94954ab21da2dd967b0f1467afeee059/a7e7e/pinterest-icon.png"
  },
  {
    "url": "static/94954ab21da2dd967b0f1467afeee059/bfe26/pinterest-icon.png"
  },
  {
    "url": "static/9b3012e27357e432df91f9d3120b3de5/03643/podborka-link-out.png"
  },
  {
    "url": "static/9b3012e27357e432df91f9d3120b3de5/05ef1/podborka-link-out.png"
  },
  {
    "url": "static/9b3012e27357e432df91f9d3120b3de5/29096/podborka-link-out.png"
  },
  {
    "url": "static/9b3012e27357e432df91f9d3120b3de5/a7c38/podborka-link-out.png"
  },
  {
    "url": "static/9b3012e27357e432df91f9d3120b3de5/a7e7e/podborka-link-out.png"
  },
  {
    "url": "static/9b3012e27357e432df91f9d3120b3de5/bfe26/podborka-link-out.png"
  },
  {
    "url": "static/b36ce6e792ccb9a276c628bc0c4cbb2b/05ef1/medium-icon.png"
  },
  {
    "url": "static/b36ce6e792ccb9a276c628bc0c4cbb2b/29096/medium-icon.png"
  },
  {
    "url": "static/b36ce6e792ccb9a276c628bc0c4cbb2b/a7c38/medium-icon.png"
  },
  {
    "url": "static/b36ce6e792ccb9a276c628bc0c4cbb2b/a7e7e/medium-icon.png"
  },
  {
    "url": "static/b36ce6e792ccb9a276c628bc0c4cbb2b/bb2a3/medium-icon.png"
  },
  {
    "url": "static/b36ce6e792ccb9a276c628bc0c4cbb2b/bfe26/medium-icon.png"
  },
  {
    "url": "static/c4c32c6c20849d4e4dc01fce186b3cad/03643/pinterest-link-icon.png"
  },
  {
    "url": "static/c4c32c6c20849d4e4dc01fce186b3cad/05ef1/pinterest-link-icon.png"
  },
  {
    "url": "static/c4c32c6c20849d4e4dc01fce186b3cad/29096/pinterest-link-icon.png"
  },
  {
    "url": "static/c4c32c6c20849d4e4dc01fce186b3cad/a7c38/pinterest-link-icon.png"
  },
  {
    "url": "static/c4c32c6c20849d4e4dc01fce186b3cad/a7e7e/pinterest-link-icon.png"
  },
  {
    "url": "static/c4c32c6c20849d4e4dc01fce186b3cad/bfe26/pinterest-link-icon.png"
  },
  {
    "url": "static/dc4dd6f7fa635fe15d8081d01fa66679/0f3a1/example-01.jpg"
  },
  {
    "url": "static/dc4dd6f7fa635fe15d8081d01fa66679/1ada3/example-01.jpg"
  },
  {
    "url": "static/dc4dd6f7fa635fe15d8081d01fa66679/8f7df/example-01.jpg"
  },
  {
    "url": "static/dc4dd6f7fa635fe15d8081d01fa66679/f9913/example-01.jpg"
  },
  {
    "url": "static/e8871c1dfd6c8a4a9ecdf80bb48772bb/05ef1/behance-icon.png"
  },
  {
    "url": "static/e8871c1dfd6c8a4a9ecdf80bb48772bb/29096/behance-icon.png"
  },
  {
    "url": "static/e8871c1dfd6c8a4a9ecdf80bb48772bb/a7c38/behance-icon.png"
  },
  {
    "url": "static/e8871c1dfd6c8a4a9ecdf80bb48772bb/a7e7e/behance-icon.png"
  },
  {
    "url": "static/e8871c1dfd6c8a4a9ecdf80bb48772bb/bb2a3/behance-icon.png"
  },
  {
    "url": "static/e8871c1dfd6c8a4a9ecdf80bb48772bb/bfe26/behance-icon.png"
  },
  {
    "url": "static/ff41fc53ab9d288e2a3a121e921614b2/06776/author.jpg"
  },
  {
    "url": "static/ff41fc53ab9d288e2a3a121e921614b2/086a8/author.jpg"
  },
  {
    "url": "static/ff41fc53ab9d288e2a3a121e921614b2/0a9c8/author.jpg"
  },
  {
    "url": "static/ff41fc53ab9d288e2a3a121e921614b2/25252/author.jpg"
  },
  {
    "url": "static/ff41fc53ab9d288e2a3a121e921614b2/477ba/author.jpg"
  },
  {
    "url": "static/ff41fc53ab9d288e2a3a121e921614b2/61cdf/author.jpg"
  },
  {
    "url": "static/ff41fc53ab9d288e2a3a121e921614b2/88b18/author.jpg"
  },
  {
    "url": "static/ff41fc53ab9d288e2a3a121e921614b2/f0719/author.jpg"
  },
  {
    "url": "static/ff41fc53ab9d288e2a3a121e921614b2/fa1ea/author.jpg"
  },
  {
    "url": "static/ff41fc53ab9d288e2a3a121e921614b2/fd013/author.jpg"
  },
  {
    "url": "static/graphic-system-vhs-554748e5f64aff30aa7d3dab8f940ba2.jpg"
  },
  {
    "url": "static/index-13fa23bfddafb71d5776f08bd0f2fd50.jpg"
  },
  {
    "url": "static/minus-b34c28dfdb3189b74a9b396d852e4faa.png"
  },
  {
    "url": "static/osoznanny-graph-design-b062b6c52cae97a425af816310859332.jpg"
  },
  {
    "url": "static/plus-13d6065328f960136044e7baebb87f87.png"
  },
  {
    "url": "strim-swiss/index.html",
    "revision": "799789ce05f0232d4824a99a87913997"
  },
  {
    "url": "strim-typography/index.html",
    "revision": "8b652e7183b4d1413854a99bc951288a"
  },
  {
    "url": "styles-c2fe8482057191dca484.js"
  },
  {
    "url": "styles-c2fe8482057191dca484.js.map",
    "revision": "aca5b7feab278569bad07d62a5da3185"
  },
  {
    "url": "styles.5a7617267346240388c2.css"
  },
  {
    "url": "vidy-garnitur/index.html",
    "revision": "3d74c2f81290c9f1d8ac130a21745b21"
  },
  {
    "url": "webpack-runtime-49e64e07dbf5f3fc6115.js"
  },
  {
    "url": "webpack-runtime-49e64e07dbf5f3fc6115.js.map",
    "revision": "9452e8d61903ab375cf4f45a097e03c0"
  },
  {
    "url": "webpack.stats.json",
    "revision": "5adb24b04518468f108c502326236203"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

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
  if (!resources || !(await caches.match(`/app-21c0afa73a6a0d8ba184.js`))) {
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
