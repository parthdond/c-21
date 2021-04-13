var fixedRect,movingRect,fixedRect1;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect.shapecolour="green";
  movingRect= createSprite(400, 200, 80, 30);
  movingRect.shapecolour="green";
  fixedRect1 = createSprite(400,200,30,80);
  fixedRect1.shapecolour="green"
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

 if( isTouching(fixedRect,movingRect)){
  
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";

 }
 else if(isTouching(fixedRect1,movingRect)){
   movingRect.shapeColor="blue";
    fixedRect1.shapeColor="blue";
 }
else{
  movingRect.shapeColor="green";
  fixedRect1.shapeColor="green";
  fixedRect.shapeColor="green";
}

  drawSprites();
}

function isTouching(rect1,rect2){
  if((rect1.x-rect2.x<rect1.width/2+rect2.width/2 )
  && (rect1.x-rect2.x<rect1.width/2+rect2.width/2 )&&
  (rect2.y-rect1.y<rect1.height/2+rect2.height/2 )
  && (rect1.y-rect2.y<rect1.height/2+rect2.height/2 )){
   
  return true;
  }
  else{
    
   return false;
  
  }


}
