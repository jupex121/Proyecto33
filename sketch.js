var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions;
var divisionHeight = 300;
var score = 0;
var timer = 30;
var movingTimer = 0;
var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);
  ground2 = new Ground(width / 2, 5, width, 20);
  ground3 = new Ground(5, height / 2, 20, height);
  ground4 = new Ground(795, height / 2, 20, height);

  divisions = new Divisions(500, 200, 700, 1.525);
  divisions1 = new Divisions(300, 400, 700, -1.525);
  divisions2 = new Divisions(500, 600, 700, 1.525);
  divisions3 = new Divisions(300, 760, 700, -1.525);

  player = new Player(700,700,60,60);
    
}

function draw() {
  background("black");
  textSize(20);
 
  Engine.update(engine);

  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  }

  if (timer > 0) {
    text(timer, width/2, height*0.7);
  }

  textSize(30);

  if(player.body.position.y <= 150 && player.body.position.x >= 730) {
    text("¡Felicidades, ganaste el juego!", 200, 400);
    Matter.Body.setStatic(player, true);
    gameState = "end";
  }

  console.log(player.body.position.x);

  if(gameState != "end") {
    if (frameCount % 60 == 0) {
      movingTimer ++;
    }

    if (frameCount % 250 === 0) {
      particles.push(new Particle(790, 10, 25));
    }

    if(particles.body.position.y > 770) {
      particles = [];
    }

    for (var h = 0; h < particles.length; h++) {
      particles[h].display();
    }

    divisions.display();
    divisions1.display();
    divisions2.display();
    divisions3.display();

    ground.display();
    ground2.display();
    ground3.display();
    ground4.display();
  
    player.display();
  }
  
}

function keyPressed() {
	if(keyCode === UP_ARROW && timer === 0 && movingTimer ++) {
		Matter.Body.applyForce(player.body, player.body.position, {x: 0, y: -75});
	}

  if(keyCode === DOWN_ARROW && timer === 0 && movingTimer +2) {
    Matter.Body.applyForce(player.body, player.body.position, {x: 0, y: +50});
  }

  if(keyCode === RIGHT_ARROW && timer === 0 && movingTimer +2) {
    Matter.Body.applyForce(player.body, player.body.position, {x: +50, y: 0});
  }

  if(keyCode === LEFT_ARROW && timer === 0 && movingTimer +2) {
    Matter.Body.applyForce(player.body, player.body.position, {x: -50, y: 0});
  }
}