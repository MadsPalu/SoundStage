var video = document.getElementById("musicVideo");
var playBtn = document.getElementById("playBtn");
function playVideo() {
  video.style.display = "block";
  playBtn.style.display = "none";
  video.play();
}

//Function found from https://codepen.io/nanonansen/pen/oRWmaY?fbclid=IwAR0v4j89Lchs3tZjg9xSQ3qQv2f_gK4ZMOFOYqv4Sz6H0wlEzuC_7HxCZkg
//Bruges til at få billede til at følge musen på skærmen.
const ball = document.querySelector("div.ball");

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.01;


function animate() {

  let distX = mouseX - ballX;
  let distY = mouseY - ballY;


  ballX = ballX + (distX * speed);
  ballY = ballY + (distY * speed);

  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";

  requestAnimationFrame(animate);
}

animate();

document.addEventListener("mousemove", function (event) {
  mouseX = event.pageX;
  mouseY = event.pageY;
})