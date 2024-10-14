function setup() {
  createCanvas(400, 400);
}

function mycircle() {
  circle(200, 200, 30);
  return circle;
}

function draw() {
  background("aqua");
  mycircle();
}
