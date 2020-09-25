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
    "url": "29798ff7c59a770b9437c20c5a088bbd0c1e6a47-4bfc5c170b0bf95e9e07.js"
  },
  {
    "url": "29798ff7c59a770b9437c20c5a088bbd0c1e6a47-4bfc5c170b0bf95e9e07.js.map",
    "revision": "aee2ecfebf6157a57168bbb6089b2f7a"
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
    "revision": "9188c44473e873aa1eb7bed5f960dc3c"
  },
  {
    "url": "404/index.html",
    "revision": "00c11fb2e137986724762b274e245730"
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
    "url": "625520763f98a4997b62b01037b3105d225de680-428d0f12eda320cf137a.js"
  },
  {
    "url": "625520763f98a4997b62b01037b3105d225de680-428d0f12eda320cf137a.js.map",
    "revision": "486495fc000da15367c8bbdc8fe9a0bf"
  },
  {
    "url": "64x64.png",
    "revision": "e884a6ded696e0f0dba1c3b578e572b8"
  },
  {
    "url": "7132760469799665ce7adbece0a961227adb8169-88e782da4fdef7ceee6f.js"
  },
  {
    "url": "7132760469799665ce7adbece0a961227adb8169-88e782da4fdef7ceee6f.js.map",
    "revision": "512a4282833ecad0e0746df7fc758763"
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
    "url": "7efcbb64e6531db39c789c77cd5c63c08b0064ad-d330a9848add8de3617c.js"
  },
  {
    "url": "7efcbb64e6531db39c789c77cd5c63c08b0064ad-d330a9848add8de3617c.js.map",
    "revision": "55d574a6f0766910269f695593f925cd"
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
    "url": "app-ae9cdc41a31f16a5a2b5.js"
  },
  {
    "url": "app-ae9cdc41a31f16a5a2b5.js.map",
    "revision": "2713c1ae25b6e5033c352b614df6a63f"
  },
  {
    "url": "blend-perekhod-v-adobe-illustrator-podrobnyi-urok/index.html",
    "revision": "cd51db650693d8ed95b209dfb018a70d"
  },
  {
    "url": "blog/index.html",
    "revision": "4ba85fc54e11be72dea507669b5d1376"
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
    "revision": "df60bfbda1ab3533743054aa2349f437"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-903c6faf6e71a7d4068c.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-903c6faf6e71a7d4068c.js.map",
    "revision": "ba6a3be4e1c38a3fb24edbf18e924c01"
  },
  {
    "url": "component---src-pages-404-jsx-e83b2fd3c5c625986340.js"
  },
  {
    "url": "component---src-pages-404-jsx-e83b2fd3c5c625986340.js.map",
    "revision": "2aad058540a8de9a61c2ab55911e9166"
  },
  {
    "url": "component---src-pages-blog-jsx-1d595e982920b0e80900.js"
  },
  {
    "url": "component---src-pages-blog-jsx-1d595e982920b0e80900.js.map",
    "revision": "d3ccb6ee508ce28c25b565c7412c4b2a"
  },
  {
    "url": "component---src-pages-graphic-system-vhs-jsx-991722fe8cbc7cd0c7e3.js"
  },
  {
    "url": "component---src-pages-graphic-system-vhs-jsx-991722fe8cbc7cd0c7e3.js.map",
    "revision": "6f58f211b19ece7b6abafec1c44417c4"
  },
  {
    "url": "component---src-pages-index-jsx-caff075308c59d8d01c9.js"
  },
  {
    "url": "component---src-pages-index-jsx-caff075308c59d8d01c9.js.map",
    "revision": "ce0735ee7468c3ecee6fe6e25507ee86"
  },
  {
    "url": "component---src-pages-osoznanny-graph-design-jsx-24c8901277c0a467189a.js"
  },
  {
    "url": "component---src-pages-osoznanny-graph-design-jsx-24c8901277c0a467189a.js.map",
    "revision": "b6b790fdd669f7b0fd5b93c0ff8a09df"
  },
  {
    "url": "component---src-pages-privacy-jsx-f97650e9d18cefc7926b.js"
  },
  {
    "url": "component---src-pages-privacy-jsx-f97650e9d18cefc7926b.js.map",
    "revision": "b63ed0ecf88bed36a29dc41f5c99482e"
  },
  {
    "url": "component---src-pages-public-offer-jsx-677a22f09710901d1786.js"
  },
  {
    "url": "component---src-pages-public-offer-jsx-677a22f09710901d1786.js.map",
    "revision": "fb11493d50cc8883adfe36d96b3c1a04"
  },
  {
    "url": "component---src-templates-content-post-jsx-ce202cc0a7fc36e64cd3.js"
  },
  {
    "url": "component---src-templates-content-post-jsx-ce202cc0a7fc36e64cd3.js.map",
    "revision": "3cffeb1e12cc34b6b6b82bba91a25be0"
  },
  {
    "url": "component---src-templates-podborka-jsx-6d1849a8bebf06f546c6.js"
  },
  {
    "url": "component---src-templates-podborka-jsx-6d1849a8bebf06f546c6.js.map",
    "revision": "d13cb479f80a3dc47ae1a5c9afbbb7c2"
  },
  {
    "url": "dd5eab29447d6307f940396869c932a10bc336ff-2742bd349849985cd7aa.js"
  },
  {
    "url": "dd5eab29447d6307f940396869c932a10bc336ff-2742bd349849985cd7aa.js.map",
    "revision": "644ef1fa38af453351ef9404a251d345"
  },
  {
    "url": "f7d5a900547e88214faaba8307947e149ba9a7c9-aa493a0c5b13b2cd610b.js"
  },
  {
    "url": "f7d5a900547e88214faaba8307947e149ba9a7c9-aa493a0c5b13b2cd610b.js.map",
    "revision": "5650ee9ccd82c8d5c70258817d16f846"
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
    "revision": "493e81fba8932e9e07038e02348b5b20"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "017872f49d8ef1ac64bc9fc0351a2ba8"
  },
  {
    "url": "kak-frilanseru-ocenit-stoimost-raboty/index.html",
    "revision": "8474b0b53e0c13f803486d56ef152127"
  },
  {
    "url": "kak-oformit-abzac/index.html",
    "revision": "d5e26f00739459aa193b53d6631bbda9"
  },
  {
    "url": "kak-postroit-setku-chast-3/index.html",
    "revision": "107fc64dab2c1d0fa7bd94025a924e3e"
  },
  {
    "url": "kak-postroit-setku-graficheskii-dizain-chast-2/index.html",
    "revision": "39e52ad5522a2e90fc6da506a2cdce35"
  },
  {
    "url": "kak-sdelat-evrobuklet-v-indizain/index.html",
    "revision": "5953eb017abbf4601aab660af21c6e36"
  },
  {
    "url": "maket-neo-geo/index.html",
    "revision": "fc4aa10b735a72445e9bd6ba4975a94a"
  },
  {
    "url": "maket-techno/index.html",
    "revision": "a4962475541e1548ce4ee5d3eb6dcd39"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "6855b3b5ddeb66ab520f746af65c05ef"
  },
  {
    "url": "modulnaya-setka-1/index.html",
    "revision": "a3214efd40f3247020d97d05e1919c32"
  },
  {
    "url": "nastroiki-indizaina-kakie-opcii-vazhny/index.html",
    "revision": "f9566ab1d5eaecd40b5749402e99d232"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7c71e3c3616a5f91b398dc83a26b97bd"
  },
  {
    "url": "osoznannaya-podborka-freelance/index.html",
    "revision": "cff86aad220d6321ffe2792548751955"
  },
  {
    "url": "osoznannaya-podborka-graphdesign/index.html",
    "revision": "96c7c18ecf2833a8bf6ffac2e4c29c3b"
  },
  {
    "url": "osoznanny-graph-design/index.html",
    "revision": "40f505cefd2ea1a823b4f3d83ec37e46"
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
    "revision": "b7aa8129b57dfa45a7169e6948dfb5b9"
  },
  {
    "url": "page-data/blend-perekhod-v-adobe-illustrator-podrobnyi-urok/page-data.json",
    "revision": "39b02f09ccc624321106e784da507129"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "5173b8491ac5e913ffe3fcc31fd33985"
  },
  {
    "url": "page-data/graphic-system-vhs/page-data.json",
    "revision": "24b0a4c9bb709245cd55bf28555b8fba"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "ea9ff859f4027f4a3061c3b6ea2415f9"
  },
  {
    "url": "page-data/kak-frilanseru-ocenit-stoimost-raboty/page-data.json",
    "revision": "36542f5db90aa1b4309438473e380ddd"
  },
  {
    "url": "page-data/kak-oformit-abzac/page-data.json",
    "revision": "ea189b206a6dab404f42f56f8abd8757"
  },
  {
    "url": "page-data/kak-postroit-setku-chast-3/page-data.json",
    "revision": "eeac06d9def7e82ccca27b0a7bc2dadf"
  },
  {
    "url": "page-data/kak-postroit-setku-graficheskii-dizain-chast-2/page-data.json",
    "revision": "d7242c8d34d811a0a54d17ef3639e1c4"
  },
  {
    "url": "page-data/kak-sdelat-evrobuklet-v-indizain/page-data.json",
    "revision": "7a58f48e174aa3919160cfa8b9356339"
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
    "revision": "22490195c198701ee276704812433cbe"
  },
  {
    "url": "page-data/nastroiki-indizaina-kakie-opcii-vazhny/page-data.json",
    "revision": "330bd135c7a44558fb715595f1889745"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/osoznannaya-podborka-freelance/page-data.json",
    "revision": "7e965bbc2964d581164a350f2ff9000f"
  },
  {
    "url": "page-data/osoznannaya-podborka-graphdesign/page-data.json",
    "revision": "17a0db11517c0edbba316eb0d8d31b95"
  },
  {
    "url": "page-data/osoznanny-graph-design/page-data.json",
    "revision": "bdfd6e6a5b3caca59c33990a1cf5e07f"
  },
  {
    "url": "page-data/perspektiva-i-izometriya-adobe-illustrator-podrobnyi-urok/page-data.json",
    "revision": "3c3a3574ffc9f9cff7ed8cecd09cb2f6"
  },
  {
    "url": "page-data/plakat-za-5-minut/page-data.json",
    "revision": "6624b10930c92005b5a035131d93ff6e"
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
    "url": "page-data/raznica-mezhdu-fotoshop-illyustrator-indizain-chto-luchshe/page-data.json",
    "revision": "6d10cfb55c1676a0cfd77ee55441dbe8"
  },
  {
    "url": "page-data/sdsa/page-data.json",
    "revision": "6e25059e81dbb91814550619ee3f4a6b"
  },
  {
    "url": "page-data/sq/d/1579113659.json",
    "revision": "474daf555e9c3b1d5e9c643dba0a1b48"
  },
  {
    "url": "page-data/sq/d/1605903896.json",
    "revision": "a7ee502200d8c1460d68e69ba8a8abb8"
  },
  {
    "url": "page-data/sq/d/2196900517.json",
    "revision": "43687c23480f68d1053df68efd7dd5d5"
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
    "url": "page-data/tipografika-primery-iz-praktiki/page-data.json",
    "revision": "6427308fc563fad6e0eb1c3a41a6e418"
  },
  {
    "url": "page-data/urok-pro-ikonochnyi-shrift-v-indizain/page-data.json",
    "revision": "b8d3392e345be57565ce1842464ac8e3"
  },
  {
    "url": "page-data/urok-verstki-zhurnala-v-indizain-rabota-s-tekstom/page-data.json",
    "revision": "a9e8a809a8ba4a1be0eacacd4c68f539"
  },
  {
    "url": "page-data/vidy-garnitur/page-data.json",
    "revision": "2344e6c26b7808eacda628db61a6abe5"
  },
  {
    "url": "page-data/zdorove-frilansera-kak-obustroit-rabochee-mesto/page-data.json",
    "revision": "88a03425f79e911e7b80be7e032ae241"
  },
  {
    "url": "perspektiva-i-izometriya-adobe-illustrator-podrobnyi-urok/index.html",
    "revision": "a73241ac1e64b483bd613f39492c1f3d"
  },
  {
    "url": "plakat-za-5-minut/index.html",
    "revision": "bbc33220566e83d30c76db17cb05ed56"
  },
  {
    "url": "polyfill-59be98e4b93386ac1856.js"
  },
  {
    "url": "polyfill-59be98e4b93386ac1856.js.map",
    "revision": "18895b1af334bce25d0ff151a2b46bf8"
  },
  {
    "url": "privacy/index.html",
    "revision": "4359ed4644009ac20cc29dc00743c740"
  },
  {
    "url": "public-offer/index.html",
    "revision": "1417cddedba93015acb9988b82e8a32e"
  },
  {
    "url": "raznica-mezhdu-fotoshop-illyustrator-indizain-chto-luchshe/index.html",
    "revision": "77a43f9599f6fb7f7da2968ee1f35f9c"
  },
  {
    "url": "robots.txt",
    "revision": "4077eb321175305ef56b34259aa6d6f3"
  },
  {
    "url": "sdsa/index.html",
    "revision": "7b19b723c2b4c8116882ad831189ea97"
  },
  {
    "url": "sitemap.xml",
    "revision": "b70c5b90ba8317e32a508dbe7f71f683"
  },
  {
    "url": "static/041efd75f930ceb90cd785993ca22aff/06371/team_pinterest.png"
  },
  {
    "url": "static/041efd75f930ceb90cd785993ca22aff/0d3d9/team_pinterest.webp"
  },
  {
    "url": "static/041efd75f930ceb90cd785993ca22aff/0f9da/team_pinterest.webp"
  },
  {
    "url": "static/041efd75f930ceb90cd785993ca22aff/1d713/team_pinterest.png"
  },
  {
    "url": "static/041efd75f930ceb90cd785993ca22aff/1e3cb/team_pinterest.png"
  },
  {
    "url": "static/041efd75f930ceb90cd785993ca22aff/20a72/team_pinterest.webp"
  },
  {
    "url": "static/041efd75f930ceb90cd785993ca22aff/2a4fb/team_pinterest.webp"
  },
  {
    "url": "static/041efd75f930ceb90cd785993ca22aff/854c8/team_pinterest.webp"
  },
  {
    "url": "static/041efd75f930ceb90cd785993ca22aff/87f95/team_pinterest.png"
  },
  {
    "url": "static/041efd75f930ceb90cd785993ca22aff/88221/team_pinterest.webp"
  },
  {
    "url": "static/041efd75f930ceb90cd785993ca22aff/afd13/team_pinterest.png"
  },
  {
    "url": "static/041efd75f930ceb90cd785993ca22aff/b1497/team_pinterest.png"
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
    "url": "static/93e351eb4a4e56501f0e80a78dbc1bbc/0d3d9/team_vk.webp"
  },
  {
    "url": "static/93e351eb4a4e56501f0e80a78dbc1bbc/1a890/team_vk.webp"
  },
  {
    "url": "static/93e351eb4a4e56501f0e80a78dbc1bbc/1d713/team_vk.png"
  },
  {
    "url": "static/93e351eb4a4e56501f0e80a78dbc1bbc/1e3cb/team_vk.png"
  },
  {
    "url": "static/93e351eb4a4e56501f0e80a78dbc1bbc/20a72/team_vk.webp"
  },
  {
    "url": "static/93e351eb4a4e56501f0e80a78dbc1bbc/2a4fb/team_vk.webp"
  },
  {
    "url": "static/93e351eb4a4e56501f0e80a78dbc1bbc/854c8/team_vk.webp"
  },
  {
    "url": "static/93e351eb4a4e56501f0e80a78dbc1bbc/87f95/team_vk.png"
  },
  {
    "url": "static/93e351eb4a4e56501f0e80a78dbc1bbc/88221/team_vk.webp"
  },
  {
    "url": "static/93e351eb4a4e56501f0e80a78dbc1bbc/afd13/team_vk.png"
  },
  {
    "url": "static/93e351eb4a4e56501f0e80a78dbc1bbc/b1497/team_vk.png"
  },
  {
    "url": "static/93e351eb4a4e56501f0e80a78dbc1bbc/e0491/team_vk.png"
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
    "url": "static/a2b84f6200cd5a8775489c3155fb4635/0d3d9/team_instagram.webp"
  },
  {
    "url": "static/a2b84f6200cd5a8775489c3155fb4635/1a890/team_instagram.webp"
  },
  {
    "url": "static/a2b84f6200cd5a8775489c3155fb4635/1d713/team_instagram.png"
  },
  {
    "url": "static/a2b84f6200cd5a8775489c3155fb4635/1e3cb/team_instagram.png"
  },
  {
    "url": "static/a2b84f6200cd5a8775489c3155fb4635/20a72/team_instagram.webp"
  },
  {
    "url": "static/a2b84f6200cd5a8775489c3155fb4635/2a4fb/team_instagram.webp"
  },
  {
    "url": "static/a2b84f6200cd5a8775489c3155fb4635/854c8/team_instagram.webp"
  },
  {
    "url": "static/a2b84f6200cd5a8775489c3155fb4635/87f95/team_instagram.png"
  },
  {
    "url": "static/a2b84f6200cd5a8775489c3155fb4635/88221/team_instagram.webp"
  },
  {
    "url": "static/a2b84f6200cd5a8775489c3155fb4635/afd13/team_instagram.png"
  },
  {
    "url": "static/a2b84f6200cd5a8775489c3155fb4635/b1497/team_instagram.png"
  },
  {
    "url": "static/a2b84f6200cd5a8775489c3155fb4635/e0491/team_instagram.png"
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
    "url": "static/d2185e791d1efc4fe80b078738736234/0d3d9/team_behance.webp"
  },
  {
    "url": "static/d2185e791d1efc4fe80b078738736234/1a890/team_behance.webp"
  },
  {
    "url": "static/d2185e791d1efc4fe80b078738736234/1d713/team_behance.png"
  },
  {
    "url": "static/d2185e791d1efc4fe80b078738736234/1e3cb/team_behance.png"
  },
  {
    "url": "static/d2185e791d1efc4fe80b078738736234/20a72/team_behance.webp"
  },
  {
    "url": "static/d2185e791d1efc4fe80b078738736234/2a4fb/team_behance.webp"
  },
  {
    "url": "static/d2185e791d1efc4fe80b078738736234/854c8/team_behance.webp"
  },
  {
    "url": "static/d2185e791d1efc4fe80b078738736234/87f95/team_behance.png"
  },
  {
    "url": "static/d2185e791d1efc4fe80b078738736234/88221/team_behance.webp"
  },
  {
    "url": "static/d2185e791d1efc4fe80b078738736234/afd13/team_behance.png"
  },
  {
    "url": "static/d2185e791d1efc4fe80b078738736234/b1497/team_behance.png"
  },
  {
    "url": "static/d2185e791d1efc4fe80b078738736234/e0491/team_behance.png"
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
    "url": "static/fa6b6ca520e4a0b0c05c264bd5fa5734/06371/team_telegram.png"
  },
  {
    "url": "static/fa6b6ca520e4a0b0c05c264bd5fa5734/0d3d9/team_telegram.webp"
  },
  {
    "url": "static/fa6b6ca520e4a0b0c05c264bd5fa5734/0f9da/team_telegram.webp"
  },
  {
    "url": "static/fa6b6ca520e4a0b0c05c264bd5fa5734/1d713/team_telegram.png"
  },
  {
    "url": "static/fa6b6ca520e4a0b0c05c264bd5fa5734/1e3cb/team_telegram.png"
  },
  {
    "url": "static/fa6b6ca520e4a0b0c05c264bd5fa5734/20a72/team_telegram.webp"
  },
  {
    "url": "static/fa6b6ca520e4a0b0c05c264bd5fa5734/2a4fb/team_telegram.webp"
  },
  {
    "url": "static/fa6b6ca520e4a0b0c05c264bd5fa5734/854c8/team_telegram.webp"
  },
  {
    "url": "static/fa6b6ca520e4a0b0c05c264bd5fa5734/87f95/team_telegram.png"
  },
  {
    "url": "static/fa6b6ca520e4a0b0c05c264bd5fa5734/88221/team_telegram.webp"
  },
  {
    "url": "static/fa6b6ca520e4a0b0c05c264bd5fa5734/afd13/team_telegram.png"
  },
  {
    "url": "static/fa6b6ca520e4a0b0c05c264bd5fa5734/b1497/team_telegram.png"
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
    "revision": "36c4a7c6cc20ae4da263e4bedf220e98"
  },
  {
    "url": "strim-typography/index.html",
    "revision": "23a6f91ce99e6a8dccb141a605612466"
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
    "url": "tipografika-primery-iz-praktiki/index.html",
    "revision": "bba489d3af6b2f3995329d0e0b4f5880"
  },
  {
    "url": "urok-pro-ikonochnyi-shrift-v-indizain/index.html",
    "revision": "6ce2cdbfd22b0cba1e4e9a03e9e2a046"
  },
  {
    "url": "urok-verstki-zhurnala-v-indizain-rabota-s-tekstom/index.html",
    "revision": "e0eac26ed3fbe2f4388f0ad641113c58"
  },
  {
    "url": "vidy-garnitur/index.html",
    "revision": "6092404c20c4bc13aa8a7040e1ea9826"
  },
  {
    "url": "webpack-runtime-dfc6753834729a748ca9.js"
  },
  {
    "url": "webpack-runtime-dfc6753834729a748ca9.js.map",
    "revision": "c975483ff431c21cbb2d6d80fc99fa23"
  },
  {
    "url": "webpack.stats.json",
    "revision": "0487fa87dc1e4b20693e3e035faa1218"
  },
  {
    "url": "zdorove-frilansera-kak-obustroit-rabochee-mesto/index.html",
    "revision": "c1a6d0bc5b4bb613254a624d926e08b2"
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
  if (!resources || !(await caches.match(`/app-ae9cdc41a31f16a5a2b5.js`))) {
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
