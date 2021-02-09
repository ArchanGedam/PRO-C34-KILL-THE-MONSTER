const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var ground,hero,fly;

function preload() {
//preload the images here
backgroundImg = loadImage("images/Background.png");
}

function setup() {
  createCanvas(1600, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(800,700,1600,10)

hero = new Hero(500,100,250,150) ;

fly = new Fly(hero.body, { x: 500, y: 50 });
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  ground.display();

  hero.display();

  fly.display();
  
}



function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}




