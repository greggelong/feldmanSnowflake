let sz;
let slider

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  textAlign(CENTER,CENTER)
  background(0,255,255);
  noStroke();
  fill(0);
  sz = width/8
  //drawShape(300, 300, 200);
  slider = createSlider(2,width/4,width/8,1);
  slider.changed(changeit)
  translate(width/2,height/2)
  drawShape(0, 0, sz)
}


function changeit(){
  background(0,255,255)
  sz = slider.value()
  //translate(width/2,height/2)
  drawShape(0, 0, sz)
  
}

 

function drawShape(x, y, d) {
  //rect(x, y, d);
  fill(random(255),random(255),random(255))
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

