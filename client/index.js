// checking is Browser supports the Service Worker..
if ('serviceWorker' in navigator) {

    console.log('Service Worker is supported');

    // if service worker supported then register my service worker
    navigator.serviceWorker.register('firebase-messaging-sw.js').then(function (reg) {
        console.log('Successfully Register :^)', reg);

        reg.pushManager.subscribe({
            userVisibleOnly: true
        }).then(function (subscription) {
            console.log('subscription:', subscription.toJSON());
            // GCM were used this endpoint
            console.log('endpoint:', subscription.endpoint);
        });

    }).catch(function (error) {
        console.log('SW Registration Failed: :^(', error);
    });

}