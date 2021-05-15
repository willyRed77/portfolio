var x = window.innerWidth;
var y = window.innerHeight;
var canvas2 ;
var canvasTExt ;
var cont;

let myFont;
function preload() {
  myFont = loadFont("assets/GoblinOne-Regular.ttf");
}

function setup() {
  loadFont(myFont);
  createCanvas(x,y);
  canvas2 = createGraphics(windowWidth/2,windowHeight);
  canvasText = createGraphics(200,200,WEBGL);
  cont=16;
  console.log(navigator.userAgent);
}

function draw() {
  frameRate(20);
  x = window.innerWidth;
  y = window.innerHeight;
  background(220);
  canvas2.background(255,0,0,200);
  
  image(canvas2, windowWidth/16  ,0)  ;
  

  canvasText.fill(255,0,0,255);
  canvasText.textFont(myFont);
    canvasText.textSize(22);
    canvasText.textAlign(CENTER, CENTER);

  image(canvasText, windowWidth/2  ,windowHeight/2)  ;

  circle(x/2,y/2,15);
  if(cont == 15){
    cont = 0;
  } 
  cont++;
  
  canvasText.background(255,255,0,200);

  let time = millis();
  canvasText.rotateZ(time / 1000000);
  canvasText.text('Jhonnnnnnn', 0, 0);

}

function mousePressed() {
  if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {
    let fs = fullscreen();
    console.log("var", fs);
    console.log("accion", fullscreen(!fs));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  canvas2.resizeCanvas(windowWidth/2, windowHeight);
}