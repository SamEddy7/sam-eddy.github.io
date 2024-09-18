// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(135,206,235);
  randomSeed(5)
   fill(255,206,186);
  circle(75,75,400);
 
  noStroke();
  fill(255);


  circle(random(0,200)+mouseX,200,10);
  circle(random(0,400)+mouseY,200,10);
  circle(random(0,400)+mouseY,300,10);
  circle(mouseX,mouseY,20);
  
}




