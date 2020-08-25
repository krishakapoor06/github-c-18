//Global Variables
var monkey_running;
var monkey,bananaGroup, stoneGroup,bg
var bananaImage,stoneImage,bgImage
var score = 0


function preload(){
  bgImage = loadImage("jungle.jpg")

  monkey_running = loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png" )

  bananaImage = loadImage("Banana.png")
  stoneImage = loadImage("stone.png")
  
}


function setup() {
  createCanvas(600,300);

 monkey = createSprite(50,180,20,50)
 monkey.addAnimation("running", monkey_running);

  bg = createSprite(250,103,20,20); 
  bg.addImage("jungle", bgImage);
  bg.x = bg.width/2;
  bg.velocityX = -2

  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

  bananaGroup = new Group();
 stoneGroup = new Group ();
}


function draw(){
 background(255);

 text("Score: "+ score, 500, 50);

  if (monkey.isTouching(bananaGroup)) {
   bananaGroup.destroyEach();
score = score+2

 switch (score) {
   case 10: monkey.scale = 0.12;
     break;
   case 20: monkey.scale = 0.14;
     break;
   case 30: monkey.scale = 0.16;
     break;
   case 40: monkey.scale = 0.18;
     break; 
 }

  } 
  
 if (monkey.isTouching(stoneGroup)) {
 monkey.scale = 0.10
 }


stone();
banana();

 drawSprites();
}

function stone () {
  if(frameCount % 300 === 0) {
    var stone1 = createSprite(600,265,10,10);
    stone1.velocityX = -6;
    stone1.addImage(stoneImage);

    //assign scale and lifetime to the obstacle           
     stone1.scale = 0.1;
     stone1.lifetime = 70;
    //add each obstacle to the group
  stoneGroup.add(stone);
  }
}

function banana(){
 if (frameCount % 120 === 0) {
    var banana1 = createSprite(400,320,40,10);
    banana1.y =  Math.round(random(280,320));
    banana1.addImage(bananaImage);
    banana1.scale = 0.05;
    banana1.velocityX = -3;

     //assign lifetime to the variable
    banana1.lifetime = 134;

    bananaGroup.add(banana);
  }
}