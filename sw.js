
console.log('Service worker register event listeners...');
self.registration.showNotification('Service worker register event listeners...');

self.addEventListener('install', (event) => {
  event.waitUntil( () => {
        console.log('Service worker installed!');
  });
});

self.addEventListener('activate', (event) => {
  event.waitUntil( () => {
        console.log('Service worker activated!');
        self.registration.showNotification('Service worker activated!');
  });
});

self.addEventListener('fetch', (event) => {
  event.waitUntil( () => {
        console.log('Service worker fetching some Data ... hell yes!');
        self.registration.showNotification('Service worker fetching some Data ... hell yes!');
  });
});

self.addEventListener('message', (event) => {
  event.waitUntil( () => {
        console.log('Service worker Message Event');
        self.registration.showNotification('Service worker Message Event');
  });
});

 setTimeout(() => {
        console.log('Service worker timeout');
        self.registration.showNotification('sw timeout...');
 }, 3000);
