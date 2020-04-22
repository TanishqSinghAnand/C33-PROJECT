class Log extends BaseClass{
  constructor(x,y,width,height){
    var options = {

      isStatic : true 

    }
    super(x,y,width,height);
    this.image = loadImage("wood2.png");
  //  Matter.Body.setAngle(this.body);
  }
}