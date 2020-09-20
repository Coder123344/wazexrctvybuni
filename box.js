class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
    }
visible() {
  if (speed<3)
    visible: true;
}
  
  };
function keyPressed(){
  if(keyCode === 32)
     slingShot.attach(this.polygon);
}
  