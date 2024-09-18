// events (mouse/keyboard)
// Sam Eddy
// sept 12 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tSize = 45;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  // if(mouseIsPressed) tSize = random(20,80);
  textSize(tSize);
  let position = mouseX + ", " + mouseY;
  text(position, mouseX, mouseY);
}

function mousePressed(){
  tSize = random(20, 200);

}