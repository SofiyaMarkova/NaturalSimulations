//variables used
var maxDir = PVector.sub (new PVector (0, 0), new PVector (width-1, height-1));
var maxMag = maxDir.mag();

//to move
var Mover = function() {
    this.position = new PVector(width/2, height/2);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};

Mover.prototype.update = function() {
    var m = new PVector(random(400), random(400));
    var dir = PVector.sub(m, this.position);
    var closeness = (maxMag - dir.mag()) / maxMag;
    dir.normalize();
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(5);
    this.position.add(this.velocity);
};

//make object moving
Mover.prototype.display = function() {
    stroke(0, 0, 0);
    strokeWeight(100);
    ellipse(this.position.x-28, this.position.y, 20, 20);
};

Mover.prototype.checkEdges = function() {
 };


//actually use all the functions to make animation
var mover = new Mover();

draw = function() {
    background(232, 5, 5);
    mover.update();
    mover.display(); 
};