var fixedRect, movingRect, shape1, shape2, shape3, shape4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  shape1 = createSprite(200,100,40,40);
  shape1.shapeColor = "yellow";

  shape2 = createSprite(300,100,40,40);
  shape2.shapeColor = "pink";

  shape3 = createSprite(500,100,40,40);
  shape3.shapeColor = "white";

  shape4 = createSprite(100,100,40,40);
  shape4.shapeColor = "orange";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(shape3,movingRect)){
    movingRect.shapeColor = "red";
    shape3.shapeColor = "red";
  }

  else{
    movingRect.shapeColor = "blue";
    shape3.shapeColor = "white";
    }

  drawSprites();
}












