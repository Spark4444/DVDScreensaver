//Varaibles init
const placeHolder = document.querySelector(".placeHolder");
let x = 0;
let y = 0;
let xSpeed = 0.25;
let ySpeed = 0.25;
var colorArray = ['aqua', 'blue', 'fuchsia', 'gray', 'green', 
'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
'silver', 'teal', 'white', 'yellow'];

//Function that reverses an int
function reverse(int){
    int -= int + int;
    return int;
}

//Animation
let animation = setInterval(() => {

  if (y <= -24.5) {
    ySpeed = reverse(ySpeed);
    placeHolder.style.color = `${GetRandomArray(colorArray)}`;
  }

  if (y >= 24) {
    ySpeed = reverse(ySpeed);
    placeHolder.style.color = `${GetRandomArray(colorArray)}`;
  }
  
  if (x >= 44) {
    xSpeed = reverse(xSpeed);
    placeHolder.style.color = `${GetRandomArray(colorArray)}`;
  }

  if (x <= -44.5) {
    xSpeed = reverse(xSpeed);
    placeHolder.style.color = `${GetRandomArray(colorArray)}`;
  }

  x += xSpeed;
  y += ySpeed;

  placeHolder.style.left = `${x}vw`;
  placeHolder.style.top = `${y}vw`;

}, 25);