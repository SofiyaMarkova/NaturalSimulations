var Walker = function() {
    this.x = width/2;
    this.y = height/2;
};

Walker.prototype.display = function() {
    fill(28, 37, 199);//set color
    noStroke(); //turn off outlines for shapes
    ellipse(this.x, this.y, 37, 61); //make the shape
};

// Randomly move right, left, down, or up
Walker.prototype.walk = function() {
    var choice = floor(random(4));
    if (choice === 0) {
        //move right
        this.x+=8; //made faster
    } else if (choice === 1) {
        //move left
       this.x-=66; 
    } else if (choice === 2) {
        //move down
        this.y+=20;
    } else {
        //move up
         this.y-=100;
    } 
};

var w = new Walker();

draw = function() {
    w.walk();
    w.display();
};
