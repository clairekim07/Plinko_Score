const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;
const Constraint = Matter.Constraint;

var backgroundImg,platform;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var score = 0;
var particle;
var turn = 0;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
   
   
   
       for (var j = 25; j <=width; j=j+50) 
       {
       
          plinkos.push(new Plinko(j,75));
       }
   
       for (var j = 50; j <=width-10; j=j+50) 
       {
       
          plinkos.push(new Plinko(j,175));
       }
   
        for (var j = 25; j <=width; j=j+50) 
       {
       
          plinkos.push(new Plinko(j,275));
       }
   
        for (var j = 50; j <=width-10; j=j+50) 
       {
       
          plinkos.push(new Plinko(j,375));
       }
   
    ground1 = new Ground(80,790,170,10);
    ground2 = new Ground(240,790,160,10);
    ground3 = new Ground(400,790,160,10);
    //plinko1 = new Plinko(225,70,5);
    //particle = new Particle(220,10)

    divide1 = new Divisions(5,640,7,300)
    divide2 = new Divisions(80,640,7,300)
    divide3 = new Divisions(160,640,7,300)
    divide4 = new Divisions(240,640,7,300)
    divide5 = new Divisions(320,640,7,300)
    divide6 = new Divisions(400,640,7,300)
    divide7 = new Divisions(477,640,7,300)
    
    
   
}

function draw(){
    background("purple");
    Engine.update(engine);
    noStroke();
    textSize(35);
    fill("white");
    text("Score: " + score, width-450, 50)
      //console.log(particle);  

       /* for(var i=0; i<particles.length; i++ ){
            particles.push(new Particle(random(width/2-10,width/2+10),10));
            particles[i].display();
        }*/

    for(var j=0; j<plinkos.length; j++){
        plinkos[j].display();
    }
    
    noStroke();
    textSize(20);
    fill("white");
    text("100",100, 600);
    text("100",20, 600);
    text("400",180, 600);
    text("400",260, 600);
    text("200",340, 600);
    text("200",420, 600);

    rect(240,485,480,10)
    divide1.display();
    divide2.display();
    divide3.display();
    divide4.display();
    divide5.display();
    divide6.display();
    divide7.display();
    
    ground1.display();
    ground2.display();
    ground3.display();
    //particle.display();    

    //plinko1.display();
 
    if(gameState === END){
        //plinko1 = null;
        //particle = null;
        noStroke();
        textSize(70)
        fill("white")
        text("Game Over",50, 300)
        //score++;
    }
    
   if(particle != null){
       particle.display();
       if(particle.body.position.y > 760){
           if(particle.body.position.x < 300){
               score = score + 500;
               particle = null;
               if(turn>=5){
                gameState = END;
            }
           }else if( particle.body.position.x <600 && particle.body.position.x>301){
            
                //console.log(particle.x);
                //console.log("hi");
                score = score + 100;    
                particle = null;
                if(turn>=5){
                    gameState = END;
                }
            
            }else if(particle.body.position.x <900 && particle.body.position.x>601 ){
            //console.log(particle.x);
            //console.log("hi");
            score = score + 200;
            particle = null;
            if(turn>=5){
                gameState = END;
            }
       }
   }
   
}

}
function mousePressed(){
    if(gameState!= END){
        particle++;
        console.log(turn);
        turn++;
        particle = new Particle(mouseX,10, 10);
    }
}

