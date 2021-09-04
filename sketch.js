var RunnerImg, Runner, pathImg, path, coin, coinImg, coinscore, song, slider, bomb, bombImg, energyDrink, energyDrinkImg;

function preload(){
 
  RunnerImg=loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg=loadImage("path.png");
  coinImg=loadImage("coin.png");
  energyDrinkImg=loadImage("energyDrink.png");
  bombImg=loadImage("bomb.png");
}

function setup(){
  createCanvas(400,400);

  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30;
  Runner=createSprite(180,340,50,170);
  Runner.addAnimation("running", RunnerImg);
  Runner.scale = 0.1;

  //creating coin
  coin=createSprite(200,20,80,90);
  coin.addImage(coinImg);
  coin.scale=0.4;
  coin=createSprite(100,20,80,90);
  coin.addImage(coinImg);
  coin.scale=0.4;
  coin=createSprite(300,20,80,90);
  coin.addImage(coinImg);
  coin.scale=0.4;

   //creating bomb
  bomb=createSprite(200,70,80,90);
  bomb.addImage(bombImg);
  bomb.scale=0.08;
  bomb=createSprite(100,70,80,90);
  bomb.addImage(bombImg);
  bomb.scale=0.08;
  bomb=createSprite(300,70,80,90);
  bomb.addImage(bombImg);
  bomb.scale=0.08;

//creating energyDrink
energyDrink=createSprite(200,130,80,90);
energyDrink.addImage(energyDrinkImg);
energyDrink.scale=0.13;
energyDrink=createSprite(100,130,80,90);
energyDrink.addImage(energyDrinkImg);
energyDrink.scale=0.13;
energyDrink=createSprite(300,130,80,90);
energyDrink.addImage(energyDrinkImg);
energyDrink.scale=0.13;
}


function draw() {
background(0);

  Runner.x=World.mouseX;
  if(path.y>400) {
  path.y=height/2 ;
  
}
  
drawSprites();
}
