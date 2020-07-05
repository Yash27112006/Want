var canvas, backgroundImage;

var gameState = 0;
var thiefCount;
var allThieves;
var distance = 0;
var database;

var form, thief, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
   
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  form = new Form();
  form.display();
  thief = new Thief();
  thief.getCount();
  Thief.getThiefInfo();
}


function draw(){
  background(255);

  if(thiefCount>1){
   readCriminals();
  }

}

function readCriminals(){
  if(allThieves !== undefined){
//    image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
    
    var display_position = 100;
    
    //index of the array
    var index = 0;

    //x and y position of the cars
   // var x = 175 ;
   // var y;

    for(var thief in allThieves){
      //add 1 to the index for every loop
      index = index + 1 ;

      //position the cars a little away from each other in x direction
     // x = x + 200;
      //use data form the database to display the cars in y direction
     // y = displayHeight - allPlayers[plr].distance;
     // cars[index-1].x = x;
     // cars[index-1].y = y;

     /* if (index === player.index){
        cars[index - 1].shapeColor = "red";
        camera.position.x = displayWidth/2;
        camera.position.y = cars[index-1].y;
        stroke(10);
        fill("red");
        ellipse(x,y,60,60);
      }*/
     
      textSize(15);
     
      text(allThieves[thief].Name + ": " + allThieves[thief].Age +":" + allThieves[thief].Gender +":"+
      allThieves[thief].imagePath +":"+ allThieves[thief].addressOfLastCrime, 620,display_position)
      console.log(allThieves[thief].Name);
      console.log(allThieves[thief].Age);
      console.log(allThieves[thief].Gender);
      console.log(allThieves[thief].imagePath);
      console.log(allThieves[thief].addressOfLastCrime);

      image();
      
      }


  }
}