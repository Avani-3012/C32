
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var engine, world;
var score =0
var bg;


function setup() {
  createCanvas(1600,700);
  rectMode(CENTER)

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground (450,315,500,10);
  //ground2 = new Ground (500,460,20,10);
  ball1 = new ball(100,200,20);
  sling1 = new launch(ball1.body,{x:100,y:200})

  // 1st stack
   //level one
   block17 = new box (320,275,30,40) ; 
   block18 = new boxA (330,275,30,40) ; 
   block19 = new box (360,275,30,40) ; 
   block20 = new boxA (390,275,30,40) ; 
   block21 = new box (420,275,30,40) ; 
   block22 = new boxA (450,275,30,40) ; 
   block23 = new box (470,275,30,40) ; 
 // level two
  block24 = new boxA (330,235,30,40) ; 
  block25 = new box (360,235,30,40) ; 
  block26 = new boxA (390,235,30,40) ;
   block27 = new box (420,235,30,40) ;
    block28 = new boxA (450,235,30,40) ;
    //block = new box(480,235,30,40);
     //level three 
     block29 = new box (360,195,30,40) ;
      block30 = new boxA (390,195,30,40) ;
      block31 = new box (420,195,30,40) ;
 //top
  block32 = new boxA (390,155,30,40) ;


    // 2nd stack
   //level one
   //block1 = new box (510,275,30,40) ; 
   //block2 = new boxA (530,275,30,40) ; 
   //block3 = new box (560,275,30,40) ; 
   //block4 = new boxA (590,275,30,40) ; 
   //block5 = new box (620,275,30,40) ; 
   //block6 = new boxA (650,275,30,40) ; 
   //block7 = new box (680,275,30,40) ; 
 // level two
  //block8 = new boxA (530,235,30,40) ; 
  //block9 = new box (560,235,30,40) ; 
  //block10 = new boxA (590,235,30,40) ;
   //block11 = new box (620,235,30,40) ;
    //block12 = new boxA (650,235,30,40) ;
    //block = new box(480,235,30,40);
     //level three 
     //block13 = new box (560,195,30,40) ;
      //block14 = new boxA (590,195,30,40) ;
     // block15 = new box (620,195,30,40) ;
 //top
  //block16 = new boxA (590,155,30,40) ;

  getTime()




  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

  Engine.run(engine);
  Render.run (render)
}

function draw() {
  if(bg){
    background(bg);
} 
  rectMode(CENTER) 
  noStroke();
  textSize(35);
  fill("white");
  text("score:"+score,width - 300,50);
  Engine.update(engine);
  ground1.display();
  //ground2.display();
  sling1.display();
  ball1.display();
 
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  block26.score();
  block27.score();
  block28.score();
  block29.score();
  block30.score();
  block31.score();
  block32.score();
  
  


  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
 sling1.fly();
}
function keyPressed(){
  if (keyCode ===(32)){
   // sling1.attach(this.ball1)
 }
}
async function getTime(){
  var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var response2 =await response.json()
  var datetime= response2.datetime;
  var hour = datetime.slice(11,13)
  if(hour>06 && hour<19){
    bg = "red"
  }else{
   bg = "black"
  }
  
}