var Walker = function() {
    this.position = new PVector (width/2, height/2);
};


Walker.prototype.display = function() {
    //size and colour
    strokeWeight(3);
    stroke(0, 0, 0);
    //creating point and the correct position
    point(this.position.x, this.position.y);
};
Walker.prototype.walk = function() {
    //randomizing and x and y value and holding it as PVector
    var velocity = new PVector(random(-5, 5), random(-5, 5));
    //adding the velocity to change the position of the new point
    this.position.add(velocity);
};


var w = new Walker();

draw = function() {
    w.walk();
    w.display();
};
