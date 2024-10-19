function setup() {
  createCanvas(400, 400);

  {
    let x = 200;
    let y = 200;
    let radius = 100;
    let v = 0.01;
    let size = 120;

    o = new Orbit(x, y, radius, v, size);
  }
  {
    let x = 200;
    let y = 200;
    let radius = 100;
    let v = 0.01 * 2;
    let size = 120 / 10;

    s = new Orbit(x, y, radius, v, size);
  }

  o.sate = s;
}

function draw() {
  background(220);

  o.update();

  o.render();

  o.set_sate();
  s.update();
  s.render();

  //print(o.rad);
}

class Orbit {
  constructor(x, y, radius, v, size) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.v = v;
    this.rad = 0;
    this.size = size;
    this.sate = null;
  }

  update() {
    this.rad += this.v;
  }

  render() {
    push();
    translate(this.x, this.y);
    circle(this.radius * cos(this.rad), this.radius * sin(this.rad), this.size);
    pop();
  }

  set_sate() {
    this.sate.x = this.x + this.radius * cos(this.rad);
    this.sate.y = this.y + this.radius * sin(this.rad);
  }

  update_sate() {
    this.sate.update();
  }
}
