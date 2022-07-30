
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);

	

	engine = Engine.create();
	world = engine.world;

    var ball_options={
      isStatic:false,
	  restitution:0.95,
	  friction:0,
	  density:1.2
	}
	 var ground_options ={
	 	isStatic: true
	   };

	//Create the Bodies Here.
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ground = Bodies.rectangle(500,490,25,20,ground_options);
  World.add(world,ground);
	Engine.run(engine);
    rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw()
{
	background(51);
	Engine.update(engine);
	
	ellipse(ball.position.x,ball.position.y,20);
	rect(ground.position.x,ground.position.y,1000,20);


	
  }

  


