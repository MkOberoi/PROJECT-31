  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground1;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
engine = Engine.create();
world = engine.world;

ground1 = new Ground(240,height,480,30);


 
for(var i = 0; i <= width; i = i + 80)
{
  divisions.push(new Divisions(i,height-divisionHeight/2,10,divisionHeight));
 } 

 for(var j = 0; j <= width; j = j + 50)
 {
   plinkos.push(new Plinko(j,75,10));
 }

 for(var k = 0; k <= width; k = k + 50)
 {
   plinkos.push(new Plinko(k,175,10));
 }

 for(var l = 0; l <= width; l = l + 50)
 {
   plinkos.push(new Plinko(l,275,10));
 }

 for(var m = 0; m <= width; m = m + 50)
 {
   plinkos.push(new Plinko(m,375,10));
 }

Engine.run(engine);

}

function draw() {
  background(0);  

  Engine.update(engine);

  ground1.display();

  
 if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}


 for(var i = 0; i < divisions.length; i++){
   divisions[i].display();
 }
  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  for(var k = 0; k < plinkos.length; k++){
    plinkos[k].display();
  }
  for(var l = 0; l < plinkos.length; l++){
    plinkos[l].display();
  } 
  for(var m = 0; m < plinkos.length; m++){
    plinkos[m].display();
  }
  for(var n = 0; n < particles.length; n++){
    particles[n].display();
  }
}