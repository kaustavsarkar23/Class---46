
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var spaceship, shaceshipImage;
var backgroundImage;
var asteroid = [];
var asteroid1Image, asteroid2Image;

var maxAsteroid=100;

function preload()
{
	shaceshipImage = loadImage("spaceship.png");
	backgroundImage = loadImage("back2.jpg");
	asteroid1Image = loadImage("astter.png");
	asteroid2Image = loadImage("asteroid2.png");
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(800, 700);

	Engine.run(engine);
	
	spaceship = createSprite(400, 500);
	spaceship.addImage(shaceshipImage);
	spaceship.scale = 0.2;


	
	if(frameCount % 150 === 0){

        for(var i=0; i<maxAsteroid; i++){
            asteroid.push(new createAsteroid(random(0,400), random(0,400)));
        }

	}
}
	

	

	//Create the Bodies Here.



function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(backgroundImage);

  if(keyDown(LEFT_ARROW)){
    spaceship.x = spaceship.x - 3;
  }
  if(keyDown(RIGHT_ARROW)){
    spaceship.x = spaceship.x +3;
  }

  
  for(var i = 0; i<maxAsteroid; i++){
	asteroid[i].showAsteroid();
	asteroid[i].updateY()
	
}
  
  drawSprites();
 
}
