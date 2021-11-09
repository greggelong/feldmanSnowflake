//spin and out

let sz;
let szCount;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  angleMode(DEGREES)
  textAlign(CENTER,CENTER)
  background(230,200,20);
  noStroke();
  fill(0);
  sz = width/8
  //drawShape(300, 300, 200);
  //szCount = width/8
  //slider = createSlider(2,width/4,width/8,1);
  //slider.changed(changeit)
  //frameRate(20);
  translate(width/2,height/2)
  drawShape(0, 0, sz)
}


function draw(){
  sz -=1;
  if (sz< 1){

    sz = width/8;
  }
  if (frameCount){ // add mod to this if you want to slow the animation
    background(230,200,20)
    translate(width/2,height/2)
    rotate(frameCount)
    drawShape(0, 0, sz)
    //noLoop()
}
  
}

 

function drawShape(x, y, d) {
  //rect(x, y, d);
  //fill(random(255),random(255),random(255))
  fill(0)
  rect(x,y,sz,sz)
  if (d < width/2) {
    let newD = d * 3;
    print(newD)
    drawShape(x,y,newD);
    drawShape(x + d, y + d, newD);
    drawShape(x - d, y - d, newD);
    drawShape(x- d , y + d, newD);
    drawShape(x +d , y - d, newD);
     
  }
}

