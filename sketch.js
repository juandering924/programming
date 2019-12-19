//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(173,216,230); //an RGB color for the canvas' background
  //circle
  stroke(255,100,127) // an RGB color for the circle's border
  fill(234,745,127,235); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,200,200)
  triangle(300,202,150,300,43,22)
 fill(0, 152, 253, 51);


  
textSize(32)
text('Got.EEE', 150, 120);}
	function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;





  ; // center of canvas, 20px dia

