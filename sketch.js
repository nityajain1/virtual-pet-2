var dog,dogimg;
var database,position;
var milk,milkimage;
var button1,button2;
var foodObj;
var fedTime,lastFed;

function preload()
{
  dogimg = loadImage("images/dogImg.png");
  milkimage = loadImage("images/Milk.png");
}

function setup() {
  createCanvas(800, 700);
  dog = createSprite(400,350,20,20);
  dog.addImage(dogimg); 
  dog.scale = 0.1;

  milk = createSprite(100,200,20,20);
  milk.addImage(milkimage);
  milk.scale = 0.1;



  database = firebase.database();
    var dogposition = database.ref("pet/positions");

    dogposition.on("value",readop); 

    foodObj = new Food();

}


function draw() {  
  background("lightpink");
  fedTime = database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed = data.val();
  });
  

  
  drawSprites();
  

}
function readop(data){
  position = data.val();
  dog.x = position.x;
  dog.y = position.y;
}




