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
    "url": "29798ff7c59a770b9437c20c5a088bbd0c1e6a47-2baa26289061b14e5b86.js"
  },
  {
    "url": "29798ff7c59a770b9437c20c5a088bbd0c1e6a47-2baa26289061b14e5b86.js.map",
    "revision": "d9e6c7e37fc54dfdcb2dd9c874da8158"
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
    "revision": "9050df31edd1f7c0973740b0753802ac"
  },
  {
    "url": "404/index.html",
    "revision": "363a70e89c9e4ca4803e9a2ed93d5d63"
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
    "url": "app-cc79f604e263621c5d69.js"
  },
  {
    "url": "app-cc79f604e263621c5d69.js.map",
    "revision": "9c9c0c918fc20cff5066a0613c41ebfa"
  },
  {
    "url": "blog/index.html",
    "revision": "f2987bd92d7f2d29bbe0ea0279d0cc67"
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
    "revision": "25cd6823f685ae2e72f28e39162bca28"
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
    "url": "component---src-pages-graphic-system-vhs-jsx-7bb113e7446087822453.js"
  },
  {
    "url": "component---src-pages-graphic-system-vhs-jsx-7bb113e7446087822453.js.map",
    "revision": "51f48a6db8f6b42d921e4ad9aceb85a9"
  },
  {
    "url": "component---src-pages-index-jsx-c9d4d98566d171e5a47e.js"
  },
  {
    "url": "component---src-pages-index-jsx-c9d4d98566d171e5a47e.js.map",
    "revision": "446e1e5b56a23cb4182d7f1c5b7f0df4"
  },
  {
    "url": "component---src-pages-osoznanny-graph-design-jsx-97c7462f44e50d986ff2.js"
  },
  {
    "url": "component---src-pages-osoznanny-graph-design-jsx-97c7462f44e50d986ff2.js.map",
    "revision": "b3a98991c6ee2098c81472e2a6fa9c43"
  },
  {
    "url": "component---src-pages-privacy-jsx-c5caebc2533403f5da0e.js"
  },
  {
    "url": "component---src-pages-privacy-jsx-c5caebc2533403f5da0e.js.map",
    "revision": "5fa02cf9b0e080cc7c737bf56538331d"
  },
  {
    "url": "component---src-pages-public-offer-jsx-fcae6ed0bfb35d5aa8bb.js"
  },
  {
    "url": "component---src-pages-public-offer-jsx-fcae6ed0bfb35d5aa8bb.js.map",
    "revision": "fe85a2001cae3c0f1b1aaca8584741bc"
  },
  {
    "url": "component---src-templates-content-post-jsx-572fed513d29aaf107f3.js"
  },
  {
    "url": "component---src-templates-content-post-jsx-572fed513d29aaf107f3.js.map",
    "revision": "0d8d4c516fb24fff57ea69277849fffe"
  },
  {
    "url": "component---src-templates-podborka-jsx-b10e06c9e66277bb5dfb.js"
  },
  {
    "url": "component---src-templates-podborka-jsx-b10e06c9e66277bb5dfb.js.map",
    "revision": "62cc333cdbf34bfac6b79eec9a098c44"
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
    "revision": "f6df620e325b48c85cd4e7914e6c7617"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "1509fb369fce94d8aa81f0637383a861"
  },
  {
    "url": "kak-oformit-abzac/index.html",
    "revision": "832c261562d772d753d09dc66a467edd"
  },
  {
    "url": "maket-neo-geo/index.html",
    "revision": "ac61271484a92deea5524b6936f90327"
  },
  {
    "url": "maket-techno/index.html",
    "revision": "a0fb0efab3ea19fc76f9ce4b23b30407"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "6855b3b5ddeb66ab520f746af65c05ef"
  },
  {
    "url": "modulnaya-setka-1/index.html",
    "revision": "931a73fdaaa356e72d1661f1a9ba6de6"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "77f9ca9c24048778f9573cb6229f42f1"
  },
  {
    "url": "osoznannaya-podborka-freelance/index.html",
    "revision": "205d0757220c28d0a08035279c73da7b"
  },
  {
    "url": "osoznannaya-podborka-graphdesign/index.html",
    "revision": "b37217a73c53d034f6a6924d274c4adc"
  },
  {
    "url": "osoznanny-graph-design/index.html",
    "revision": "ccea836afbc1863911a82547c5c85369"
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
    "revision": "58398fbe71417450eec0a90da3e5c6f5"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "5173b8491ac5e913ffe3fcc31fd33985"
  },
  {
    "url": "page-data/graphic-system-vhs/page-data.json",
    "revision": "7fabc9d8d74579d57a4dc6c80132f265"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "45e4ac81c64dd3adffb83eb927827174"
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
    "url": "page-data/osoznannaya-podborka-freelance/page-data.json",
    "revision": "f7b977922c59b96abb03ddbb39246fb5"
  },
  {
    "url": "page-data/osoznannaya-podborka-graphdesign/page-data.json",
    "revision": "738dbd0439e26a88220cfc2ee1adfbfc"
  },
  {
    "url": "page-data/osoznanny-graph-design/page-data.json",
    "revision": "904eb42767e58414177c513ca53dd016"
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
    "revision": "be4847429ffec7fb8bc421f82eaddcc9"
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
    "revision": "06d7992ab2cb2b67088e48397e65426a"
  },
  {
    "url": "public-offer/index.html",
    "revision": "5f1525d8283cb74e7a2f85efe7786a85"
  },
  {
    "url": "robots.txt",
    "revision": "06e9c0759c9d42e3a3ffe646648e2317"
  },
  {
    "url": "sdsa/index.html",
    "revision": "3fa727980c193682de5f156895666d47"
  },
  {
    "url": "sitemap.xml",
    "revision": "a784d67466189cbbf342a258d35a6728"
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
    "revision": "074695583f34c564bac8421a29670d90"
  },
  {
    "url": "strim-typography/index.html",
    "revision": "7860da1a2a533d20bc3d52e2aa6ec374"
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
    "revision": "8a2ced5d6eabf5b3bbb394596fef5f33"
  },
  {
    "url": "webpack-runtime-5b10765c03e033244350.js"
  },
  {
    "url": "webpack-runtime-5b10765c03e033244350.js.map",
    "revision": "50aa93b41b94a094ef74954e3c1e67b9"
  },
  {
    "url": "webpack.stats.json",
    "revision": "ea2d0411f10694dd3b14dc48442d2c4f"
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
  if (!resources || !(await caches.match(`/app-cc79f604e263621c5d69.js`))) {
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
