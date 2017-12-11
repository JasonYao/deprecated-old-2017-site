'use strict';

let urlsToCache = [];

// Caches the offline url
urlsToCache.push("https://www.JasonYao.com/offline/");

// Caches some required AMP libraries
let amp_libraries = [
    "https://cdn.ampproject.org/v0/amp-analytics-0.1.js",
    "https://cdn.ampproject.org/v0/amp-iframe-0.1.js",
    "https://cdn.ampproject.org/v0/amp-image-lightbox-0.1.js",
    "https://cdn.ampproject.org/v0/amp-social-share-0.1.js",
    "https://cdn.ampproject.org/v0/amp-sidebar-0.1.js",
    "https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js",
    "https://cdn.ampproject.org/v0/amp-accordion-0.1.js",
    "https://cdn.ampproject.org/shadow-v0.js"
];

amp_libraries.forEach(function (amp_library) {
    urlsToCache.push(amp_library);
});

// Cache latest 10 post urls

    urlsToCache.push("https://www.JasonYao.com/blog/2017/05/22/a-canadian-existential-crisis-introduction/");


// Caches latest 10 amp post urls

    urlsToCache.push("https://www.JasonYao.com/amp/blog/2017/05/22/a-canadian-existential-crisis-introduction/");


// Cache latest 10 project urls

    urlsToCache.push("https://www.JasonYao.com/projects/2017/05/30/gomark-a-github-markdown-renderer/");


// Cache latest 10 project urls

    urlsToCache.push("https://www.JasonYao.com/amp/projects/2017/05/30/gomark-a-github-markdown-renderer/");


// To invalidate service worker caches, just increment the semver-compliant cache name
const CACHE_NAME = 'jason-yao-cache-v0.0.0';

// Installation event listener
self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetching response event listener
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.match(event.request).then(function(response) {
                return response || fetch(event.request).then(function(response) {
                        cache.put(event.request, response.clone());
                        return response;
                    });
            });
        }).catch(function() {
            // Fallback to the offline page if not available in the cache.
            return caches.match("https://www.JasonYao.com/offline/");
        })
    );
});

// Fetching event listener
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.open(CACHE_NAME).then(function(cache) {
            return fetch(event.request).then(function(response) {
                cache.put(event.request, response.clone());
                return response;
            });
        }).catch(function() {
            // Fallback to the offline page if not available in the cache.
            return caches.match("https://www.JasonYao.com/offline/");
        })
    );
});
