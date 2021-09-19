var bg,bgimg,sisterimg,boyimg,snowflakeimg,snowmanimg

function preload(){

  bgimg = loadImage ("snow1.jpg")
  snowimg = loadImage ("snow5.webp")
  boyimg = loadImage ("boy2.png.png")
  }
 

function setup() {
  createCanvas(800,600);


 bg =  createSprite(400, 300, 800, 600);
  bg.addImage(bgimg);
bg.scale = 2
boy = createSprite(600,300,20,20);
boy.addImage(boyimg)
boy.scale = 1
}

function draw() {
  background(0); 
  
  if(keyCode === 32){

boy.velocityX = -4

  }
  spawnsnowflakes();


  drawSprites();
}


function spawnsnowflakes() {
  
  if (frameCount % 60 === 0) {
    var snow = createSprite(600,0,40,10);
    snow.x = Math.round(random(80,520));
    snow.addImage(snowimg);
    snow.scale = 0.1;
    snow.velocityY = 6;
    
  
    snow.lifetime = 100;
  
  }   
}