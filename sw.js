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
    "url": "02544da2802ea179efeb5392bd78347047b31cc9-6bd337b6c097a00e451b.js"
  },
  {
    "url": "02544da2802ea179efeb5392bd78347047b31cc9-6bd337b6c097a00e451b.js.map",
    "revision": "6cece77ab7e6c1ab8163c0d7ee45ea99"
  },
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
    "url": "29798ff7c59a770b9437c20c5a088bbd0c1e6a47-598e018d89aedc0712ae.js"
  },
  {
    "url": "29798ff7c59a770b9437c20c5a088bbd0c1e6a47-598e018d89aedc0712ae.js.map",
    "revision": "cc57e5bb9c249e52f3a259c0dffa7ba8"
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
    "revision": "3a61d0ad575861a697bc0c49c2e7f90f"
  },
  {
    "url": "404/index.html",
    "revision": "606fa0d5e3d6b1ac6cd39aa29deac750"
  },
  {
    "url": "44eb3edd383ce70e9766a92974170519ef90dbe5-2742bd349849985cd7aa.js"
  },
  {
    "url": "44eb3edd383ce70e9766a92974170519ef90dbe5-2742bd349849985cd7aa.js.map",
    "revision": "e4873101d1af02b9830d2dbe45fb38f6"
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
    "url": "625520763f98a4997b62b01037b3105d225de680-f44e778095e188a28c2b.js"
  },
  {
    "url": "625520763f98a4997b62b01037b3105d225de680-f44e778095e188a28c2b.js.map",
    "revision": "57870f8f49bbc65bd52064acadeb7e38"
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
    "url": "7efcbb64e6531db39c789c77cd5c63c08b0064ad-0fc54578fe31a73635b3.js"
  },
  {
    "url": "7efcbb64e6531db39c789c77cd5c63c08b0064ad-0fc54578fe31a73635b3.js.map",
    "revision": "545f9bdf7f5a9638d2ea14356143c675"
  },
  {
    "url": "85390c2c5a1f25d985c16673ae069ff7fcd61bc4-d44b6de5a193ed03c6ee.js"
  },
  {
    "url": "85390c2c5a1f25d985c16673ae069ff7fcd61bc4-d44b6de5a193ed03c6ee.js.map",
    "revision": "f0403df609fbd3fd079df3b54bb6911d"
  },
  {
    "url": "96x96.png",
    "revision": "4803579e98254c95573be2fe9ece7ba6"
  },
  {
    "url": "app-c674334f3ef4b4ee3d8f.js"
  },
  {
    "url": "app-c674334f3ef4b4ee3d8f.js.map",
    "revision": "f9ff1f0b763ae7a7c16ea4e9c261e1e4"
  },
  {
    "url": "blog/index.html",
    "revision": "bca19bf0ce2a61bf87a37ab64cea4948"
  },
  {
    "url": "c008ada3e173a60331faea31dca12cf57fb6c38f-8af4d1afc3ea3b4fc0cc.js"
  },
  {
    "url": "c008ada3e173a60331faea31dca12cf57fb6c38f-8af4d1afc3ea3b4fc0cc.js.map",
    "revision": "5250a301a1f8ca899a3b6a0f5a474f02"
  },
  {
    "url": "chunk-map.json",
    "revision": "a5f81ffcfd621626bfd757d1344f6c58"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5364357412861a5f7fcb.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5364357412861a5f7fcb.js.map",
    "revision": "2ffd9bcb7539136a17a9686bddb08203"
  },
  {
    "url": "component---src-pages-404-jsx-1167051f81bea08ab65f.js"
  },
  {
    "url": "component---src-pages-404-jsx-1167051f81bea08ab65f.js.map",
    "revision": "26501e11a8437cebef5cbd3aac6aface"
  },
  {
    "url": "component---src-pages-blog-jsx-048f56e87967f557adf5.js"
  },
  {
    "url": "component---src-pages-blog-jsx-048f56e87967f557adf5.js.map",
    "revision": "1dbf446fd266b85633d6eead37234916"
  },
  {
    "url": "component---src-pages-graphic-system-vhs-jsx-122012df6208b512b629.js"
  },
  {
    "url": "component---src-pages-graphic-system-vhs-jsx-122012df6208b512b629.js.map",
    "revision": "353d39cebb89649161ab2d32bb63395b"
  },
  {
    "url": "component---src-pages-index-jsx-67f35f74f37ce6455e1b.js"
  },
  {
    "url": "component---src-pages-index-jsx-67f35f74f37ce6455e1b.js.map",
    "revision": "1348450c21652ad51b8f706a2db79fed"
  },
  {
    "url": "component---src-pages-osoznanny-graph-design-jsx-4d37bdfc6979ec0efb9f.js"
  },
  {
    "url": "component---src-pages-osoznanny-graph-design-jsx-4d37bdfc6979ec0efb9f.js.map",
    "revision": "a2c704e5df4dbd2a6cc27efc5a9793fb"
  },
  {
    "url": "component---src-pages-privacy-jsx-4ba4d7dbd88984878c86.js"
  },
  {
    "url": "component---src-pages-privacy-jsx-4ba4d7dbd88984878c86.js.map",
    "revision": "86fafe97d0bc5263e3142fbdfb80c68c"
  },
  {
    "url": "component---src-pages-public-offer-jsx-ee0c830e65e0b6a57429.js"
  },
  {
    "url": "component---src-pages-public-offer-jsx-ee0c830e65e0b6a57429.js.map",
    "revision": "e55eed45147e89e3502bda42fe63a457"
  },
  {
    "url": "component---src-templates-content-post-jsx-6e45cee75afe197f5dab.js"
  },
  {
    "url": "component---src-templates-content-post-jsx-6e45cee75afe197f5dab.js.map",
    "revision": "49f95d981250f269116fc0b8cf935fc5"
  },
  {
    "url": "component---src-templates-podborka-jsx-24b14e2f5dd7e3ce5775.js"
  },
  {
    "url": "component---src-templates-podborka-jsx-24b14e2f5dd7e3ce5775.js.map",
    "revision": "b1a9935d2db0ae7323192347323fa2e1"
  },
  {
    "url": "f7d5a900547e88214faaba8307947e149ba9a7c9-24a67626dcd093dab221.js"
  },
  {
    "url": "f7d5a900547e88214faaba8307947e149ba9a7c9-24a67626dcd093dab221.js.map",
    "revision": "ebf57853c022b46def0574092bf5bf58"
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
    "revision": "f008e58277c01057c1a390ef0a22e098"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "b1a1ce57c89fac7603959f21d2622370"
  },
  {
    "url": "kak-oformit-abzac/index.html",
    "revision": "7095329da115d7054d5ae3e52172436e"
  },
  {
    "url": "maket-neo-geo/index.html",
    "revision": "1fd9d1fcccdd18411c4882963b37f807"
  },
  {
    "url": "maket-techno/index.html",
    "revision": "a1a79b38b9d60d580d6b02c0678b7790"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "6855b3b5ddeb66ab520f746af65c05ef"
  },
  {
    "url": "modulnaya-setka-1/index.html",
    "revision": "eae242140f5fcc37b266d25b746763e7"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "6339e892c9d87cb734b22d7bf001f6e6"
  },
  {
    "url": "oshibka-mishleniya/index.html",
    "revision": "ab26580439befe6ed25eb6f465167ad2"
  },
  {
    "url": "osoznannaya-podborka-freelance/index.html",
    "revision": "bf1ad35602543c6cc8ec5358ae9e9c85"
  },
  {
    "url": "osoznannaya-podborka-graphdesign/index.html",
    "revision": "e5a4e5092d0aea9abe516cad8ef15138"
  },
  {
    "url": "osoznanny-graph-design/index.html",
    "revision": "0ca31e8a4dc95817923ab3e9ec6547fa"
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
    "revision": "365bb6f22459b0933d8ad994652a10fd"
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
    "revision": "e6481d9a6ff8ca2511c03336a50e8efc"
  },
  {
    "url": "page-data/kak-oformit-abzac/page-data.json",
    "revision": "3bf58f88cb89139023f4efd9b1fbe0ab"
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
    "revision": "abbc1fc23b98421cf874e48e183c4ee4"
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
    "revision": "df3402f8fe80977804a2045419676818"
  },
  {
    "url": "page-data/osoznannaya-podborka-graphdesign/page-data.json",
    "revision": "61888ebc61dd805643680d70cb8ae9bc"
  },
  {
    "url": "page-data/osoznanny-graph-design/page-data.json",
    "revision": "02a67bee48d7cfdeda01d9b2c77f562a"
  },
  {
    "url": "page-data/plakat-za-5-minut/page-data.json",
    "revision": "0788a986138f2e9b08f86c8255fbdd45"
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
    "revision": "db83326e17ebb9139e95850847a0d1cc"
  },
  {
    "url": "page-data/vidy-garnitur/page-data.json",
    "revision": "16ce25b2a96938230fb0049e8b76c468"
  },
  {
    "url": "plakat-za-5-minut/index.html",
    "revision": "de4a105d8f0c39129150e44f7c3e1acc"
  },
  {
    "url": "polyfill-ff9d631ac914200454f0.js"
  },
  {
    "url": "polyfill-ff9d631ac914200454f0.js.map",
    "revision": "99ab2c8ce490d465d79dc1a9c700dc4f"
  },
  {
    "url": "privacy/index.html",
    "revision": "9bb21b8d4cca6c172a87a8b8b3870078"
  },
  {
    "url": "public-offer/index.html",
    "revision": "93cc2201f6be05fb5a6814fade93b580"
  },
  {
    "url": "robots.txt",
    "revision": "06e9c0759c9d42e3a3ffe646648e2317"
  },
  {
    "url": "sdsa/index.html",
    "revision": "83cd57bd827c30f19505bf204447b0a9"
  },
  {
    "url": "sitemap.xml",
    "revision": "2990f5874fc5550f95a710fa774ec2c7"
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
    "revision": "b4a5b38f1462f58b210e195428b75e4a"
  },
  {
    "url": "strim-typography/index.html",
    "revision": "bd5a7e576680e72720cbc23ea1e9279c"
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
    "revision": "6adbfe5301dc610371c58b5c27ad57de"
  },
  {
    "url": "webpack-runtime-95cc37dd6ef3cbaf16b6.js"
  },
  {
    "url": "webpack-runtime-95cc37dd6ef3cbaf16b6.js.map",
    "revision": "931b20859e38b718da0b8a84f1a90f63"
  },
  {
    "url": "webpack.stats.json",
    "revision": "6f86db9b9fd88551a400c6cb4d458520"
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
  if (!resources || !(await caches.match(`/app-c674334f3ef4b4ee3d8f.js`))) {
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
