let button = document.querySelector("button");
button.addEventListener("click", () => {
  let c1 = document.querySelector(".c1");
  c1.innerText = getRandomcolor1();
  let c2 = document.querySelector(".c2");
  c2.innerText = getRandomcolor2();
  let c3 = document.querySelector(".c3");
  c3.innerText = getRandomcolor3();
  let c4 = document.querySelector(".c4");
  c4.innerText = getRandomcolor4();
  let c5 = document.querySelector(".c5");
  c5.innerText = getRandomcolor5();

  let box1 = document.querySelector(".box1");
  box1.style.backgroundColor = getRandomcolor1();
  let box2 = document.querySelector(".box2");
  box2.style.backgroundColor = getRandomcolor2();
  let box3 = document.querySelector(".box3");
  box3.style.backgroundColor = getRandomcolor3();
  let box4 = document.querySelector(".box4");
  box4.style.backgroundColor = getRandomcolor4();
  let box5 = document.querySelector(".box5");
  box5.style.backgroundColor = getRandomcolor5();
});

function getRandomcolor1() {
  let red1 = Math.floor(Math.random() * 255);
  let green1 = Math.floor(Math.random() * 255);
  let blue1 = Math.floor(Math.random() * 255);

  let color1 = `rgb(${red1},${green1},${blue1})`;

  return color1;
}
function getRandomcolor2() {
  let red2 = Math.floor(Math.random() * 255);
  let green2 = Math.floor(Math.random() * 255);
  let blue2 = Math.floor(Math.random() * 255);

  let color2 = `rgb(${red2},${green2},${blue2})`;

  return color2;
}
function getRandomcolor3() {
  let red3 = Math.floor(Math.random() * 255);
  let green3 = Math.floor(Math.random() * 255);
  let blue3 = Math.floor(Math.random() * 255);

  let color3 = `rgb(${red3},${green3},${blue3})`;

  return color3;
}
function getRandomcolor4() {
  let red4 = Math.floor(Math.random() * 255);
  let green4 = Math.floor(Math.random() * 255);
  let blue4 = Math.floor(Math.random() * 255);

  let color4 = `rgb(${red4},${green4},${blue4})`;

  return color4;
}
function getRandomcolor5() {
  let red5 = Math.floor(Math.random() * 255);
  let green5 = Math.floor(Math.random() * 255);
  let blue5 = Math.floor(Math.random() * 255);

  let color5 = `rgb(${red5},${green5},${blue5})`;

  return color5;
}

document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    let c1 = document.querySelector(".c1");
    c1.innerText = getRandomcolor1();
    let c2 = document.querySelector(".c2");
    c2.innerText = getRandomcolor2();
    let c3 = document.querySelector(".c3");
    c3.innerText = getRandomcolor3();
    let c4 = document.querySelector(".c4");
    c4.innerText = getRandomcolor4();
    let c5 = document.querySelector(".c5");
    c5.innerText = getRandomcolor5();

    let box1 = document.querySelector(".box1");
    box1.style.backgroundColor = getRandomcolor1();
    let box2 = document.querySelector(".box2");
    box2.style.backgroundColor = getRandomcolor2();
    let box3 = document.querySelector(".box3");
    box3.style.backgroundColor = getRandomcolor3();
    let box4 = document.querySelector(".box4");
    box4.style.backgroundColor = getRandomcolor4();
    let box5 = document.querySelector(".box5");
    box5.style.backgroundColor = getRandomcolor5();
  }
});
