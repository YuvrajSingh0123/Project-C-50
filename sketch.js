var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie,zombie1,zombie2,zombie3
var zombieImg
var heart_1
var heart_1Img 


var score = 0
function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  zombieImg = loadImage("assets/zombie.png")
  heart_1Img = loadImage("assets/heart_1.png" )
 
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  
bulletGroup = createGroup();

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

zombie = createSprite(displayWidth-550, displayHeight-300 , 50 , 50);
zombie.addImage(zombieImg)
zombie.scale = 0.2
zombie.debug = true
zombie.velocityX = -1

zombie1 = createSprite(displayWidth-250, displayHeight-300 , 50 , 50);
zombie1.addImage(zombieImg)
zombie1.scale = 0.2
zombie1.debug = true
zombie1.velocityX = -1

zombie2 = createSprite(displayWidth-350, displayHeight-300 , 50 , 50);
zombie2.addImage(zombieImg)
zombie2.scale = 0.2
zombie2.debug = true
zombie2.velocityX = -1

zombie3 = createSprite(displayWidth-450, displayHeight-300 , 50 , 50);
zombie3.addImage(zombieImg)
zombie3.scale = 0.2
zombie3.debug = true
zombie3.velocityX = -1

heart_1 = createSprite(displayWidth-450, displayHeight-850 , 50 , 50)
heart_1.addImage(heart_1Img)
heart_1.scale = 0.5

heart_2 = createSprite(displayWidth-350, displayHeight-850 , 50 , 50)
heart_2.addImage(heart_1Img)
heart_2.scale = 0.5

heart_2 = createSprite(displayWidth-250, displayHeight-850 , 50 , 50)
heart_2.addImage(heart_1Img)
heart_2.scale = 0.5

}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-20
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+20
}



//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

if(zombie1.collide(player)){
  heart_1.destroy();
}

if(zombie.collide(player)){
  heart_2.destroy();
}
if(zombie2.collide(player)){
  heart_2.destroy();
}

if(zombie3.collide(player)){
  heart_2.destroy();
}


}
