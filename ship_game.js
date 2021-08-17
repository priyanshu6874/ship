var ship ,sea;
var shipImg, seaImg;


function preload(){

  shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg=loadImage("sea.png");

}


function setup(){
  createCanvas(600,300);

  //creating ship
  ship=createSprite(70,180,20,20);
  ship.addAnimation("ship");

  //creating sea
  sea=createSprite(10,200,600,10);
  sea.addImage(seaImg);
  sea.velocityX=-2;
  sea.visible=false
  
  if(sea.x < 0){
  sea.x = sea.width/2;
  }
  ship.scale=0.2;
  
}

function draw() {
  background(seaImg);



  if(keyDown("right")){
    ship.velocityX=5;
  }
 if(keyDown("left")){
   ship.velocityX=-5;
 }

 if(keyDown("space")){
   ship.velocityX=0;
 }

ship.collide(sea);
 drawSprites();
}