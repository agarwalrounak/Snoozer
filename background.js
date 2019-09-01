//function onError(error){
//    console.log(error);
//}
//var inputTitle = document.querySelector('.new-note input');
//var d;
//function onGot(item){
//   d = item;
//}

var e = "hello";

//let timestore = browser.storage.local.get();
//timestore.then(onGot,onError);
//
//
//localStorage.setItem('myCat', 'Tom');

function getCurrentWindowTabs() {
  return browser.tabs.query({currentWindow: true});
}
var dis="";
getCurrentWindowTabs().then((tabs) => {
      for (var tab of tabs) {
		  //alert(tab);
        var r = localStorage.getItem(tab.url);
		//alert(r);
		if(r!==null){
		    var curValue = r;
            dis = dis + curValue;
		}
      }
    });

var cat=localStorage.getItem('myCat');
if(cat===null){
	cat="nulll";
}
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
        "message":"l"
    });
});

browser.browserAction.onClicked.addListener(()=> {
    var clearing = browser.notifications.clear(cakeNotification);
    clearing.then(() => {
        console.log("cleared");
    });
});