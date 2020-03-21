angleMode = "radians";

//properties of object moving
var Bug = function() {
    //gives the bug angle velocity,amplitude, position
    this.a = 0;
    this.angVelocity = 0;
    this.angle = new PVector();
    this.velocity = new PVector(random(-0.05, 0.05), random(-0.05, 0.05));
    this.amplitude = new PVector(random(20, width/2), random(20, width/2));
    this.position = new PVector(0, 0);
};

//oscillating
Bug.prototype.oscillate = function() {
    //uses this to set values for specific iteration of the object 
    this.angle.add(this.velocity);
    this.position.set(
                sin(this.angle.x) * this.amplitude.x,
                sin(this.angle.y) * this.amplitude.y);
    var distance = this.position.mag();
    this.angVelocity += distance / 1000000;
    this.angVelocity = constrain(this.angVelocity, 0, 0.1);
    this.a += this.angVelocity;
};

//displaying
Bug.prototype.display = function() {
    //drawing the bug
    pushMatrix();
    translate(width/2, height/2);
    stroke(20, 1, 1);
    strokeWeight(4);
    imageMode(CENTER);
    translate(this.position.x, this.position.y);
    rotate(this.a);
    fill(0, 0, 0);
    //head
    ellipse(-28, 0, 20, 20);
    fill(255, 0, 0);
    //body
    ellipse(0, 0, 48, 48);
    fill(0, 0, 0);
    
    
    popMatrix();
};

//declaring array for new bugs
var bug = [];
//creating new bugs at randomized locations
for (var i = 0; i < 2; i++) {
    bug[i] = new Bug(random(0.1, 2), random(width), random(height));
}


//function that draws the object each time
draw = function() {

//loop for each object to make it display and oscillating action
    for (var i = 0; i < bug.length; i++){
        bug[i].display();
        bug[i].oscillate();
    }
    
    
};