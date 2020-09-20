var zero;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
add(ground, world);
var groundObj;
var standObj;

function draw() {
  background(255,255,255);  
   text("SCORE:", +score,750,40)
  display();
  block8=new Block(330,235,30,40);
  block9=new Block(360,235,30,40);
  block10=new Block(390,235,30,40);
  block11=new Block(420,235,30,40);
  block12=new Block(450,235,30,40);
  block13=new Block(360,195,30,40);
  block14=new Block(390,195,30,40);
  block15=new Block(420,195,30,40);
  block16=new Block(390,155,30,40);
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
 
  

  polygon=Bodies.circle(50,200,20);
  world.add(world,polygon);
  slingShot=new Slingshot(this.polygon,{x:100,y:200})
  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40)
  drawSprites();
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

score() {
  if(this.visibility<0 && this.visibility >-105) {
    score++;
  }
}