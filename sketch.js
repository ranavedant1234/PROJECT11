var ship,shipsailing;
var seaImage;
function preload(){
shipsailing=loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(50,197,150,150);
  sea.addImage(seaImage);
  sea.scale=0.27;
  ship=createSprite(209,209,50,107);
  ship.addAnimation("sailing",shipsailing);
  ship.scale=0.3;
  ship.x=200;
}

function draw() {
 background("blue");
 sea.velocityX=-3
 if (sea.x<0){
sea.x=sea.width/8
 }
drawSprites();
}