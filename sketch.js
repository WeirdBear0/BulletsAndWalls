var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(800,400);

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  thickness = Math.round(random(22,83));
  bullet = createSprite(100, 200, 20, 5);
  wall = createSprite(700, 200, thickness, 320);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255,255,255);
  console.log(speed);
  console.log(weight);
  console.log(thickness);



}

function draw() {
  background(0,0,0); 
  if(bullet.x-wall.x<bullet.width/2+wall.width/2 && wall.x-bullet.x < wall.width/2 + bullet.width/2 && 
    bullet.y-wall.y<bullet.height/2+wall.height/2 && wall.y-bullet.y < wall.height/2 + bullet.height/2){
    bullet.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    console.log(deformation);
    if(deformation > 10){
      wall.shapeColor = color(255,0,0);
    }
    if(deformation< 10){
      wall.shapeColor = color(0,255,0);
    }
  }
 
  drawSprites();
}