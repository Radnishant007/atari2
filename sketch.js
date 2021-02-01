var ball
var edges
var base
var brickGroup
var count = 39;

function preload(){
  ballImage = loadImage("ball.png")
}
function setup(){
base = createSprite(200,390,150,10);
base.shapeColor = "white";

ball = createSprite(200,200,10,10);
ball.velocityY = 5;
ball.velocityX = 2;
ball.addImage(ballImage);
ball.scale = 0.1;

brickGroup = createGroup();
for (var i = 15; i < 400; i=i+50) {
  var redBrick = createSprite(i,15,40,30);
  redBrick.shapeColor = "red";
  brickGroup.add(redBrick);
}

for (var i = 35; i < 400; i=i+50) {
  var yellowBrick = createSprite(i,50,40,30);
  yellowBrick.shapeColor = "yellow";
  brickGroup.add(yellowBrick);
}

for (var i = 15; i < 400; i=i+50) {
  var greenBrick = createSprite(i,85,40,30);
  greenBrick.shapeColor = "green";
  brickGroup.add(greenBrick);
}

for (var i = 10; i < 400; i=i+50) {
  var blueBrick = createSprite(i,120,40,30);
  blueBrick.shapeColor = "blue";
  brickGroup.add(blueBrick);
}

for (var i = 20; i < 400; i=i+50) {
  var orangeBrick = createSprite(i,155,40,30);
  orangeBrick.shapeColor = "orange";
  brickGroup.add(orangeBrick);
}

}
function draw (){
  background("gray");
  
  edges = createEdgeSprites();
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(base);
  
  base.x = World.mouseX;
  
  for (var i = 0; i < count; i++) {
    var gold = brickGroup.get(i);
    
    console.log(gold.x)
    
      if (ball.isTouching(gold)){
        console.log(gold.x);
        ball.bounceOff(gold);
        gold.destroy();
        count=count-1;
    }
  }
  
  drawSprites();

}