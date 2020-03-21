angleMode = "radians";

var Spaceship = function() {
    this.position = new PVector(width/2, height/2);
    this.velocity = new PVector(0, -0.5);
    this.acceleration = new PVector(0, 0);
    this.color = color(random(255), random(255), random(255), 127);
    this.topspeed = 6;
    this.xoff = 1000;
    this.yoff = 0;
    this.r = 10;
};


//left rotate
Spaceship.prototype.rotateLeft = function(){
    var left = this.velocity.get();
    left.rotate(-PI/4);
    this.applyForce(left);
};

//right rotate
Spaceship.prototype.rotateRight = function(){
    var right = this.velocity.get();
    right.rotate(PI/4);
    this.applyForce(right);
};


//increasing speed by adding acceleration, and changing the position using the new speed
Spaceship.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};


Spaceship.prototype.display = function() {
    var angle = this.velocity.heading();
    
    stroke(0);
    strokeWeight(2);
    fill(247, 247, 247);
    
    pushMatrix();
    translate(this.position.x, this.position.y);
    rotate(angle + PI/2);
    triangle(20, 100, 60, 100, 40, 57);
    rect(24, 100, 10, 8);
    rect(44, 100, 10, 8);
    
    popMatrix();
};


var spaceship = new Spaceship();

//functions
keyPressed = function(){
    if (keyCode === LEFT ){
        spaceship.rotateLeft();
    }
    else if (keyCode === RIGHT){
        spaceship.rotateRight();
    }
    
   
    
};

draw = function() {
    background(0, 0, 0);
    spaceship.update();
    spaceship.display();
    
};