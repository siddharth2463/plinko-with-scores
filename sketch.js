var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var divisions = [];

var plinkos = [];
var particle 
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 stroke ("yellow")
 line(0,480,800,480);
 text("500",20,520)
 text("500",100,520)
 text("500",180,520)
 text("200",260,520)
 text("100",340,520)
 text("100",420,520)
 text("200",500,520)
 text("500",580,520)
 text("500",660,520)
 text("500",740,520)
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   //}
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle != null){
     particle.display()
     var pos=particle.body.position
     if(pos.y>480){
if(pos.x<230||pos.x>560){
  score=score+500
  particle=null
}
else if(pos.x<320||pos.x>480){
  score=score+200
  particle=null
}
else if(pos.x<240||pos.x>580){
  score=score+100
  particle=null
     }
   }
}
function mousePressed(){
  particle = new Particle(mouseX,10,12)
}