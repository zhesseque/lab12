console.log("Hello, World!");
let arr = document.getElementsByTagName("h1");
let h = arr[0]
h.innerHTML = "Lab12 Assignment";
h.style.color = "blue";

var hr = document.createElement("hr");
document.body.appendChild(hr);

let h2 = document.createElement("h2");
h2.innerText = "Task"
h2.style.color = "red";
document.body.appendChild(h2);

let p1 = document.createElement("p");
p1.innerText = "In this task you have to reproduce this HTML page as is using <strong> only </strong> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
document.body.appendChild(p1);
console.log(document);

let ul1 = document.createElement("ul");
let li1 = document.createElement("li");

li1 = document.createElement("li");
li1.innerHTML = "find elements in the DOM (<b>5 points</b>);";
li1.style.color = "green";
ul1.appendChild(li1);

li1 = document.createElement ("li");
li1.innerHTML = "create/add/remove elements (<b>5 points</b>);";
li1.style.color = "purple";
ul1.appendChild(li1);

li1 = document.createElement ("li");
li1.innerHTML = "change content of the elements (<b>5 points</b>);";
li1.style.color = "green";
ul1.appendChild(li1);

li1 = document.createElement ("li");
li1.innerHTML = "change styles of the elements (<b>5 points</b>);";
li1.style.color = "purple";
ul1.appendChild(li1);

li1 = document.createElement ("li");
li1.innerHTML = "change attributes of the elements (<b>5 points</b>);";
li1.style.color = "green";
ul1.appendChild(li1);

li1 = document.createElement ("li");
li1.innerHTML = "change classes of the elements (<b>5 points</b>);";
li1.style.color = "purple";
ul1.appendChild(li1);
document.body.appendChild(ul1);

let p2 = document.createElement ("p");
p2.innerHTML = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this ";
let a = document.createElement("a");
a.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12");
a.innerText = "link.";
p2.appendChild(a);
document.body.appendChild(p2);

let hr1 = document.createElement("hr");
document.body.appendChild(hr1);

let h22 = document.createElement("h2");
h22.innerText = "Submission";
h22.style.color = "red";
document.body.appendChild(h22);

let p3 = document.createElement("p");
p3.innerHTML = "To submit your work, follow these instructions:";
document.body.appendChild(p3);

let ul2 = document.createElement("ul");
let li2 = document.createElement("li");

li2 = document.createElement("li");
li2.innerHTML = "Create a new repository on Github, named <b>lab12</b> (<b>1 point</b>).";
li2.style.color = "green";
ul2.appendChild(li2);

li2 = document.createElement("li");
li2.innerHTML = "Clone this repository to your local machine and work inside it.";
li2.style.color = "purple";
ul2.appendChild(li2);

li2 = document.createElement("li");
li2.innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one &lth1&gt tag with ''Hello, World!'' message (<b>1 point</b>)."
li2.style.color = "green";
ul2.appendChild(li2);

li2 = document.createElement ("li");
li2.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>)."
li2.style.color = "purple";
ul2.appendChild(li2);

li2 = document.createElement ("li");
li2.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section)."
li2.style.color = "green";
ul2.appendChild(li2);

li2 = document.createElement ("li");
li2.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>)."
li2.style.color = "purple";
ul2.appendChild(li2);

li2 = document.createElement ("li");
li2.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>).";
li2.style.color = "green";
ul2.appendChild(li2);

document.body.appendChild(ul2);

let hr2 = document.createElement("hr");
document.body.appendChild(hr2);