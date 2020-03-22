var tri,green;

function preload(){
  triImg = loadImage('tri.png');
}

function setup() {
 createCanvas(800,500);

  green =createSprite(350,469,900,80);
  green.shapeColor = "green";

  tri = createSprite(518,150,10,10);
  tri.addImage(triImg);
  tri.scale = 0.2;


}


function draw(){

  background(13,152,186);
   
  fill("#74B7AC");
  rect(300,222,50,210);
  rect(610,222,50,210);

  fill("#B24A3B");
  rect(350,250,260,180);

  fill("#607D86");
  rect(420,196,120,60);

  fill("#C44B4F");
  rect(475,117,10,80);

  fill("#4D0011");
  rect(460,350,50,80);

  drawSprites();
}
  