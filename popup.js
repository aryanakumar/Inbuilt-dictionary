chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
console.log(message.txt);

var apikey= "api key";

var main1 = "https://api.wordnik.com/v4/word.json/"

var word = message.txt
var main2= "/definitions?limit=1&includeRelated=false&useCanonical=false&includeTags=false&api_key="

var url =  main1+word+main2+ apikey;
console.log(url);

	$.getJSON(url, function(json) {
	console.log(json[0].text);
	
document.getElementById("gg").innerHTML = json[0].text
	})
}