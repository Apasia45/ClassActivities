
// add an event listener to the dog picture that listens for a "click" and gives an alert
const pic = document.querySelector("#dog-picture");

const clickCallback = () => {
  alert("You clicked it!")
};

pic.addEventListener("click", clickCallback)


// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
const handleMouseover = (event) => {
  const target = event.target;
  target.style.backgroundColor = "pink";
};

const allItems = document.querySelectorAll("li");
for (let i of allItems) {
  i.addEventListener("mouseover", handleMouseover);
}

// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
window.addEventListener("keypress", (event) => {
  console.log(event);
  alert(event.key);
})
