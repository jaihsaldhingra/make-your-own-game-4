var background
var car
var gold
 var goldgroup

function preload(){
  backgroundImg=   loadImage("car background.jpeg");
 carImg= loadImage("sprite_00.png")
 goldImg= loadImage("sprite_0.png")
 opsticleImg= loadImage("download (1).jpeg")
 opsticleImg2= loadimage("barricate.png")
}

function setup() {
  createCanvas(1500, 900);
  
  
  
  
  
  bg = createSprite(750,450,1500,2500);
  bg.addImage(backgroundImg);
  bg.scale=1.5
  bg.y= 0
 bg.velocityY=3
 car = createSprite(200,100,40,40)
  car.addImage(carImg)

}

function draw() {
  background('red')
 if(bg.y>=800){
   bg.y=450
 }
  if (keyDown ("RIGHT_ARROW")){
    car.x=car.x+10
  }
  if (keyDown ("LEFT_ARROW")){
    car.x=car.x-10
  }

  goldgroup=new Group();
  drawSprites();
}

  function spawnObstacles(){
    if (frameCount % 60 === 0){
      var obstacle = createSprite(400,165,10,40);
      obstacle.velocityY = +6;
      
       //generate random obstacles
       var rand = Math.round(random(1,6));
       switch(rand) {
         case 1: obstacle.addImage(obsticleImg);
                 break;
         case 2: obstacle.addImage( opsticleImg2);
                 break;
         
               
         default: break;
       }
}
  }



 function spawngold() {
  //write code here to spawn the clouds
   if (frameCount % 60 === 0) {
     gold = createSprite(600,0,40,10);
    gold.x = Math.round(random(100,1400));
    gold.addImage(goldImg);
    gold.scale = 0.5;
    gold.velocityY = 3;
    
     //assign lifetime to the variable
    gold.lifetime = 134;
    
    //adjust the depth
    
    
    //adding cloud to the group
   goldGroup.add(gold);
    }
  }