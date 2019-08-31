function onError(error){
    console.log(error);
}

var d;
function onGot(item){
    d = item;
}

var e = "hello";

let timestore = browser.storage.local.get("a");
timestore.then(onGot,onError);
//
//

 var cakeNotification = "cake-notification";

/*

CAKE_INTERVAL is set to 6 seconds in this example.
Such a short period is chosen to make the extension's behavior
more obvious, but this is not recommended in real life.
Note that in Chrome, alarms cannot be set for less
than a minute.

*/
var CAKE_INTERVAL = 0.1;

browser.alarms.create("", {periodInMinutes: CAKE_INTERVAL});

browser.alarms.onAlarm.addListener(function(alarm) {
    browser.notifications.create(cakeNotification, {
        "type": "basic",
        "iconUrl": browser.runtime.getURL("icons/cake-96.png"),
        "title": "Time for cake!",
        "message":e
    });
});

browser.browserAction.onClicked.addListener(()=> {
    var clearing = browser.notifications.clear(cakeNotification);
    clearing.then(() => {
        console.log("cleared");
    });
});