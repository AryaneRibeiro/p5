function setup() {
  createCanvas(600, 600);
}

function draw() {
  stroke("#222");
  fill("#333");
  
  if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 35);
  }
  
}
