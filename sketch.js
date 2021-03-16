var canvas;


var form;
var bg_Img;
var short, short_Img;
var big, big_Img;
var shark, shark_Img;

function preload(){
  bg_Img = loadImage("bg2.jpg");
  short_Img = loadImage("small1.jpg");
  big_Img = loadImage("big1.jpg");
  shark_Img = loadImage("shark1.jpg");
}


function setup(){
  canvas = createCanvas(400,400);
  bg=  createSprite(200,200,100,200);
  bg.addImage("bg",bg_Img);
  bg.velocityX = -1;
  bg.x = bg.width/2;
  form = new Form();
}


function draw(){
  background(220);
  if(bg.x<120){
    bg.x = bg.width/2;
  }

  form.display();
  drawSprites();
}

function Mygame(){
  short = createSprite(50,90,10,30);
  short.addImage("short",short_Img);
  short.scale = 0.08;

  big = createSprite(50,140,10,30);
  big.addImage("big",big_Img);
  big.velocityX = 0.5;
  big.scale = 0.2;

  shark = createSprite(200,10,20,20);
  shark.addImage("shark",shark_Img);
  shark.velocityY = 0.7;
  shark.scale = 0.1;

}
