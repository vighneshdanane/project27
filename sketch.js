
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	roof1 = new roof (400 , 250 , 230 , 20)
	bob1 = new bob (310 , 575 , 40)
	bob2 = new bob (360 , 575 , 40)
	bob3 = new bob (400 , 575 , 40)
	bob4 = new bob (440 , 575 , 40)
    bob5 = new bob (480 , 575 , 40)
	rope1 = new rope (bob1.body , roof1.body,-80 ,0)
	rope2 = new rope (bob2.body , roof1.body,-40 ,0)
	rope3 = new rope (bob3.body , roof1.body,0 ,0)
	rope4 = new rope (bob4.body , roof1.body,40 ,0)
	rope5 = new rope (bob5.body , roof1.body,80 ,0)








}


function draw() {
  rectMode(CENTER);
  background(255);
  
roof1.display()
bob1.display()
bob2.display()
bob3.display()
bob4.display()
bob5.display()
rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50 , y:50})
	}
}



