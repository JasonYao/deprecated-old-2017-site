---
---
'use strict';

let urlsToCache = [];

// Cache post urls
{% for post in site.posts limit:10 %}
    urlsToCache.push("{{ post.url }}");
{% endfor %}

// Cache project urls
{% for project in site.projects limit:10 %}
    urlsToCache.push("{{ project.url }}");
{% endfor %}

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
            return caches.match('/offline/');
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
            return caches.match('/offline/');
        })
    );
});