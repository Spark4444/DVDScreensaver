// letaibles init
const DVD = document.querySelector(".DVD");
let x = 0;
let y = 0;
// Speed
let xSpeed = getRandomNumber(0.25,0.75);
let ySpeed = getRandomNumber(0.25,0.75);
let colorArray = ["aqua", "blue", "fuchsia", "gray", "green", 
"lime", "maroon", "navy", "olive", "orange", "purple", "red", 
"silver", "teal", "white", "yellow"];

// Sets a random first color for the DVD logo
DVD.style.color = `${GetRandomArray(colorArray)}`;

// Function that reverses a number
function reverse(num){
    num -= num + num;
    return num;
}

// Chooses a random sign for a number and returns it
function randomSign(num){
  if(getRandomNumber(0,1) == 1){
      return reverse(num);
  }
  else{
    return num;
  }
}

xSpeed = randomSign(xSpeed);
ySpeed = randomSign(ySpeed);

// Animation
let animation = setInterval(() => {

  if (y <= -48.5) {
    ySpeed = reverse(ySpeed);
    DVD.style.color = `${GetRandomArray(colorArray)}`;
  }

  if (y >= 48) {
    ySpeed = reverse(ySpeed);
    DVD.style.color = `${GetRandomArray(colorArray)}`;
  }
  
  if (x >= 48) {
    xSpeed = reverse(xSpeed);
    DVD.style.color = `${GetRandomArray(colorArray)}`;
  }

  if (x <= -48) {
    xSpeed = reverse(xSpeed);
    DVD.style.color = `${GetRandomArray(colorArray)}`;
  }

  x += xSpeed;
  y += ySpeed;

  DVD.style.left = `${x}%`;
  DVD.style.top = `${y}%`;

}, 25);