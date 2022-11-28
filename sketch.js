var c = "#FFC300";

function setup() {
  createCanvas(550, 550);
  background("#709175");
  
fill("#104f1a");
  stroke("#104f1a");
  strokeWeight(7);
  stroke("#104f1a");
  line(275,400,200,100);
  line(275,400,275,200);
  line(275,400,350,150);
  ellipse(240,170,40,20);
  ellipse(200,200,40,20);
  ellipse(290,240,20,10);
  ellipse(260,220,20,10);
  ellipse(315,190,40,20);
  ellipse(355,220,40,20);
  fill("#104f1a");  
  
}

function draw() {
  
  
  stroke("#7dff92");
  fill("#7dff92");
  triangle(220,300,275,500,330,300);


 stroke("#FF5733");
  textSize(30);
  textFont('Verdana');
  fill("#FFC300");
  text("Color in the bouquet!",120,400);
    
  if (mouseIsPressed) {
    stroke(c);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
    
  }

  noStroke();
  
  fill("#FF5733");
  rect(0, 0, 40, 40);

  fill("#FFC300");
  rect(0, 40, 40, 40);
  
  fill("#C70039");
  rect(40, 0, 40, 40);
}


function mousePressed() {
  if (mouseX > 0 && mouseX < 40 && mouseY > 0 && mouseY < 40) {
  
    c = "#FF5733";
  }
  if (mouseX > 40 && mouseX < 80 && mouseY > 0 && mouseY < 40) {
   
    c = "#C70039";
    
  if (mouseX > 0 && mouseX < 80 && mouseY > 40 && mouseY < 40) {
   
    c = "#C70039";
  }  
  }
}

/*

I ended up not using this part of the code, but I wanted to keep it in

function mouseDragged(){

noStroke();
fill("c");
ellipse(mouseX,mouseY,20,20);
line(275,400,200,100);

}

function keyPressed() {
 if (keyCode === LEFT_ARROW)
  clear();

  {
    


}
 
 */
