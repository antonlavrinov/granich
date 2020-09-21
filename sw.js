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
    "url": "29798ff7c59a770b9437c20c5a088bbd0c1e6a47-2cf562741511ef88afcf.js"
  },
  {
    "url": "29798ff7c59a770b9437c20c5a088bbd0c1e6a47-2cf562741511ef88afcf.js.map",
    "revision": "8ee3e3c9d4e5c81df9baef7cf8662e57"
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
    "revision": "a9029e67c975b7f93bc00e8e9bc99efa"
  },
  {
    "url": "404/index.html",
    "revision": "bac6f4fafee708140d442fd6334373a1"
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
    "url": "7efcbb64e6531db39c789c77cd5c63c08b0064ad-85f2f3a29b7c40879760.js"
  },
  {
    "url": "7efcbb64e6531db39c789c77cd5c63c08b0064ad-85f2f3a29b7c40879760.js.map",
    "revision": "97e22865db0a09883a750083c0513f65"
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
    "revision": "ad387c3984b63f9bb13720abbe520a7c"
  },
  {
    "url": "c008ada3e173a60331faea31dca12cf57fb6c38f-f72963ac5e10db7ac69d.js"
  },
  {
    "url": "c008ada3e173a60331faea31dca12cf57fb6c38f-f72963ac5e10db7ac69d.js.map",
    "revision": "e3ba15d65c9472ba3517ffbbdd666ef9"
  },
  {
    "url": "chunk-map.json",
    "revision": "ac9f87b7aa7b0f8f0a8b54036418cba1"
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
    "url": "component---src-pages-graphic-system-vhs-jsx-94b7d5458655fa19e4b8.js"
  },
  {
    "url": "component---src-pages-graphic-system-vhs-jsx-94b7d5458655fa19e4b8.js.map",
    "revision": "2c38a06a012ebd45029fa947b5285925"
  },
  {
    "url": "component---src-pages-index-jsx-e8a41f7bd90726114d1c.js"
  },
  {
    "url": "component---src-pages-index-jsx-e8a41f7bd90726114d1c.js.map",
    "revision": "6ba9a72673412032f201986546173aec"
  },
  {
    "url": "component---src-pages-osoznanny-graph-design-jsx-2966906fb8c5a1036658.js"
  },
  {
    "url": "component---src-pages-osoznanny-graph-design-jsx-2966906fb8c5a1036658.js.map",
    "revision": "e05ee9375509b2c45eafb49f3263ef74"
  },
  {
    "url": "component---src-pages-privacy-jsx-e808d925b9160da0b329.js"
  },
  {
    "url": "component---src-pages-privacy-jsx-e808d925b9160da0b329.js.map",
    "revision": "f38a5cbc066d0da7eecef2e33a2ebaf8"
  },
  {
    "url": "component---src-pages-public-offer-jsx-e38b7919f0a74584a1d3.js"
  },
  {
    "url": "component---src-pages-public-offer-jsx-e38b7919f0a74584a1d3.js.map",
    "revision": "88bf8029f39418046247047ce3517b4d"
  },
  {
    "url": "component---src-templates-content-post-jsx-1cb74daf503dda8257f2.js"
  },
  {
    "url": "component---src-templates-content-post-jsx-1cb74daf503dda8257f2.js.map",
    "revision": "730de84df27240ce9f474e2a189eecd6"
  },
  {
    "url": "component---src-templates-podborka-jsx-cae7ac91a9ae0493997c.js"
  },
  {
    "url": "component---src-templates-podborka-jsx-cae7ac91a9ae0493997c.js.map",
    "revision": "ca44ce1ab1706bb6d18ea1f95bfa5d8f"
  },
  {
    "url": "DsSa/index.html",
    "revision": "70a5293d5fb30bf7f196484afba14392"
  },
  {
    "url": "f7d5a900547e88214faaba8307947e149ba9a7c9-eeec9b6acdf5ea87e4b9.js"
  },
  {
    "url": "f7d5a900547e88214faaba8307947e149ba9a7c9-eeec9b6acdf5ea87e4b9.js.map",
    "revision": "757bbea77c7d28c0a5073ad46dbb1780"
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
    "revision": "cd06bea6dc73628c8385272715f66c97"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "6a60d0fd4ad4096cf3b43940c442a43b"
  },
  {
    "url": "kak-oformit-abzac/index.html",
    "revision": "23b9ca1eb2fe82bc1a887f351eac0892"
  },
  {
    "url": "kldfgj/index.html",
    "revision": "a893cb5ffecb8e44ed5f8636012b4e15"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "6855b3b5ddeb66ab520f746af65c05ef"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "77427aaa135d7cbe68dbc70f5ac4cebd"
  },
  {
    "url": "osoznannaya-podborka-graphdesign/index.html",
    "revision": "ad8b0aa5f3defe2e718e1f5d1a69f388"
  },
  {
    "url": "osoznanny-graph-design/index.html",
    "revision": "9ff0155bbda19f4ebff52273a02c3c82"
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
    "revision": "ebb3dcb5e344f3d2831b318b679bfca5"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "5173b8491ac5e913ffe3fcc31fd33985"
  },
  {
    "url": "page-data/DsSa/page-data.json",
    "revision": "7cbe8a3c6aa18cb4b3fc352436d2dd7e"
  },
  {
    "url": "page-data/graphic-system-vhs/page-data.json",
    "revision": "592ec8ef26debcdf0dbd344c720bffa2"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "2a568e54d7b78e05bc9f6e45f0d0d2ce"
  },
  {
    "url": "page-data/kak-oformit-abzac/page-data.json",
    "revision": "8364ccce47315fb3c304482a8eb4a7a6"
  },
  {
    "url": "page-data/kldfgj/page-data.json",
    "revision": "7d83b8416d3fda5f884bdb2c79819639"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/osoznannaya-podborka-graphdesign/page-data.json",
    "revision": "34854afbba82065d970c66e990e94c53"
  },
  {
    "url": "page-data/osoznanny-graph-design/page-data.json",
    "revision": "ef639411b306b8202eb20223381909ef"
  },
  {
    "url": "page-data/privacy/page-data.json",
    "revision": "b473b271b213e275492abba1bb1f4384"
  },
  {
    "url": "page-data/public-offer/page-data.json",
    "revision": "4380ab7687afab1c9206ddeff6b35b60"
  },
  {
    "url": "page-data/sdsa/page-data.json",
    "revision": "51d473e72bddae6e407421950cbad043"
  },
  {
    "url": "page-data/sq/d/1579113659.json",
    "revision": "3392ac14a9b1263cfc5770f1480a07cd"
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
    "url": "page-data/xcxc/page-data.json",
    "revision": "fc2f54f3ce06a429a2dc814845b7181f"
  },
  {
    "url": "page-data/xczasdd/page-data.json",
    "revision": "44e1aa87cbec742c5d353f0b98462ffd"
  },
  {
    "url": "page-data/xczczx/page-data.json",
    "revision": "5ac7284eaf7d18de583c1d0c9dfdcbc0"
  },
  {
    "url": "page-data/xzcsd/page-data.json",
    "revision": "4dd99901beb96039102eac066c8111ca"
  },
  {
    "url": "page-data/zxcsd/page-data.json",
    "revision": "41dc7054d4b9d32e73363d1220924abb"
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
    "revision": "d924c6eb6c25a4948fa4c26c6b48413f"
  },
  {
    "url": "public-offer/index.html",
    "revision": "67348a69e8d1f3d1c513bd005f04f8df"
  },
  {
    "url": "sdsa/index.html",
    "revision": "de94b4aedc85f201ee11d508a0b17a19"
  },
  {
    "url": "sitemap.xml",
    "revision": "c68e00bb4fe1e7cfef7e8ab42d631340"
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
    "url": "webpack-runtime-0772e1ccd8edc7f7f8df.js"
  },
  {
    "url": "webpack-runtime-0772e1ccd8edc7f7f8df.js.map",
    "revision": "2112b533328786ef67423d71a59e40cb"
  },
  {
    "url": "webpack.stats.json",
    "revision": "24611f6b53ec43340fd612787a16d7f9"
  },
  {
    "url": "xcxc/index.html",
    "revision": "b8a360951cd21d4b035fbecb4a12d651"
  },
  {
    "url": "xczasdd/index.html",
    "revision": "89eccdb64c3ce59dab10e51b7b34d917"
  },
  {
    "url": "xczczx/index.html",
    "revision": "5315686bba88bbf649bfb238616522f6"
  },
  {
    "url": "xzcsd/index.html",
    "revision": "1793c87fe9f4973fbf93b46c3cf7cfe4"
  },
  {
    "url": "zxcsd/index.html",
    "revision": "b91b6f2faace62fa9d1d45445dd0ffe5"
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
