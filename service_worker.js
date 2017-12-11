---
---
'use strict';

let urlsToCache = [];

// Caches the offline url
urlsToCache.push("{{ site.baseurl | prepend: site.url }}/offline/");

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
{% for post in site.posts limit:10 %}
    urlsToCache.push("{{ post.url | prepend: site.baseurl | prepend: site.url }}");
{% endfor %}

// Caches latest 10 amp post urls
{% for amp_post in site.amp_posts limit:10 %}
    urlsToCache.push("{{ amp_post.url | prepend: site.baseurl | prepend: site.url }}");
{% endfor %}

// Cache latest 10 project urls
{% for project in site.projects limit:10 %}
    urlsToCache.push("{{ project.url | prepend: site.baseurl | prepend: site.url }}");
{% endfor %}

// Cache latest 10 project urls
{% for amp_project in site.amp_projects limit:10 %}
    urlsToCache.push("{{ amp_project.url | prepend: site.baseurl | prepend: site.url }}");
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
            return caches.match("{{ site.baseurl | prepend: site.url }}/offline/");
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
            return caches.match("{{ site.baseurl | prepend: site.url }}/offline/");
        })
    );
});
