displayMessage = (msg) => {
        var paragraph = document.getElementById('messages');
        paragraph.appendChild(document.createTextNode(msg));
        paragraph.appendChild(document.createElement("br"));
}

if('serviceWorker' in navigator) {

  Notification.requestPermission();
  displayMessage('Service Worker supported');

  navigator.serviceWorker
           .register('sw.js', { scope: '/' })
           .then((reg) => {
               console.log('Service Worker Registered');
               displayMessage('Service Worker Registered');
           }).catch((error) => {
               console.log('Registration failed with ' + error);
                 displayMessage('Registration failed with ' + error);
           });
        
  navigator.serviceWorker
        .ready
        .then((reg) => {
                displayMessage('sw ready');
                reg.showNotification('sw ready');
        });
} else {
        console.log('service worker not available');
        displayMessage('service worker not available');
}


