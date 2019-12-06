// Regex-pattern to check URLs against. 
// It matches URLs like: http[s]://[...]stackoverflow.com[...]
var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?stackoverflow\.com/;

// A function to use as callback
function doStuffWithDom(domContent) {
    console.log('I received the following DOM content:\n' + domContent);
	console.dir(domContent);
}

// When the browser-action button is clicked...
chrome.browserAction.onClicked.addListener(function (tab) {
    // ...check the URL of the active tab against our pattern and...
    if (true) {
        // ...if it matches, send a message specifying a callback too
		console.log('tag');
		chrome.tabs.executeScript(null, {file: 'content.js'});
		console.dir(tab);
        chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
		    chrome.tabs.executeScript(
			//{ code: '(' + modifyDOM + ')();},
			{ code: 'console.log(`myscript`);'} ,
			(results) => {console.log('Popup script:')
        console.log(results[0]); });
    }
});
 let mDocument;

   function modifyDOM() {
	   
        //You can play with your DOM here or check URL against your regex
        console.log('Tab script:');
        console.log(document.body);
		mDocument=document;
		addStyle('.myTextBox' +  ' {visibility: visible; position: absolute; z-index:10; background-color: azure;}');
		createTextBox(null);
        return document.body.innerHTML;
    }
	
	function createTextBox(domContent){
   console.log('test create');
   console.dir(mDocument);
   console.dir(domContent);
  // let elem = document.body;
  let elem = mDocument.getElementById('ticket-subject');
   let textBox = mDocument.createElement('input');
   textBox.classList.add('myTextBox');
   console.dir(elem);
   elem.appendChild(textBox);

}
function addStyle(css) {
  var head, style;
  head = mDocument.getElementsByTagName("head")[0];
  if (!head) {
      return;
  }
  style = mDocument.createElement("style");
  style.type = "text/css";
  style.innerHTML = css;
  head.appendChild(style);
}
