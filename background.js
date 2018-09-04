console.log("background is running");

chrome.runtime.onMessage.addListener(gotMessage);

window.gopal = "";

function gotMessage(message, sender, sendResponse){
console.log(message.txt);}
window.word = message.txt
