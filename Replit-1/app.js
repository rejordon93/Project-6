// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function allLaps() {
//   let fullLapTime = lap1 + lap2 + lap3;
//   console.log(fullLapTime);
// }

// allLaps();

let saveEl = document.querySelector("#save-el");
let CountEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += +1;
  CountEl.innerText = count;
}

function save() {
  let dash = count + " - ";
  saveEl.textContent += dash;
  CountEl.textContent = 0;
  count = 0;
}
