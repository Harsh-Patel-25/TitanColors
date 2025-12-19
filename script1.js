// We can also do this with loop


// Select button
let button = document.querySelector("button");

// Generate random RGB color
function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

// Apply colors to text and boxes
function applyColors() {
  for (let i = 1; i <= 5; i++) {
    let color = getRandomColor();

    document.querySelector(`.c${i}`).innerText = color;
    document.querySelector(`.box${i}`).style.backgroundColor = color;
  }
}

// Button click event
button.addEventListener("click", applyColors);

// Space key event
document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    applyColors();
  }
});
