const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var newtonbg;
var groundImg, ground, roof, roofImg;
var bob1, bob2, bob3, bob4, bob5;

function preload() {
    newtonbg = loadImage("Assets/newton.png");
    groundImg = loadImage("Assets/ground.png");
    roofImg = loadImage("Assets/roof.png");
}

function setup() {
    createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    ground = new fixed(420, 590, 840, 50, groundImg);
    roof = new fixed(400, 50, 600, 100, roofImg);
    bob1 = new Pendulum(200, 406, 50);
    rope1 = new rope(bob1.body, roof.body, {
        x: 200,
        y: roof.body.position.y
    });
    bob2 = new Pendulum(300, 406, 50);
    rope2 = new rope(bob2.body, roof.body, {
        x: 300,
        y: roof.body.position.y
    });
    bob3 = new Pendulum(400, 406, 50);
    rope3 = new rope(bob3.body, roof.body, {
        x: 400,
        y: roof.body.position.y
    });
    bob4 = new Pendulum(500, 406, 50);
    rope4 = new rope(bob4.body, roof.body, {
        x: 500,
        y: roof.body.position.y
    });
    bob5 = new Pendulum(600, 406, 50);
    rope5 = new rope(bob5.body, roof.body, {
        x: 600,
        y: roof.body.position.y
    });

    Engine.run(engine);
}

function draw() {
    Engine.update(engine);
    background(newtonbg);
    ground.display();
    roof.display();
    rope1.display();
    bob1.display();
    rope2.display();
    bob2.display();
    rope3.display();
    bob3.display();
    rope4.display();
    bob4.display();
    rope5.display();
    bob5.display();
    fill(random(50,250),0,random(50,250))
    textSize(48);
    text("NEWTON'S CRADLE",200,550);
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        Body.applyForce(bob1.body, bob1.body.position, {
            x: -0.5,
            y: -0.5
        });
    } else if (keyCode == DOWN_ARROW) {
        Body.applyForce(bob1.body, bob1.body.position, {
            x: -0.5,
            y: -0.5
        });
        Body.applyForce(bob2.body, bob2.body.position, {
            x: -0.5,
            y: -0.5
        });
    }
}