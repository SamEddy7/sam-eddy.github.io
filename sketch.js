// Coordinate System
// Sam Eddy
// Sept 11. 2024
// looking at hoe coordinates work in p5.js



function setup() {
  print("setup runs once, at the start.")
  createCanvas(500, 800);
}

function draw(){
  background(220);
  drawCircles();
}

function drawCircles() {
  
  fill(100,200,255);
  circle(0,0,50);

  fill(204,102,0);
  circle(100,-20,50);

  fill(50,1,0)
  circle(500,0,50)

 
}
drawCircles()