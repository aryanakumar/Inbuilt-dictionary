console.log("running");

window.addEventListener('mouseup', mousedUpped);


function mousedUpped(){
	console.log('word selected');
	let selectedText = window.getSelection().toString();
	console.log(selectedText);
	let msg ={
		txt:selectedText
	}
	
	chrome.runtime.sendMessage(msg);
	
}