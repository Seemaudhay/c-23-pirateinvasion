const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var n_tower,n_cannon, angle = 20;

var backgroundImg;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    n_tower = new Tower (150, 350, 160, 310);
    n_cannon = new Cannon  (180, 110, 110, 50, angle);

}

function preload()
{
    backgroundImg = loadImage("background.gif");
}

function draw(){
    
    background(0);
    image(backgroundImg, 0, 0, width, height);

    Engine.update(engine);
    n_tower.display();
    n_cannon.display();

}
