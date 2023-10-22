'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ea8b81eed3bfd0f5f712490760f0ceee",
"assets/AssetManifest.json": "c467ce2edba40ebf0615fbe9aeda0116",
"assets/assets/fonts/MaterialIcons-Regular.otf": "1fe8e64e75f98f44c9c7ab05101f3bb1",
"assets/assets/gif/cc.gif": "fc7665e2c854fa35ee37066f19525a9f",
"assets/assets/gif/JJ.gif": "71eee1fa4233cde14100d7567f788726",
"assets/assets/gif/showcase.gif": "c36c541e4b91fec0e840599352a58bac",
"assets/assets/gif/tt.gif": "c6faff0977459ba621e98c8663ba531c",
"assets/assets/icons/github-512.png": "c768349a1f52df2e0a2b3364f7f4a69f",
"assets/assets/icons/github-icon.png": "f4240d1a933e8d7cf88aa4c41990c94b",
"assets/assets/icons/gmail-1500.png": "fc21469c2e59019cf223556704a7c1d4",
"assets/assets/icons/gmail-512.png": "c3760daf4b1f556eb99d5e5a9ea64a88",
"assets/assets/icons/gmail-icon.png": "6c26b664ba84b8d3a1aeb87fa1190ba6",
"assets/assets/icons/icons8-gmail-50.png": "29bf134325c2762e57e3c6d0c94489cb",
"assets/assets/icons/icons8-gmail-500.png": "e7c442829bb54178f2dafeb0210f9778",
"assets/assets/icons/instagram-512.png": "d31b75007052664ce33c37df6e1c34dd",
"assets/assets/icons/instagram-icon.png": "cb09cf83c2927b43a34f44d2aeab2681",
"assets/assets/icons/linkedin-480.png": "9a642c22165f5b493639d2f8101efac9",
"assets/assets/icons/LinkedIn-black-icon-light.png": "49284b95598bf9e787dc7a03c7b3368b",
"assets/assets/icons/linkedin-icon-light.png": "f638a81213742fa30df7edbd1911ed25",
"assets/assets/icons/linkedin-icon.png": "c22f68faed763acaf32afac50ef173fb",
"assets/assets/icons/linkedin-icon2.png": "cf8bb3b203c143d84fd4f7626380f093",
"assets/assets/icons/linkedin-icon3.png": "27803b63138d1e654ba3aba12b1a6bb3",
"assets/assets/icons/medium-512.png": "d3f6089203976105baf32f88219a2b92",
"assets/assets/icons/medium-icon.png": "1f0444d4dab22aa12348b6a9f5b390f2",
"assets/assets/icons/youtube-icon.png": "19c8af41ae471ba6d4865ed3ffd3d637",
"assets/assets/icons/youtube-icon2.png": "89e8a2bfc33a9a72b4e3f1d6db5b15d2",
"assets/assets/imgs/5424482.jpg": "11a43b6c92858f82bcff3c24a784b158",
"assets/assets/imgs/about-modified.png": "1d585df80cfb7bbcc8aecd58c5771128",
"assets/assets/imgs/about.jpg": "3637d6bc45286df6bca57afe4a380f4c",
"assets/assets/imgs/adfs2.PNG": "c9a275687df0ffec262cc911c2ae71b6",
"assets/assets/imgs/bmc.JPG": "dfa551c51a86b1894abeeb87a182a616",
"assets/assets/imgs/breachReport.PNG": "9c5185f3553cb12ab72a7d836237d621",
"assets/assets/imgs/ca.PNG": "9da9f7a138ae2f6f083a039a28968bce",
"assets/assets/imgs/cissp-image-circular.png": "2e1debcc29aeb17d313b9631af655145",
"assets/assets/imgs/cloudSecurity.PNG": "a867542efb18b1fc714e33a231990e37",
"assets/assets/imgs/cognizant.PNG": "63d52e7447316d64d1f8f4b00afc62cb",
"assets/assets/imgs/comptia-image-circular.png": "1ba7f05e22be54c0a252ffac4c483f58",
"assets/assets/imgs/cryptograghy.PNG": "4c0ee7ee954147621e594b2ea9b79eb4",
"assets/assets/imgs/css.PNG": "9f5427eb476cf3ab0bb5f6027180004e",
"assets/assets/imgs/ct.jpg": "d42effddcf39354e9752a46d8ca0818e",
"assets/assets/imgs/cyberCrime.PNG": "c0ec17221e7d7aa10fab2e847be5bc08",
"assets/assets/imgs/cybergames.jpg": "b5c8b0e28fd570dc3d700e9f4aa84f4a",
"assets/assets/imgs/dart.JPG": "b195f76e60fea8aaada7524c2397a9dd",
"assets/assets/imgs/etl.JPG": "ef7be27e6e56ab57cd2b4aaa652adc45",
"assets/assets/imgs/figma.PNG": "6cd69ade5c07523a10345d122fce3706",
"assets/assets/imgs/firebase.PNG": "64d8bbab2a9d7305cb064f8a4ede40fc",
"assets/assets/imgs/flutter.JPG": "8d03f1ca75f550b77cff4738ff284488",
"assets/assets/imgs/forgerock.PNG": "375bf2b76927134142e148cf6c6adfb4",
"assets/assets/imgs/g.jpg": "75e2e685b14ff1dc1ab217421244d6c0",
"assets/assets/imgs/g1.jpg": "92872a58ee03c80bdf9159a8aad8b32b",
"assets/assets/imgs/g2.jpg": "d2fe65840324ade693f5319c4bd24039",
"assets/assets/imgs/gcp.PNG": "b897bb6ba3359037db7f087526e87d53",
"assets/assets/imgs/git.PNG": "728ff5a8e44d74cd0f2359ef0a9ec88a",
"assets/assets/imgs/github-logo.png": "cf4ffbd018bdc0871e655440de1087e6",
"assets/assets/imgs/github.PNG": "b92380c5a98b680fd539af13f1c6f28e",
"assets/assets/imgs/grade-fall.PNG": "231c049514a943d1f989f2698df3fc26",
"assets/assets/imgs/grade-spring.PNG": "bbbda76e029358cb012423370d6a2513",
"assets/assets/imgs/hackathon-image.jpg": "500812e2ed40200ed5700dbd53a876dc",
"assets/assets/imgs/hackathon.jpg": "2cc8d5157bbed916b13bb1b06234065d",
"assets/assets/imgs/hipaa.PNG": "f7051872f93ee271fcd0a066adce2701",
"assets/assets/imgs/html.JPG": "c073adf6b06ab1f7067ce9a366fc4244",
"assets/assets/imgs/IMG-2346.PNG": "6af096e6f8d675121380bcd02ab656f6",
"assets/assets/imgs/img.png": "5bc1e77221bfe9dfeb084c62ff86c60f",
"assets/assets/imgs/img_1.png": "5bc1e77221bfe9dfeb084c62ff86c60f",
"assets/assets/imgs/img_2.png": "5bc1e77221bfe9dfeb084c62ff86c60f",
"assets/assets/imgs/img_3.png": "fde693187e5566adb81b563a14ced545",
"assets/assets/imgs/img_4.png": "fde693187e5566adb81b563a14ced545",
"assets/assets/imgs/infiflex.PNG": "49fc10c8397804405520f5cd41bdce3a",
"assets/assets/imgs/java.PNG": "e5e5f786f139f7b3a9421ee9399e98ee",
"assets/assets/imgs/javascript.PNG": "090fe8749ff44a5edf7565e7ae67ef60",
"assets/assets/imgs/jboss.PNG": "5d42b69d9977edb4bd43a04074cb61eb",
"assets/assets/imgs/ji.jpg": "754625c80815a55c477cd093f148801b",
"assets/assets/imgs/ki.jpg": "13ea58b7afd3c3021ead82ef32cc649b",
"assets/assets/imgs/ldap.png": "555f4c4a9cd9f36e8a6e8929f2785479",
"assets/assets/imgs/li.jpg": "2fd616ff77ffba94e506bb615a0809b3",
"assets/assets/imgs/linux.PNG": "3bd00e194b36d6a67d16072a3cf948c0",
"assets/assets/imgs/mobileBackground.PNG": "74c22bdffaa0efdee20d16c660663d96",
"assets/assets/imgs/mobileBackgroundLight.jpg": "951442cad2b38809250a9c6efd5b0f97",
"assets/assets/imgs/mobileBackgroundLight2.jpg": "f6ce2cf2420f24e4c8346859244575ef",
"assets/assets/imgs/mysql.PNG": "decad1f9934cef2b0e70e6b475a94a27",
"assets/assets/imgs/nginx.JPG": "4fc813122a7c2f2c51dcb16665494e12",
"assets/assets/imgs/o1.jpg": "1ceab6205af8dc071719394ec7b4f911",
"assets/assets/imgs/o2.jpg": "38012768cd46f780557fe2bfea015c6d",
"assets/assets/imgs/o3.jpg": "739e4f47e1095ed7bdead0b584d7ad58",
"assets/assets/imgs/o4.jpg": "c0b163a9a6f6b2ad7d3ca6a2edbcaca4",
"assets/assets/imgs/o5.jpg": "31b9c7e5bf5120f24d44cdff3b9905ee",
"assets/assets/imgs/o6.jpg": "6c16eec63fe40a1e4409472c1307b795",
"assets/assets/imgs/o7.jpg": "ce4044725153a1e74e66f155d673936e",
"assets/assets/imgs/o8.jpg": "71c3a8e5e0fc2a0a00646ac858631418",
"assets/assets/imgs/o9.jpg": "fab96e02ab030ed1c8f8df8e0d7a9921",
"assets/assets/imgs/oauth2.JPG": "d626d7ea7076bc31c70a0033abf8919f",
"assets/assets/imgs/okta.PNG": "675b5fc3562012f6370703d4a497cfc9",
"assets/assets/imgs/openidconnect.JPG": "57479c20bea421189de141233f922136",
"assets/assets/imgs/oracle.JPG": "73c7dd9e1a7afe271ee54f36eee7a492",
"assets/assets/imgs/pcidss.PNG": "6af096e6f8d675121380bcd02ab656f6",
"assets/assets/imgs/pcse-image-circular.png": "abdce92c33d08a378b61af11144934f6",
"assets/assets/imgs/pingfed.PNG": "9506777901813443dfc4f3cbd7df0780",
"assets/assets/imgs/python.JPG": "69ec79b42b0743a50357aa351a3817ef",
"assets/assets/imgs/sailpoint.PNG": "df88ba2ddab46fb43bb2e7ee6220fcde",
"assets/assets/imgs/saml.PNG": "657d86ecd966f00ea2f42e72135bf499",
"assets/assets/imgs/sc.jpg": "3392af73f82595f99de06427fae53ce6",
"assets/assets/imgs/sd.jpg": "1408aec5391e08ade634de834b3ca074",
"assets/assets/imgs/servicenow.PNG": "adb50d7ec0a0bb2ed13c598f41aa6de6",
"assets/assets/imgs/sg.jpg": "5a8c117821ecb0985d3da20a8b314ed1",
"assets/assets/imgs/shellscript.JPG": "1bbaf2c2bdd5ae8c079f08c1730a6c26",
"assets/assets/imgs/shp.jpg": "a4f8d985f5a8d7975f9b33236fd02810",
"assets/assets/imgs/sl.jpg": "d0f1765e269cb9680a524fb946d12889",
"assets/assets/imgs/smartDining.PNG": "46a28561b45a7cb0d63f1c5dc5d19253",
"assets/assets/imgs/sqlInjection.PNG": "d7fbc9e3d2095546277e3b4e061ff23c",
"assets/assets/imgs/sqlserver.JPG": "af469f707c51227a8eef5de6383f9380",
"assets/assets/imgs/sso.PNG": "a5dfd85d21089c3cab8682ba5367f8f8",
"assets/assets/imgs/tomcat.PNG": "17baa51bffc51343df34a609e749e7d8",
"assets/assets/imgs/ui.jpg": "1408aec5391e08ade634de834b3ca074",
"assets/assets/imgs/weblogic.JPG": "4509c8c30e4918a1f3b2c6723d1e33b3",
"assets/assets/imgs/windows.JPG": "cd4123d6d4bb240d936812cdd8fa849a",
"assets/assets/imgs/windowsServer.PNG": "70c2bc93d4e54fdf8a8f9456c5829340",
"assets/assets/imgs/windowsserver.WEBP": "3570f1ea4083deeb7e8091cdc378aac1",
"assets/assets/imgs/wwe.png": "7709275a963570c49475e9995fbf9a6f",
"assets/assets/imgs/wwe1.PNG": "250ba6e7d4d875d2201cc7ec16a49373",
"assets/assets/imgs/wwe2.PNG": "20f4375cf286eb289c1ad2174e8daa26",
"assets/assets/imgs/wwe3.jpg": "2639fcf26cf279bc963f8322642db8c5",
"assets/assets/imgs/wwe4.jpg": "97d58208561b5e98815133af6645a356",
"assets/assets/imgs/yotube-logo.jpg": "c02b806aab2afa6ab9a4c62701656ac4",
"assets/assets/imgs/youtube.PNG": "d7d1b94544874932becd581e733c5375",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "28e4cd4e886b1130600004e68f3fb5b9",
"assets/NOTICES": "cc337682076f15ea7ad7d03b9562935e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "7709275a963570c49475e9995fbf9a6f",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "4ae84ef075af23b27f2aa29f93120ddd",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2ca7044c31007b9a4af458fcc363075c",
"/": "2ca7044c31007b9a4af458fcc363075c",
"main.dart.js": "88e569266d1b08c5b8ddb9c558cd8e87",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "d351ae99551ba008177d734c54348c46"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
