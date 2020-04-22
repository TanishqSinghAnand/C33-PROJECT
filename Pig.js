class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("cv.jpg");
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   
   if(this.body.speed < 9){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 7;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }

 score(){

  if(this.Visiblity < 0 && this.Visiblity > -10){

    score ++ ;

  }

 }



};