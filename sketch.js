

var screen,screenImg
var bowl,bowlImg;
var greenapple,greenappleImg;
var redapple,redappleImg;
var score=0;


function preload(){
screenImg = loadImage("background.png");
bowlImg = loadImage("bowl.png");
greenappleImg = loadImage("greenapple.png")
redappleImg = loadImage("redapple.png")

}

function setup() {
  createCanvas(700,800);
  
  greenappleGroup=new Group();
  redappleGroup=new Group();

  screen = createSprite(450,400,10,10);
  screen.addImage(screenImg);
  screen.scale=3.5;

  bowl = createSprite(350,750);
  bowl.addImage(bowlImg);
  bowl.scale=0.3;
}

function draw() {

  
   
  background("screenImg");
  
  textSize(20);
  text("score:"+score,20,20) 

  

  if(keyDown("LEFT_ARROW")){
    bowl.x = bowl.x -3;
  }
  
 if(keyDown("RIGHT_ARROW")){
   bowl.x = bowl.x +3;
 }
  
  if(frameCount%200===0){
    greenappleA();
   }

   if(frameCount%250===0){
    redappleA();
   }

   if(greenappleGroup.isTouching(bowl)){
    greenappleGroup.destroyEach();
    score=score+1;
  }

  if(redappleGroup.isTouching(bowl)){
    redappleGroup.destroyEach();
    score=score-1;
  }
  
  drawSprites();

}
function greenappleA(){
  greenapple=createSprite(Math.round(random(20,840)),40,30,30);
  greenapple.addImage(greenappleImg);
  greenapple.scale=0.4;
  greenapple.velocityY=3;
  greenappleGroup.add(greenapple)
 }


 function redappleA(){
  redapple=createSprite(Math.round(random(20,840)),40,30,30);
  redapple.addImage(redappleImg);
  redapple.scale=0.4;
  redapple.velocityY=3;
  redappleGroup.add(redapple)
  
 }
