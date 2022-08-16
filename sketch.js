let r1= 50;
let r2 = 50;

let a1 = 0;
let a2= 0;

let prevX;
let prevY;


let settings = {
  r1 :81,
  r2 :150,
  a1Inc: 1.0,
  a2Inc: 1.0,

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(0);



  a1Inc = random(0.1, 5);
  a2Inc = random(0.1, 5);

  gui = new dat.GUI();
  gui.add(settings, 'r1', 1, 150).name("Radio1")
  gui.add(settings, 'r2', 1, 150).name("Radio2")

  gui.add(settings, 'a1Inc', 0.1, 5).name("Increment 1")
  gui.add(settings, 'a2Inc', 0.1, 5).name("Increment 2")


  
  gui.width = 300;
  gui.close();
  gui.remember(settings);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(settings.transparency);
}

function draw() {

  translate(width/2, height/2);
for (var i = 0; i < 100; i++) {

let x1 = settings.r1 * cos(a1);
let y1 = settings.r1 * sin(a1);
 
let x2 = x1 + settings.r2 * cos(a2);
let y2 = y1 + settings.r2 * sin(a2);

let r = map(sin(frameCount), -1, 1, 0, 255);
let g = map(cos(frameCount), -1, 1, 0, 255);
let b = map(sin(frameCount), -1, 1, 255, 0);

stroke(r, g, b, 100);

line(prevX, prevY, x2, y2);

prevX = x2;
prevY= y2;

a1 += settings.a1Inc;
a2 += settings.a2Inc;
}

}

function keyPressed() {
  if (key == ' ') {
    background(0);
  }
    if (key == 'p') {
      saveCanvas('spirograph', 'png');
    }
  }



