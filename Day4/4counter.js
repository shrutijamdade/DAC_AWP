
// let is used to declare variable. :: let || const || var
let counter = 1;

function increment() {
  let counterEle = document.querySelector("#counterid");  //<div> copy honar

  counter = counter + 1;

  counterEle.innerHTML = counter; // div cha innerHtml access karto and tyachi value change karto
}

function decrement() {
  let counterEle = document.querySelector("#counterid");

  counter = counter - 1;

  counterEle.innerHTML = counter;
}