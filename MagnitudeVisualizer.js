mouseMoved = function() {
    background(255, 255, 255);
    
    var mouse = new PVector(mouseX, mouseY);
    
   
    var distance = dist(0, 0, width, height);
    
    var m = mouse.mag();
    
    var a = map(m, 0, distance, 0, 255);
    background(a, a, a);
    
    
    stroke(255, 0, 0);
    strokeWeight(3);
    line(0, 0, mouse.x, mouse.y);
    
   
    fill(255, 0, 0);
    text(m, mouse.x, mouse.y);
};