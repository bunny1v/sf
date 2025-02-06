'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b32964e2addbcf44645a695c8b374f8f",
"assets/AssetManifest.bin.json": "c30e88fdc692e7dc459babf54aebf6be",
"assets/AssetManifest.json": "1d9e388f2a6a1767abd7035acb0d0edd",
"assets/assets/ai.jpg": "20992aaeb6ebc4f8084bd99cc2d2e2e4",
"assets/assets/api-data.json": "78a86a87702bd274647ae34196063414",
"assets/assets/app-data-text.json": "c60f9603daba3e6362fe1562a88cb1bb",
"assets/assets/book_shelf.png": "880acd3e621c9a91a641b38857e560e4",
"assets/assets/faqs.json": "36105de58a4b1099557a83c2698c7bdf",
"assets/assets/index.js": "91a18f8e2804ee9e3e6d454354b61729",
"assets/assets/it.jpg": "3be38bbbd5d261ccc44be7716ec73aa2",
"assets/assets/it2.png": "2b1b70cce44475db1f08ab09203ea1ea",
"assets/assets/library.jpg": "87d969d5d2570bf394a8842e07f6c485",
"assets/assets/Python%2520Programming/projects/python_project_1.json": "251129161e530635c1e3f428ff795362",
"assets/assets/Python%2520Programming/projects/python_project_2.json": "9a51e4e0b7fe45599fb7e7d38a8628bc",
"assets/assets/Python%2520Programming/quizzes/advanced.json": "5a80cdb4940bc617ab7110be45d240e1",
"assets/assets/Python%2520Programming/quizzes/applications.json": "6fdc1331faad01ed780e0ec9f43c0643",
"assets/assets/Python%2520Programming/quizzes/control_flow.json": "193cde68b9e8fa0e91bfe5ee23b4fefc",
"assets/assets/Python%2520Programming/quizzes/data_structures.json": "92fdcd28229399efd5761bba2d422986",
"assets/assets/Python%2520Programming/quizzes/error_handling.json": "97b840bfcfa8d6c5506644e2eafeca8b",
"assets/assets/Python%2520Programming/quizzes/files.json": "5d14ca878b84bd95fbb6bce8c742407e",
"assets/assets/Python%2520Programming/quizzes/functions.json": "e1d3d5a4d43fac49e60190fc583f4169",
"assets/assets/Python%2520Programming/quizzes/intro.json": "2415873f7bcc7ff2fc3e3e33bd5b3864",
"assets/assets/Python%2520Programming/quizzes/modules.json": "b68708623218e3e607405f222a355579",
"assets/assets/Python%2520Programming/quizzes/oops.json": "938f0175fcb18e0ee270aff9cfc9e827",
"assets/assets/sd.jpg": "448f0a01896e0696d34fffe5249e4d35",
"assets/assets/sf.png": "8221fdb484ca15be576dc0c66305d393",
"assets/assets/sf22.png": "7589695e5e14ce9b7d581c007642ee4d",
"assets/assets/sf33.png": "75780dacff8faf6208a363b16ddee0e3",
"assets/assets/sfcmp.png": "62aa2a5c327025b8c04d34c76626f7cc",
"assets/assets/sfls.png": "a91c292a1840ed1427945e4dbdd0ada9",
"assets/assets/Web%2520Development/projects/web_project_1.json": "29dbdbcbe4dbedf9f8852f44b7bb8ea3",
"assets/assets/Web%2520Development/projects/web_project_2.json": "dd7cf6541b3d7e528bd9d3e18e3b22f0",
"assets/assets/Web%2520Development/projects/web_project_3.json": "58f2c38176cca255d168148fbad6dbf8",
"assets/assets/Web%2520Development/projects/web_project_4.json": "3a00f1e48ac77ea242cab367fe98a2b1",
"assets/assets/Web%2520Development/quizzes/css_advanced.json": "b05660a0e2d5046bb312f568895b46bb",
"assets/assets/Web%2520Development/quizzes/css_intro.json": "5c1bb742461035e360a00ace7c1354eb",
"assets/assets/Web%2520Development/quizzes/css_responsive.json": "38993007b4aa1c5cd1d571faf9c1ca2f",
"assets/assets/Web%2520Development/quizzes/html_apis.json": "67a1aa5841c5148625a0f3f50b39386a",
"assets/assets/Web%2520Development/quizzes/html_forms.json": "5bb7da1640e3b82fba94a9befeffbc5a",
"assets/assets/Web%2520Development/quizzes/html_intro.json": "0a1cd4dca0dacf6ea297a3b80c54cace",
"assets/assets/Web%2520Development/quizzes/html_media.json": "a14345eea18aed36f1044261aededcee",
"assets/assets/Web%2520Development/quizzes/js_apis.json": "b9ba733cc54b2d2977433507795e5952",
"assets/assets/Web%2520Development/quizzes/js_async.json": "d4856c1c018cb8cc27ae59f258a2abcf",
"assets/assets/Web%2520Development/quizzes/js_bom.json": "a3b97298f58711a34528dbbc109f7bb7",
"assets/assets/Web%2520Development/quizzes/js_intro.json": "b449a0ec887486e5eaf469ced00760d8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "3e6db9846fee850decc6f3355fb68c17",
"assets/NOTICES": "6aeaa1836587302812ec2a5d6c605969",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4bb3eae0260e3ea23fc2cc66c1025c8a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b397d3ce70addd6dcfb42445f3ffd96b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9e0acff518f9fa094821ae7699d26e47",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "72a6ad8eca7abac8953b843774817164",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f1d5c99f186331dca5c22dbf562848b6",
"/": "f1d5c99f186331dca5c22dbf562848b6",
"main.dart.js": "437015f56d8cdcc782e58b8f314fb8c4",
"manifest.json": "7e48f1849e1583eb1ef555a3858e8b54",
"version.json": "900445f2862463ceb58ffd4b5de97cb4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
