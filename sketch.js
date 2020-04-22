const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var tanishq = "sprites/bg.png";
var score = 0 ;

function preload() {
getBackgroundImg();    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 350, 300, 170);

    box1 = new Box(820,320,70,70);
    box2 = new Box(910,320,70,70);
    pig1 = new Pig(820, 220);
    log1 = new Log(810,260,50,300   );

   // box3 = new Box(700,240,70,70);
    //box4 = new Box(920,240,70,70);
    pig3 = new Pig(910, 220);

    log2 =  new Log(990 ,180,50,300);

 //   box5 = new Box(810,160,70,70);
    log3 = new Log(900,0,400,40);
  //  log4 = new Log(870,120,150);

    bird = new Bird(200,50);

    //log5 = new Log(230,180,80);
    slingshot = new SlingShot(bird.body,{x:200, y:80});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    noStroke();
    textSize(35);
    fill("white");
    text("score:"+score,width-300,50);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();


    pig3.display();
     pig3.score();
    log2.display();

    log3.display();

    
    bird.display();
    platform.display();
    slingshot.display();    
    w0n();
}


function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32  && bird.body.speed < 1){
        Matter.Body.setPosition(bird.body, {x: 200 , y: 50 });
       slingshot.attach(bird.body);
       bird.getIma();
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "bg1.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}

function w0n(){

    if(score === 2 ){
        textSize(39);
        if(tanishq === "bg.png" ){
             fill("black");
        }else if(tanishq ===  "bg2.jpg" ){
            fill("green");
            text("YOU MADE INDIA WON AGAINST CORONA VIRUS ,WELL DONE",10,200);
            textSize(70);
            text("BE SAFE , BE AT HOME :-)",330,290);
        }
        bird.visible= false ;
        pig1.visible= false ;
        pig3.visible= false ;
        log1.visible= false ;
        log3.visible= false ;
        box1.visible= false ;
        box2.visible= false ;
        platform.visible= false ;
        slingshot.visible= false ;
    }

}