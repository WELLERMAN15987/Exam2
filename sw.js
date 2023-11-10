self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-cache').then(function(cache) {
        return cache.addAll([
          './',
          './Img/',
          './Js/main.js'
          //
        ]);
      })
    );
  });
  
