// JavaScript source code
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Colors = ["red","lime","cyan","black","yellow"];

//All Variables
var particles = [], plinkos = [], divisions = [],ground,score = 0,turnsTaken = 0;

function setup() {

    createCanvas(800, 700);

    engine = Engine.create();
    world = engine.world;
    rectMode("center");

    //Give values to variables
    ground = new Ground(200, 650, 450, 30);

    var index = 0;
    var divIndex = 0;


    for (var y = 0; y < 6; y++) {
        for (var i = 1; i < 10; i++) {
            plinkos[index] = new Plinko(i * 33 + 25, 80 + y * 80);
            index++;
            plinkos[index] = new Plinko(i * 43, 100 + y * 80);
            index++;
            plinkos[index] = new Plinko(i * 43, 60 + y * 80);
            index++;
        }
    }

    for (var i = 1; i < 11; i++) {
        divisions[divIndex] = new Division(i * 40, 585);
        divIndex++;
    }
}

function draw() {
    background("white");
    Engine.update(engine);

    //display objects
    ground.display();

    for (var i = 0; i < particles.length; i++) {
        particles[i].display();
    }

    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
    }

    for (var i = 0; i < divisions.length; i++) {
        divisions[i].display();
    }

    text("Score : " + score, 400, 70);
    text("20", 250, 600);
    text("10", 210, 600);
    text("40", 290, 600);
    text("20", 170, 600);
    text("40", 130, 600);
    text("80", 50, 600);
    text("60", 90, 600);
    text("80", 370, 600);
    text("60", 330, 600);
}

function keyPressed() {
    //catch key presses
    if (turnsTaken > 4)
        return;

    particles[turnsTaken] = new Particle(random(200, 250), 10);
    turnsTaken++;
}