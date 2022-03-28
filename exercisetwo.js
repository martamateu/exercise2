
var aNewBodyElement = document.createElement("body");
aNewBodyElement.id = "newBodyElement";
document.body = aNewBodyElement;
console.log(document.body.id); // "newBodyElement"

aNewBodyElement.innerHTML = "<img src=foto.png > </br>"


var title = document.createElement("div");
var node = document.createElement("div");
var btn = document.createElement("button");

// add menu item
aNewBodyElement.appendChild(title);


title.innerHTML = "<h1> TITLE</h1>";
title.id = 'title';
node.id = 'box';
btn.id = 'btn';

title.append(node);
node.appendChild(btn);



var a = document.createElement('a');
var linkText = document.createTextNode("Call to action");
a.appendChild(linkText);
a.title = "Call to action";
a.href = "https://www.spanish.hostelworld.com/pwa/wds";
btn.appendChild(a);

