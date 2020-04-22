class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,70,70);
    this.image = loadImage("thanedar.jpg");
    this.smokeImage = loadImage("smoke.png");
   // this.img = loadImage("doctor.png")
    this.trajectory =[];
  }

 getIma(){
  if(keyCode === 32){
    var imu = random(0,2);
    var tsaa ;
     if(imu < 0 && imu >-1){
       this.image =loadImage("flag.jpg");
     }
     else if(imu>0 && imu<1){
       this.image = loadImage("doctor.png");
     }else if(imu>1 && imu<2){
       this.image = loadImage("thanedar.jpg");
     }
     }
    }


  display(){
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    var position ;
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
       position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }

    if(this.body.velocity.x <10 && this.body.position.x < 200){
      this.trajectory.pop(position);

    }

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  
 // var angle = this.body.angle;

}
  //console.log(this.image)
 // image(tsaa, 0, 0, this.width, this.height);
}


