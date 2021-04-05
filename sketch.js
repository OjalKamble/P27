const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5,roof;
var Anchor1X,Anchor1Y,Anchor2X,Anchor2Y;


function setup() {
	createCanvas(1000, 800);

	bobDiameter=40;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  roof = new Roof(450,300,450,40);

    bob1 = new bob(280,650,80);
	  bob2 = new bob(360,650,80);
	  bob3 = new bob(440,650,80);
	  bob4 = new bob(520,650,80);
	  bob5 = new bob(600,650,80);


	  rope1 = new rope(bob1.body,roof.body,-50*2,0);
	  rope2 = new rope(bob2.body,roof.body,-25*2,0);
	  rope3 = new rope(bob3.body,roof.body,-0*2,0);
	  rope4 = new rope(bob4.body,roof.body,25*2,0);
	  rope5 = new rope(bob5.body,roof.body,50*2,0);

	Engine.run(engine);
  //Render.run(render);
  
}


function draw() {
  background("lavender");
  
  rectMode(CENTER);
  Engine.update(engine);
  //display
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  keyPressed();
  drawSprites();
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
       Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
    }
}







