angleMode = "radians";	

var spin = 0;

draw = function() {
    background(133, 41, 41);
    
    pushMatrix();
   
    translate(200, 200);
    
    rotate(PI+spin);
   
    spin += 0.1;
   
    fill(127, 127, 127);
    stroke(0, 0, 0);
    line(-50, 0, 50, 0);
    strokeWeight(2);
    ellipse(-50, 0, 16, 16);
    ellipse(50, 0, 16, 16);
    popMatrix();
};