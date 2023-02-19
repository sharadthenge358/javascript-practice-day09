document.getElementById("demo").innerHTML = "sharad";
let str = "Apple,Banana,Kiwi,Banana";
const bananaindex = str.indexOf("Banana",15);
console.log("position",bananaindex);
const newstring = str.slice(bananaindex);
console.log("New string after slice",newstring);
// the search method cannot take second start position argument
const searchindex = str.search("Banana",);
console.log("search method index",searchindex);
// match functions returns an array
// by adding "g" it means global search it gives capital and small letters in console 
let text2 = "The rain in SPAIN stays mainly in the plane";
const matchReturnValue = text2.match(/ain/gi);
console.log("returned value",matchReturnValue);
// include function returns bolean function ,true or false
let text = "Hello world,welcome to the universe";
const includereturnValue=text.includes("world");
console.log("includereturnValue",includereturnValue);