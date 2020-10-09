function setup() {
  createCanvas(800,400);
   movingrect = createSprite(400, 200, 80, 50);
  
   gamebounce1 = createSprite(790,200,400,5);
   gamebounce1.velocityX = -3;
   gamebounce1.shapeColor = "green";

   gamebounce2 = createSprite(10,200,400,5);
   gamebounce2.velocityX = 3;
   gamebounce2.shapeColor = "red";

   gameobject1 = createSprite(100,100,50,50);
   gameobject1.shapeColor = "purple";

   gameobject2 = createSprite(200,100,50,50);
   gameobject2.shapeColor = "purple";
  
   movingrect.shapeColor = "blue";
   
}

function draw() {
  background(255,255,255); 
  
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY

  if(isTouching(movingrect, gameobject2)){
    movingrect.shapeColor = "green";
    gameobject2.shapeColor = "green";
  }
  else{
    movingrect.shapeColor = "red";
    gameobject2.shapeColor = "blue";
  }
  
bounceOff(gamebounce1,gamebounce2);

  drawSprites();
}

