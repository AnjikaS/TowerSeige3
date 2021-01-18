const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = "SLING";
var launched
var Score = 0
function preload(){

}
 
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,200,300,10);
    ground2 = new Ground(300,300,300,10);

    box1 = new Box(200,275,50,75);
    box2 = new Box(250,275,50,75);
    box3 = new Box(300,275,50,75);
    box4 = new Box(350,275,50,75);
    box5 = new Box(400,275,50,75);
   
   
    box7 = new Box(250,200,50,75);
    box8 = new Box(300,200,50,75);
    box9 = new Box(350,200,50,75);
    box10 = new Box(400,200,50,75);
   
    box11 = new Box(300,125,50,75);
    box12 = new Box(350,125,50,75);
    
    box1a = new Box(500,175,50,75);
    box2a = new Box(550,175,50,75);
    box3a = new Box(600,175,50,75);
    box4a = new Box(650,175,50,75);
    box5a = new Box(700,175,50,75);
   
   
    box7a = new Box(550,100,50,75);
    box8a = new Box(600,100,50,75);
    box9a = new Box(650,100,50,75);
    box10a = new Box(700,100,50,75);
   
    box11a = new Box(600,25,50,75);
    box12a = new Box(650,25,50,75);

    hero = new POLYGON(100,150,30,30);
    Matter.Body.setDensity(hero.body,6);
    Sling = new SlingShot(hero.body,{x:100, y:150});
}

function draw(){
    background("#422919");
    Engine.update(engine);


    ground.display();
    ground2.display();

    box3.display();
    box3.score();

    box1.display();
    box1.score();

    box2.display();

    box4.display();
    box5.display();

    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    
    box3a.display();
    box1a.display();
    box2a.display();
    box4a.display();
    box5a.display();

    box7a.display();
    box8a.display();
    box9a.display();
    box10a.display();
    box11a.display();
    box12a.display();

    box2.score();

    box4.score();
    box5.score();

    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    
    box3a.score();
    box1a.score();
    box2a.score();
    box4a.score();
    box5a.score();

    box7a.score();
    box8a.score();
    box9a.score();
    box10a.score();
    box11a.score();
    box12a.score();

    hero.display();
    Sling.display();

    fill("green");
    textSize(15);
    text("Score: " + Score, 1000, 50);
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    Sling.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && hero.body.speed < 1){
        gameState = "SLING";
        Matter.Body.setPosition(hero.body, {x: 200 , y: 50});
        Sling.attach(hero.body);
    }
}

async function getTime(){
    
    var response = await fetch("https://worldtimeapi.org/timezone/Asia/Kolkata");
    var responseJson = await response.json();
    var datetime = responseJson.datetime;

    var hour = datetime.slice(11,13);

    console.log(hour);
    
    if(hour>=06 && hour<=19){
        backgroundImg = loadImage("sprites/bg.png");
    }
    else{
        backgroundImg = loadImage("sprites/bg2.jpg");
    }
}
