var googleMap;
var d;

function setup() {
  createCanvas(2000,1000);
  googleMap = loadImage("assets/map.png")
  
}

function draw() {
 noCursor();
 stroke(255,255,0,60);
 image(googleMap, 0,0, 1900, 1200);
 d = 70;
fill(255,0,0,40);
 ellipse(mouseX, mouseY, d, d);
fill(255,0,0);
 ellipse(mouseX, mouseY, d/7, d/7)
 

}

