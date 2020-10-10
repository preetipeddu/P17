
var monkey , monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup, bananaGroup;
var score;
var ground;
var survivalTime = 0;
var ground;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
 monkey = createSprite(80,315,20,20);
 monkey.addAnimation("moving", monkey_running);
 monkey.scale = 0.1;
  
 ground = createSprite(400,350,900,10);
 ground.velocityX = -4;
 ground.x = ground.width/2;
 console.log(ground.x);
  
 obstacleGroup = new Group();
 bananaGroup = new Group();
  
 
 
}


function draw() {
 background("white");
  
  
 stroke("white");
 textSize(20);
 fill("white");
 text("Score: " + score, 500,50);
  
 stroke("black");
 textSize(20);
 fill("black");
 survivalTime = Math.ceil(frameCount/frameRate());
 text("Survival Time: " + survivalTime, 100, 50);  
 
 if(keyDown("space")){
   monkey.velocityY = -10;
   }
  monkey.velocityY = monkey.velocityY + 1;
  monkey.collide(ground);
 
  if(ground.x<0){
   ground.x = ground.width/2;
 }
  
obstacles();
food();
  

 drawSprites();
  
}

function food() {
  if(frameCount%80==0){
    banana = createSprite(200,Math.round(random(110,300)),20,20);
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.1;
    banana.lifetime = 150;
    bananaGroup.add(banana);
   }
    
    
}


function obstacles() {
  if(frameCount%300==0){
    obstacle = createSprite(600,330,10,40);
    obstacle.velocityX = -4;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    banana.lifetime = 150;
    obstacleGroup.add(obstacle);

  }
    
  
}





