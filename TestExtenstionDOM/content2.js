// Listen for messages
console.log('test from contetn');

function createTextBox(domContent){
   console.log('test create');
   console.dir(document);
   console.dir(domContent);
  // let elem = document.body;
  let elem = document.getElementById('ticket-subject');
   let textBox = document.createElement('input');
   textBox.classList.add('myTextBox');
   console.dir(elem);
   elem.appendChild(textBox);

}

function addStyle(css) {
  var head, style;
  head = document.getElementsByTagName("head")[0];
  if (!head) {
      return;
  }
  style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = css;
  head.appendChild(style);
}
addStyle('.myTextBox' +  ' {visibility: visible; position: absolute; z-index:10; background-color: azure;}');
createTextBox();
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        sendResponse(document);
    }
});