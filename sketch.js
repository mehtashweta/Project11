var path,pathImage;
var runner,runner_running;
var invisableRightBoundary;
var invisableLefttBoundary;

function preload(){
  //pre-load images
  pathImage.loadImage("path.png")

  runner_running.loadAnimation("Running-1.png","Running-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path = createSprite(200,200,200,400);
  path.addImage(pathImage);
  path.velocityY = 4;
  path.scale = 1.2;

  runner.addAnimation("running",runner_running);

  invisableLefttBoundary = createSprite(190,200,10,400);
  invisableLefttBoundary.visable = false

  invisableRighttBoundary = createSprite(210,200,10,400);
  invisableRighttBoundary.visable = false

}

function draw() {
  background(0);

  runner.x = World.mouseX;

if(path.y > 400) {
   path.y = height/2;
}

   runner.collide(invisableLefttBoundary);
   runner.collide(invisableRightBoundary);

   drawSprites(); 

}
