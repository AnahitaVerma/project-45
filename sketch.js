
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


//var score = 0
//var backgroundImg;

var Matter, engine
var backgroundImg,bground

var asteroids = [];
function preload()
{
  backgroundImg = loadImage("background.webp")
}

function setup() {
	createCanvas(500, 609);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  var options = {
    isStatic :true ,
    fiction: 1.0
  } 
  ground1 = Bodies.rectangle(600,550,1260,3,options);
  
   World.add(world,ground1); 
   


   var options = {
    isStatic :true ,
    fiction: 1.0
  } 
   ground2 = Bodies.rectangle(10,300,100,5,options);
   World.add(world,ground2); 

   var options = {
    isStatic :true ,
    fiction: 1.0,
    restitution: 1.0
  } 
   ground3 = Bodies.rectangle(490,300,100,5,options);
   World.add(world,ground3); 


spaceship1 = new Spaceship(250,400,30,30)

asteroid1 = new Asteroid(300,200,30)
Engine.run(engine);
  
}

function draw() {
 background("black")
  
  //textSize(20)
  //fill("orange")
  //text("SCORE : "+score ,220,50);



  
  rectMode(CENTER) 
fill("black")
  rect(ground1.position.x,ground1.position.y,1300,3) 

  rectMode(CENTER) 

  rect(ground2.position.x,ground2.position.y,20,500) 

  rectMode(CENTER) 

  rect(ground3.position.x,ground3.position.y,20,500) 


  if(frameCount%100===0){
    asteroids.velocityY = 1;
    asteroids.push(new Asteroid(random(width/2+300),10,10))
   
  }

  spaceship1.display();
 //asteroid1.display();

 for (var j=0; j< asteroids.length;j++){

  asteroids[j].display();
  }

 
 
  
  drawSprites();
 

}
function keyPressed(){

 if( keyCode === RIGHT_ARROW){
 
    Matter.Body.applyForce(spaceship1.body, spaceship1.body.position, {x: +10, y:0})
  
}
if(keyCode === LEFT_ARROW ){
  spaceship1.velocity = -100
  Matter.Body.applyForce(spaceship1.body, spaceship1.body.position, {x: -10, y:0})
 // spaceship1.distance -= 10
}

if(keyCode === UP_ARROW ){
 
  Matter.Body.applyForce(spaceship1.body, spaceship1.body.position, {x: 0, y:-10})
}

}


