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
    "url": "29798ff7c59a770b9437c20c5a088bbd0c1e6a47-75eb15b383659c9588b7.js"
  },
  {
    "url": "29798ff7c59a770b9437c20c5a088bbd0c1e6a47-75eb15b383659c9588b7.js.map",
    "revision": "2e615c78a8a9706e7744e8b01444373f"
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
    "revision": "a4a0a3cabd8e003edef246cd2b13392d"
  },
  {
    "url": "404/index.html",
    "revision": "e9c771ce8ec943cc9ba141b253082b4f"
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
    "url": "625520763f98a4997b62b01037b3105d225de680-c635be4b58072e8d0aff.js"
  },
  {
    "url": "625520763f98a4997b62b01037b3105d225de680-c635be4b58072e8d0aff.js.map",
    "revision": "25bc308f890a1fa449bb4d9484dbd30e"
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
    "url": "7efcbb64e6531db39c789c77cd5c63c08b0064ad-a3d8453bd27b33c4fc63.js"
  },
  {
    "url": "7efcbb64e6531db39c789c77cd5c63c08b0064ad-a3d8453bd27b33c4fc63.js.map",
    "revision": "38918305785805664485492ab0688a4c"
  },
  {
    "url": "96x96.png",
    "revision": "4803579e98254c95573be2fe9ece7ba6"
  },
  {
    "url": "app-836bf5fab9ec9bd3b0d8.js"
  },
  {
    "url": "app-836bf5fab9ec9bd3b0d8.js.map",
    "revision": "339da21ab74b30025181098f83d4e8b7"
  },
  {
    "url": "blend-perekhod-v-adobe-illustrator-podrobnyi-urok/index.html",
    "revision": "e552842451085fbe55d528c2970c81c8"
  },
  {
    "url": "blog/index.html",
    "revision": "877ebea6e6b8a1e920c16b43df86f96a"
  },
  {
    "url": "c008ada3e173a60331faea31dca12cf57fb6c38f-ce7b22930fd9096ce8ad.js"
  },
  {
    "url": "c008ada3e173a60331faea31dca12cf57fb6c38f-ce7b22930fd9096ce8ad.js.map",
    "revision": "4a1efa06c667d3621f5e86948ea29ba1"
  },
  {
    "url": "chunk-map.json",
    "revision": "b95bbe3d172f3a301796d5b8db573436"
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
    "url": "component---src-pages-blog-jsx-eec7710adc813c880de2.js"
  },
  {
    "url": "component---src-pages-blog-jsx-eec7710adc813c880de2.js.map",
    "revision": "76ce1e2cc7a615d0e64f2b2643727e85"
  },
  {
    "url": "component---src-pages-graphic-system-vhs-jsx-a1c6ebdc94a1b73c29ee.js"
  },
  {
    "url": "component---src-pages-graphic-system-vhs-jsx-a1c6ebdc94a1b73c29ee.js.map",
    "revision": "3ee1a53e74908cde3095be71671e78b5"
  },
  {
    "url": "component---src-pages-index-jsx-16ad552e487408f99c51.js"
  },
  {
    "url": "component---src-pages-index-jsx-16ad552e487408f99c51.js.map",
    "revision": "bbcbb2b6e0175e9f170a5c178ae402ae"
  },
  {
    "url": "component---src-pages-osoznanny-graph-design-jsx-ab7efe865268412f715d.js"
  },
  {
    "url": "component---src-pages-osoznanny-graph-design-jsx-ab7efe865268412f715d.js.map",
    "revision": "ef52484840311367387b067cbde77534"
  },
  {
    "url": "component---src-pages-privacy-jsx-3ec1ba81f69d3a1d0c90.js"
  },
  {
    "url": "component---src-pages-privacy-jsx-3ec1ba81f69d3a1d0c90.js.map",
    "revision": "6ad0a77f58f1e6cc1fd6327a62c4a55b"
  },
  {
    "url": "component---src-pages-public-offer-jsx-5f30db7373926c55cf00.js"
  },
  {
    "url": "component---src-pages-public-offer-jsx-5f30db7373926c55cf00.js.map",
    "revision": "00a3f0b71744e616bacbef3f0a6f3c14"
  },
  {
    "url": "component---src-templates-content-post-jsx-23037eadb770f8ef05e0.js"
  },
  {
    "url": "component---src-templates-content-post-jsx-23037eadb770f8ef05e0.js.map",
    "revision": "396f2a9a6a7661fd9b3f88c3ccd532b2"
  },
  {
    "url": "component---src-templates-podborka-jsx-b424d102c75317b936ed.js"
  },
  {
    "url": "component---src-templates-podborka-jsx-b424d102c75317b936ed.js.map",
    "revision": "1ebf7b49a5aa112322e35ee96791b877"
  },
  {
    "url": "d0be601a090c420f104f65516843ab0659677663-199ec9def9f1946a50f7.js"
  },
  {
    "url": "d0be601a090c420f104f65516843ab0659677663-199ec9def9f1946a50f7.js.map",
    "revision": "a0db107fc501410c04fa3dc0cfb36c08"
  },
  {
    "url": "dd5eab29447d6307f940396869c932a10bc336ff-2742bd349849985cd7aa.js"
  },
  {
    "url": "dd5eab29447d6307f940396869c932a10bc336ff-2742bd349849985cd7aa.js.map",
    "revision": "644ef1fa38af453351ef9404a251d345"
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
    "revision": "c50ab266e54bf6aecc68255b88e1db33"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "532c3feee8946c85d60c4ecc52069aa8"
  },
  {
    "url": "kak-frilanseru-ocenit-stoimost-raboty/index.html",
    "revision": "87048904be28e16d78835fdda8d84f30"
  },
  {
    "url": "kak-oformit-abzac/index.html",
    "revision": "5a2b52cf664228d0023cb9bfcbaf4d98"
  },
  {
    "url": "kak-postroit-setku-chast-3/index.html",
    "revision": "17ebd7ee938f692987f6f4008b680e38"
  },
  {
    "url": "kak-postroit-setku-graficheskii-dizain-chast-2/index.html",
    "revision": "f2a3a3ace9754ee93cf51b48cbd937b1"
  },
  {
    "url": "kak-sdelat-evrobuklet-v-indizain/index.html",
    "revision": "81d52d47750b66e051baf50b33f87d97"
  },
  {
    "url": "maket-neo-geo/index.html",
    "revision": "a5e5e97c61ac3ecffa0b267a72588ccc"
  },
  {
    "url": "maket-techno/index.html",
    "revision": "8e6c0c63d87cb736bd0d570dab20b7e0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "6855b3b5ddeb66ab520f746af65c05ef"
  },
  {
    "url": "modulnaya-setka-1/index.html",
    "revision": "9a541c8373626421b60507f9d12452a3"
  },
  {
    "url": "nastroiki-indizaina-kakie-opcii-vazhny/index.html",
    "revision": "e35ad4f873bf69b02a609291e60842d0"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "000d58ccccabf364444d99c2292a1b14"
  },
  {
    "url": "osoznannaya-podborka-freelance/index.html",
    "revision": "25ed11b1ed9f622669eb88fe76f357fc"
  },
  {
    "url": "osoznannaya-podborka-graphdesign/index.html",
    "revision": "002f6d464f81b7f1e8f62dbc367bf50f"
  },
  {
    "url": "osoznanny-graph-design/index.html",
    "revision": "ef5010417a2fabafbacc8534a12b8baf"
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
    "revision": "31720e278c2096cd6a75f2b9639ac96b"
  },
  {
    "url": "page-data/blend-perekhod-v-adobe-illustrator-podrobnyi-urok/page-data.json",
    "revision": "b1f2bfeb43a7309bf83e1f880e967382"
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
    "revision": "ab44c7e1c59af6773b2eff1c2d799256"
  },
  {
    "url": "page-data/kak-frilanseru-ocenit-stoimost-raboty/page-data.json",
    "revision": "fb66486706fcfd8656156d456ec5f4fe"
  },
  {
    "url": "page-data/kak-oformit-abzac/page-data.json",
    "revision": "6844133682af32df16d39ddb4bbb4a8d"
  },
  {
    "url": "page-data/kak-postroit-setku-chast-3/page-data.json",
    "revision": "42aac86998770d1e7a17bf068a4680f0"
  },
  {
    "url": "page-data/kak-postroit-setku-graficheskii-dizain-chast-2/page-data.json",
    "revision": "003e47817d603cca766afb342d55931e"
  },
  {
    "url": "page-data/kak-sdelat-evrobuklet-v-indizain/page-data.json",
    "revision": "6c9a5372bde76bbbaffce546db390e7f"
  },
  {
    "url": "page-data/maket-neo-geo/page-data.json",
    "revision": "de0c805482041b02ae25c0d2050337d5"
  },
  {
    "url": "page-data/maket-techno/page-data.json",
    "revision": "632a8e7291693c71cd95b962231d7c39"
  },
  {
    "url": "page-data/modulnaya-setka-1/page-data.json",
    "revision": "b31a7964d9b9db04049b93e734be353b"
  },
  {
    "url": "page-data/nastroiki-indizaina-kakie-opcii-vazhny/page-data.json",
    "revision": "9dfe91112518e87474db29f3e9e8a7e0"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/osoznannaya-podborka-freelance/page-data.json",
    "revision": "f99eccf2b2576266093506a115db3b5e"
  },
  {
    "url": "page-data/osoznannaya-podborka-graphdesign/page-data.json",
    "revision": "81d29584bf614acccda68c15030d7fff"
  },
  {
    "url": "page-data/osoznanny-graph-design/page-data.json",
    "revision": "1446d48d12c6bf6c184de5a7b166a722"
  },
  {
    "url": "page-data/perspektiva-i-izometriya-adobe-illustrator-podrobnyi-urok/page-data.json",
    "revision": "d006bc50f6df3c9ffcac1289a82167ff"
  },
  {
    "url": "page-data/plakat-za-5-minut/page-data.json",
    "revision": "652415b2dbf9b2bf662abbddc0ab8b2c"
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
    "revision": "c918caec5e182e5bd5fb618979c96d04"
  },
  {
    "url": "page-data/sdsa/page-data.json",
    "revision": "150069501f5b25ca0b73c07216ee2e5b"
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
    "revision": "5f4d5ea6347d35c8ba52fd85f373027f"
  },
  {
    "url": "page-data/strim-typography/page-data.json",
    "revision": "343aa337558b1b76986b1f3e8442aa8a"
  },
  {
    "url": "page-data/tipografika-primery-iz-praktiki/page-data.json",
    "revision": "bef4e0442d1666b07099ff7644ebe4f5"
  },
  {
    "url": "page-data/urok-pro-ikonochnyi-shrift-v-indizain/page-data.json",
    "revision": "8129acb9c74d7a344b351a89b5445332"
  },
  {
    "url": "page-data/urok-verstki-zhurnala-v-indizain-rabota-s-tekstom/page-data.json",
    "revision": "4acbd9e1290b882e5f5ef3bebbaf5160"
  },
  {
    "url": "page-data/vidy-garnitur/page-data.json",
    "revision": "e6699ac24c0988e811e5e16a62f61177"
  },
  {
    "url": "page-data/zdorove-frilansera-kak-obustroit-rabochee-mesto/page-data.json",
    "revision": "d114128c72da2793418f5e4a8e164547"
  },
  {
    "url": "perspektiva-i-izometriya-adobe-illustrator-podrobnyi-urok/index.html",
    "revision": "50b6430d89cad3e9e00cf40f66c97b32"
  },
  {
    "url": "plakat-za-5-minut/index.html",
    "revision": "59640e5a0771705bb04e05dc1ef11d48"
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
    "revision": "35b278c970c083242ba6c5783b5afa9b"
  },
  {
    "url": "public-offer/index.html",
    "revision": "40b3b3c29c01b48d221b0ec4f8d7e1b2"
  },
  {
    "url": "raznica-mezhdu-fotoshop-illyustrator-indizain-chto-luchshe/index.html",
    "revision": "5dcc617830f6b44ce1c6e8cd8fa4f4df"
  },
  {
    "url": "robots.txt",
    "revision": "4077eb321175305ef56b34259aa6d6f3"
  },
  {
    "url": "sdsa/index.html",
    "revision": "83296291d6ae4d217448c76d382774b3"
  },
  {
    "url": "sitemap.xml",
    "revision": "41c01d24b84ad71beadadc8fc158f3da"
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
    "revision": "93605f7469358b34d3df1d4544893898"
  },
  {
    "url": "strim-typography/index.html",
    "revision": "2af2df01d367960226c0a753e8b087db"
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
    "revision": "13b8b8039a284d87776c004f45acb800"
  },
  {
    "url": "urok-pro-ikonochnyi-shrift-v-indizain/index.html",
    "revision": "c4ebe3072f754d2caf4bab1e533ffc9b"
  },
  {
    "url": "urok-verstki-zhurnala-v-indizain-rabota-s-tekstom/index.html",
    "revision": "3ea6171b90e0eff8302c4d788446ab7e"
  },
  {
    "url": "vidy-garnitur/index.html",
    "revision": "de38c4c2b9ff374608868f99804e9cd9"
  },
  {
    "url": "webpack-runtime-9bbc29deac9e96e0097a.js"
  },
  {
    "url": "webpack-runtime-9bbc29deac9e96e0097a.js.map",
    "revision": "87f579e63ed6aa434215e0906204fc7c"
  },
  {
    "url": "webpack.stats.json",
    "revision": "ab7410ea1a989cd4f59a2674581967e5"
  },
  {
    "url": "zdorove-frilansera-kak-obustroit-rabochee-mesto/index.html",
    "revision": "f1df31a50f7b661ad9b82063be9e98f2"
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
  if (!resources || !(await caches.match(`/app-836bf5fab9ec9bd3b0d8.js`))) {
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
