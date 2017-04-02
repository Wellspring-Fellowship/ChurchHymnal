/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["CNAME","9324ae6bee0d5b570f935ea536d76b1a"],["asset-manifest.json","73948761b61315c5d7cba9b6352b0728"],["favicon.ico","fd73a6eb26a08ee46e7fd3cc34e7f6bf"],["index.html","b3c8288d0924a29f75db0a21ab7cca7e"],["songs/alive-alive/index.html","3dd5da36f90479e801090db7559dae67"],["songs/amazing-grace/index.html","18120fe8238c584f505f416f4fca27c3"],["songs/amazing-love/index.html","d2eb8388d01c70f69215c1a3116b14c1"],["songs/and-can-it-be-that-i-should-gain/index.html","133579e51a1cc0ded11c9ac48d9002e9"],["songs/are-you-washed-in-the-blood/index.html","5a9f5747dd7dba39ceefdd931bb0007d"],["songs/as-the-deer/index.html","ea85b92b5ee37554b6442aa28718cfc3"],["songs/at-calvary/index.html","9022c432860ed8045a83a9f4a58d3904"],["songs/be-thou-my-vision/index.html","9a593b4dab6a61818f2921f073d6fe05"],["songs/because-he-lives/index.html","804b0e6f8e2811dd59f700efcde669e6"],["songs/blessed-be-the-name/index.html","0118c167528d7d316d88b4d3618586d3"],["songs/christ-arose/index.html","4659300feb6ac4d6fd16cd1a423766d9"],["songs/come-just-as-you-are/index.html","6ad01388cf0d6ec709318d60a8ad50d7"],["songs/count-your-blessings/index.html","b38db144d3fb304830f33d605e3d4e49"],["songs/down-at-the-cross/index.html","1004abcd84461e213621e138f70015b6"],["songs/down-in-my-heart/index.html","54c37345b664d762b20ee269511e0ef5"],["songs/free-from-the-law-oh-happy-condition/index.html","7d078327156cc41e6433131c073abaec"],["songs/give-me-oil-in-my-lamp/index.html","336ad1943e762858c149d125a8001319"],["songs/god-owns-colorado-and-me/index.html","3640732b5f334a35c02e358bde3ae09e"],["songs/hark-the-herold-angels-sing/index.html","8be9be752c2e250917e7e0334c3ffcd7"],["songs/have-thine-own-way-lord/index.html","9603c066b53842aae1777930640331e8"],["songs/he-keeps-me-singing/index.html","18a5a7669cbd06169f01fde5a356be70"],["songs/he-lives/index.html","379c0c07c652b5f0692cd7af4350df88"],["songs/he-s-got-the-whole-world-in-his-hands/index.html","4b2908636104ee81a5d0953b9dae212d"],["songs/he-touched-me/index.html","536796edda6722fb832c5652e0ad8920"],["songs/holiness/index.html","fd4437d26710e169b836938c7222029c"],["songs/how-great-is-our-god/index.html","bd4c5fe8587d5715fd7f433e9a6df5db"],["songs/how-great-thou-art/index.html","e0b3dff54d2f6fd09bccddc05be0be60"],["songs/i-love-to-tell-the-story/index.html","8761408535070964869d7f62cb22967b"],["songs/i-need-thee-ever-hour/index.html","0d71f945c29b87cfb6a93ea8c3eb114b"],["songs/i-will-sing-of-my-redeemer/index.html","2a107575f82b02b1d338f64734f85c86"],["songs/i-will-sing-of-the-mercies/index.html","6697ab1bd5078fb40597bde93dd2891f"],["songs/imortal-invisible/index.html","5d6ccdcbb597c6198693e8b72824b172"],["songs/jesus-jesus-jesus-in-the-morning/index.html","ee528341b675347663840a8d482ae74d"],["songs/jesus-loves-me/index.html","45fbbaf49c7d249fb46f9d93e8b6a854"],["songs/jesus-loves-the-little-children/index.html","c5b7d2cb597a5d0bd50a3bdc05992fb9"],["songs/jesus-paid-it-all/index.html","4b406f51bf5559dd41cece8b98f2efcd"],["songs/joy-to-the-world/index.html","9946b5deeb827a3ccb2daeba01637435"],["songs/joyful-joyful-we-adore-thee/index.html","a542234ccbc06b4cb511f5fd289f3d25"],["songs/just-as-i-am/index.html","8f279cc9eeed68c25ba0174fe4294764"],["songs/just-like-you/index.html","7f5c3955a05b69b8dd646415d8c70254"],["songs/leaning-on-the-everlasting-arms/index.html","61c288ea1e2778d94ac5f0f68154d74c"],["songs/lord-i-lift-your-name-on-high/index.html","3bef23fa564cbc72ccb219e4189d6015"],["songs/love-lifted-me/index.html","ad121a7ed8e8d89a3ea566ad106ab166"],["songs/majesty/index.html","ebc0a3f5d0af3a81e2214a922b28667d"],["songs/nothing-but-the-blood/index.html","9e1a0c00a87c81a4d044176d441b3f09"],["songs/oh-how-he-loves-you-and-me/index.html","945f59a01d57b2843103feff52c0df53"],["songs/peace-like-a-river/index.html","2ab01fb076a0a087452dddc167a51ecf"],["songs/people-need-the-lord/index.html","720c045706a4345028442bdb2091d87a"],["songs/redeemed/index.html","9e523ca5e72c39ac428fb77edc8a01f3"],["songs/righteous-concern/index.html","9449737158499e3f8c6bb02912f89b0e"],["songs/rock-of-ages/index.html","7b042730017fb0b244f546a27b647e3d"],["songs/sanctuary/index.html","913858d29044b68c239ecc0be5e30465"],["songs/seek-ye-first/index.html","4191ee2d3c09a898854374f5e036565d"],["songs/send-the-light/index.html","d738db408eb685729d5b5306538c82f4"],["songs/shall-we-gather-at-the-river/index.html","482b14e9eb43f72bc38e8cc1514c5a86"],["songs/shine-jesus-shine/index.html","e4c8124c4d07d6cc789a0c8ada7e4e41"],["songs/shout-to-the-lord/index.html","8c061e394415d85ce778f56df26d0fc9"],["songs/silver-and-gold-have-i-none/index.html","54b2c10df3e21d36fd4f906d2c0d597b"],["songs/stand-up-stand-up-for-jesus/index.html","f6f667e56cc1f5ac176cd9f5fc3da86c"],["songs/standing-on-the-promises/index.html","4eb8d4cde1387733b7a05a7251bcef2d"],["songs/sweet-by-and-by/index.html","f0498ac06374f4b02ec7e0ab35d346e6"],["songs/take-my-life-and-let-it-be/index.html","5c96739b5817a70233438efffed5974f"],["songs/the-old-rugged-cross/index.html","6c3843fac88e2e79fbfe2ecb17d02931"],["songs/the-solid-rock/index.html","bbb9c8ae3709e70181294cce63f0f1c5"],["songs/there-is-a-fountain/index.html","c67c9dc23e4766bae296daaa8be5b5ea"],["songs/there-is-power-in-the-blood/index.html","62c74c3c14d9cffd3ba062eeb6b725d4"],["songs/this-is-my-commandment/index.html","6d90dbeacafd400829e9965b22760740"],["songs/this-is-the-day/index.html","d037c2ff2c4b24f0d0347fb8b2bd8685"],["songs/this-little-light-of-mine/index.html","3c245760ac0c35896f25c4bd9051bf60"],["songs/to-god-be-the-glory/index.html","2a5570f66b41dc5f75608972ca724f04"],["songs/trust-and-obey/index.html","a750f733ed838deaaacad2ed6c1a5b4d"],["songs/victory-in-jesus/index.html","368e3fe889c1aba6af1decbf9c3df76b"],["songs/we-re-marching-to-zion/index.html","9ec68ff60a79a9843d3b3c4cdbe1bdea"],["songs/we-three-kings/index.html","42bf9645cc91c9087369d64e9864ca2d"],["songs/what-a-friend-we-have-in-jesus/index.html","f6bf5daeab2e43e84feae1943cfb57c9"],["songs/when-the-roll-is-called-up-yonder/index.html","b81f05a72435cfec23634294ede3ae2c"],["songs/wonderful-grace-of-jesus/index.html","d823e6b2477d05f460ba5142bdc08d18"],["songs/wonderful-words-of-life/index.html","0e65668f7e3d6bf4bc7789c063e1738a"],["static/js/main.f0e99062.js","8fe9a7608154a77e33449936795ca2e5"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







