// create a new unordered list (ul) element
const UnorderedList = document.createElement("ul");
// remove the paragraph element in the nav-bar
const pElement = document.querySelector("nav").removeChild(p);
// add your new ul element to the nav-bar
const newUL = document.querySelector("nav").appendChild(UnorderedList);
// create two new list item (li) elements, and add some text to them
const New1 = document.createElement("li");
New1.textContent = "some text";

const new2 =document.createElement("li");
new2.textContent = "bingbong";

// add the li elements to the ul in the nav-bar
UnorderedList.appendChild(New1);
UnorderedList.appendChild(new2);
