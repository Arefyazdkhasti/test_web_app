'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6ba3f38d252f29b4a10beb45c1c4f46a",
"version.json": "01b4fe8c8be07f4d469a7a27e3023d02",
"index.html": "1777449d5d7e5671884364f67bd038db",
"/": "1777449d5d7e5671884364f67bd038db",
"main.dart.js": "3dde55248b69ba7161e536601e319a45",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "1a25d97f54f92d7b09943ad18b425163",
"icons/myket.png": "66b72a177430957c2ea4f16836baf877",
"icons/icsearchlogo.svg": "6114e559e4063e98a76b8653a6da5dc4",
"icons/bazaar.png": "ac8efd1a434e6142eafbf0f9dc917f39",
"icons/Icon-192.png": "a6be17a814215d094788718b440ed822",
"icons/google-play.png": "d0ec94ad987600ad49222979e6853474",
"icons/Icon-maskable-192.png": "a6be17a814215d094788718b440ed822",
"icons/Icon-maskable-512.png": "dd7a1cf2845bb801c96b21ac9076d14f",
"icons/Icon-512.png": "dd7a1cf2845bb801c96b21ac9076d14f",
"manifest.json": "3111d79515bb8fe8a491c8107602ddd6",
"fonts/Estedad-Medium.ttf": "a7b1473e887fb4a9adf676ab5b185093",
"assets/AssetManifest.json": "ddf318c5da56abcfd1ebfe8b97efbd16",
"assets/NOTICES": "a9e5a7c0db1afd13c1550a2e405baab2",
"assets/pubspec.yaml": "fbf8a3be2a97e88bc7b1a795d5678988",
"assets/FontManifest.json": "f2c4bc2359806b12f6489a619efd4e00",
"assets/AssetManifest.bin.json": "ce808102ab8fd6023e0878156ea55c37",
"assets/android/app/build.gradle": "d48c2a00dfa023bf4e3ebf8261293fc6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a1d5091f5ddd75101a242345fda60ce6",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/svgs/should_have_vpn.svg": "17bf80adf3cc6920b18408c8c7932c1d",
"assets/assets/images/svgs/wallet_transactions_no_item.svg": "4bd74a41632ddff58ea30d9e44ff5dd9",
"assets/assets/images/svgs/emptyaddress.svg": "cf697910934a6e34091ddddefe2206f2",
"assets/assets/images/svgs/bag_fill.svg": "5d4eb6143d09fe84fcaed2310eddd75e",
"assets/assets/images/svgs/emptytickets.svg": "e2f56c2ced12d7315f5a354bb3cacd66",
"assets/assets/images/svgs/icsearchlogo.svg": "6114e559e4063e98a76b8653a6da5dc4",
"assets/assets/images/svgs/emptycryptowallet.svg": "5b22980380b28cd326af78dc19b15ab9",
"assets/assets/images/svgs/circle.svg": "1e9c7d6b0f68b86dae9b11398c3d894b",
"assets/assets/images/svgs/briefcase.svg": "01c9aee855e6c89e30518bf2274c99f7",
"assets/assets/images/svgs/customerclublogo.svg": "7f81bebd7761a99e3d01e402c870f210",
"assets/assets/images/svgs/messages_square.svg": "4e8a1f27cfa284e691a325bc7f476e7e",
"assets/assets/images/svgs/prefetchimage.svg": "e04d851a3ee3a4843f4ca5323a730223",
"assets/assets/images/svgs/release_note.svg": "115e96e9e7808d243fd2f0c97ead0577",
"assets/assets/images/svgs/undraw_mobile_pay.svg": "e151927c9df86b95ee524bc0b5cf3e9f",
"assets/assets/images/svgs/dashboardsites.svg": "10c88a3a621c33cd0ab07acebdc46bce",
"assets/assets/images/svgs/shopping-bag.svg": "c819124c275b099e27c4bd37d7ed44e4",
"assets/assets/images/svgs/ircmainlogo.svg": "3f00b1fa830aae39921952dce76bb5f9",
"assets/assets/images/svgs/app_icon.svg": "ec327c57ef23791871e4c9bcd65f0ac7",
"assets/assets/images/svgs/foreground_banner.svg": "e4eff339921644a1b9d763e19928316d",
"assets/assets/images/svgs/game.svg": "94816832644db1a3858aceae8f4381c9",
"assets/assets/images/svgs/card-pos.svg": "67cb477e79fe36933ab01677b5392b38",
"assets/assets/images/svgs/fb_desc_background.svg": "9eb845b94c9ffe39a113b40cf9344b2f",
"assets/assets/images/svgs/wallet.svg": "657b343409a7e76399dfa3fe3fc468fb",
"assets/assets/images/svgs/wallet_charge_success.svg": "f6daeb3f37a3ba9cfd2918cab770f435",
"assets/assets/images/svgs/update.svg": "09d48ee48e7c4cd0efe808a7b8018e4c",
"assets/assets/images/svgs/wallet_charge_waiting.svg": "2daef954704d0b7bde440af6663e1663",
"assets/assets/images/svgs/dashboardcrypto.svg": "26e9d6c3d93f5074eaf82bb054e4be8f",
"assets/assets/images/svgs/buy-crypto.svg": "f416c308cc0f968ebebf933376698653",
"assets/assets/images/svgs/searchprofile.svg": "60b5285ba1d8d911cfecc47c4996f2b6",
"assets/assets/images/svgs/irctitlelogo.svg": "fd1959faaa58081ca2655323669ee04d",
"assets/assets/images/svgs/calling.svg": "1949a652ed373539888890955b85e95d",
"assets/assets/images/svgs/scrollable_background_banner.svg": "e9b6185eeb4dc281ed5cf0af093dcfc7",
"assets/assets/images/svgs/irclogodark.svg": "31bbf0f6991e0423672bd8500353ff12",
"assets/assets/images/svgs/wallet-profile-icon.svg": "3c03e6f6eeb35a720507f2409533bf5d",
"assets/assets/images/svgs/up_by_gateway_limit.svg": "853c6a6ba53d1c6dc9c294f26d68ca83",
"assets/assets/images/svgs/not_found.svg": "94fb008f692e1b0509b99ab71403bd6f",
"assets/assets/images/svgs/bookmarks.svg": "f762dd9bb585aec8111074a35b928fe6",
"assets/assets/images/svgs/wallet_charge_fail.svg": "032db3533b37e0a1e955532cd2ba6145",
"assets/assets/images/svgs/create_referral_code.svg": "920a3571a2f526964aa7a000d2331c90",
"assets/assets/images/svgs/messages_bubble.svg": "263391cca13542a02ab837b20df387de",
"assets/assets/images/svgs/paypal.svg": "9d837bb4b78e8cbd9a15d427a4e8bd82",
"assets/assets/images/svgs/virtual_card.svg": "f9c34306dd21490db1f62845e889e97a",
"assets/assets/images/svgs/emptyorders.svg": "7dedbb8d6fcfef68ecf6ee308dc24023",
"assets/assets/images/svgs/dashboardincome.svg": "c45757ead30b35a2900c812fac84cc8a",
"assets/assets/images/svgs/irclogo.svg": "0d616d1a7441689f7116e5f7bdd6028d",
"assets/assets/images/svgs/bitcoin-card.svg": "492cc13ac97be882062d0ebf1c8dbc09",
"assets/assets/images/svgs/selected-crypto.svg": "31357a38e6e2cbea7faa21e80961a6c7",
"assets/assets/images/svgs/gift_box.svg": "982052b1aab2f6a1e5cb3d39ebf73231",
"assets/assets/images/svgs/gift.svg": "e687103fd463d2646db6a2783a7390fc",
"assets/assets/images/svgs/profile.svg": "7ad3c3f6766f9320d47b4b9584979d2a",
"assets/assets/images/svgs/one_time_virtual_number.svg": "05248a9f039c1eee41a34cfd22c9d43a",
"assets/assets/images/svgs/buliding.svg": "7af70d856469d47c1500ae137ab0b701",
"assets/assets/images/svgs/bank_card_overlay.svg": "9e51fb565d0ad15980a80ac1348643ce",
"assets/assets/images/svgs/no_crypto_found.svg": "cb26adc686f176b60065e11b53102dc4",
"assets/assets/images/svgs/dashboardshopping.svg": "2f53ef165a3ad2c6d641d3ce75acd4dd",
"assets/assets/images/svgs/star_search.svg": "62c6582527f3e7d5a198be9993e5d63a",
"assets/assets/images/svgs/receive_gift.svg": "95d6507007ad5d68d0a6f8ed88689313",
"assets/assets/images/on_boarding_1.png": "c46a0f1347ed27e63c9e10c1336b5166",
"assets/assets/images/on_boarding_2.png": "603f94fbfdcca1e6fca35535058fed60",
"assets/assets/images/on_boarding_3.png": "e6641aec9f305acc970bb967a6645cf2",
"assets/assets/images/default.png": "83677c318ac2fb0b2d51b7f345b39f20",
"assets/assets/fonts/DMSans-Regular.ttf": "7c217bc9433889f55c38ca9d058514d3",
"assets/assets/fonts/DMSans-Medium.ttf": "24bfda9719b2ba60b94a0f9412757d10",
"assets/assets/fonts/DMSans-Bold.ttf": "b9cec5212f09838534e6215d1f23ed55",
"assets/assets/fonts/Estedad-SemiBold.ttf": "ff48875b22759e7c115386ab3e0c1e3a",
"assets/assets/fonts/Estedad-Medium.ttf": "a7b1473e887fb4a9adf676ab5b185093",
"assets/assets/fonts/Estedad-Regular.ttf": "8dcf404349d3f5dd9c309aa21b712f71",
"assets/assets/fonts/Estedad-Bold.ttf": "65475ae4ef29769e0b699fffe210c497",
"assets/assets/animations/intro_4.json": "6051b119b69d9ed8a6f48246f7e29c20",
"assets/assets/animations/loading.json": "8204daf7b3cccadccfd00eedddefb56e",
"assets/assets/animations/intro_3.json": "17b1c2cea381d954564408d7178500a9",
"assets/assets/animations/intro_2.json": "65e3bc9a2e5e9c3b1bf3d0b057135673",
"assets/assets/animations/intro_1.json": "513d787513cffeb0638aaae3e0a3a2f0",
"assets/assets/animations/text.json": "bf0d2b3bc8afe9c5eff21e5f28c60803",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
