
var Ball = function(m, x, y) {
    this.mass = m;
    this.position = new PVector(x, y);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
    this.color = color(random(255), random(255), random(255), 127);
};

Ball.prototype.applyForce = function(force) {
    var f = PVector.div(force, this.mass);
    this.acceleration.add(f);
};


Ball.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};


Ball.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
};


Ball.prototype.calculateWallForce = function() {
    var xForce = 0;
    var yForce = 0;
 
    if (this.position.x > width) {
        xForce = -1;
    }
    
     else if (this.position.x < 0) {
        xForce = 1;
    }
  
    if (this.position.y > height) {
        yForce = -1;
    }
   
     else if (this.position.y < 0) {
        yForce = 1;
    }

    return new PVector (xForce, yForce);
    
};


var balls = [];


for (var i = 0; i < 20; i++) {
    balls[i] = new Ball(random(0.1, 5), 0, 0);
}

var wind = new PVector(0.01, 0);
var gravity = new PVector(0, 0.1);

draw = function() {
    background(255, 255, 255);
    

    for (var i = 0; i < balls.length; i++) {
        balls[i].applyForce(wind);
        balls[i].applyForce(gravity);
        balls[i].applyForce(balls[i].calculateWallForce());
        balls[i].update();
        balls[i].display();
    }
};