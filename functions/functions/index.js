const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloWorld = functions.https.onRequest((request, response) => {
    if (request.body && request.body.token) {
        const payload = {
            notification: {
                title: request.body.title,
                body: request.body.message,
                status: 'Wohoo its work',
                click_action: request.body.url || 'https://example.com'
            }
        }
        admin.messaging().sendToDevice(request.body.token, payload);
    }
    response.send("Hello from Firebase");
});

exports.sendNotification = functions.database.ref('/users/{chatId}')
.onWrite((event) => {
    const payload = {
        notification: {
            title: 'New Message from',
            body: 'New Message Body',
            status: 'Wohoo its work',
            click_action: 'https://testing-project-development.firebaseapp.com'
        }
    }

    console.info(payload)

    return admin.database().ref(`/users/${event.userId}`).once('value').then((data) => {

        if (!data.val()) return;

        const snapshot = data.val();
        const token = snapshot.token;

        return admin.messaging().sendToDevice(event.token, payload);
    });
})


exports.users = functions.https.onRequest((request, response) => {
    if(request.method == 'GET') {

        response.json({err: null, data: [{id: 1, name: 'John'}, 
        {id: 2, name: 'Amenda'},
         {id: 3, name: 'foo'}, 
        {id: 4, name: 'bar'}]});
    } 

    // if( 'POST')
});

exports.test = functions.https.onRequest((request, response) => {
    const method = request.method;
    response.send('Requested Method ' + method);
});
exports.test2 = functions.https.onRequest((request, response) => {
    const method = request.method;
    response.send('Requested Method test 2 ' + method);
});