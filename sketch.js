var engine
var world
var a 
var g1,g2,g3
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,player
var hexagon_img,
Chain
var score =0

function preload()
{
  hexagon_img=loadImage("hexagon.png")
}
function setup() {
  engine = Matter.Engine.create()
  world = engine.world
  createCanvas(900,1000);
  //createSprite(400, 200, 50, 50);
  g1=new base(500,300,350,10)
  b1=new box(370,190)
  b2=new box(430,190)
  b3=new box(490,200)
  b4=new box(490,100)
  b5=new box(490,0)
  b6=new box(430,90)
  
  b8=new box (550,190)
  b9=new box(550,90)
  b10 =new box(610,190)
  player=new hexa(100,100)
  Chain=new chain(player.body,{x:100,y:100})
}


function draw() {
  background(100);
  
  fill("yellow")
  text("score: "+score,650,20); 
  Matter.Engine.update(engine)
  g1.display()
  b1.display("blue")
  b2.display("white");
  b3.display("green")
  b4.display("white")
  b5.display("orange")
  b6.display("purple") 
  b8.display("magenta")
  b9.display("yellow")
  b10.display("crimson")
 // hexagon_img.resize(100,100)
  player.display()
  Chain.display()

  b1.score()
  b2.score()
  b3.score()
  b4.score()
  b5.score()
  b6.score()
  b8.score()
  b9.score()
  b10.score()
  
  //drawSprites();
}
function mouseDragged()
{

    Matter.Body.setPosition(player.body, {x:mouseX,y:mouseY})
    
    
}
function mouseReleased()
{
    
    Chain.escape()

}