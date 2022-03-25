
var BackgroundImage;
var music;

function preload(){
 BackgroundImage = loadImage("BG.jpg")
 music = loadSound("Luka's Tune for Marinette.mp3")

}
function setup() {
  createCanvas(700,750);
    music.play();
}

function draw() {
  background(BackgroundImage); 
  drawSprites();
}