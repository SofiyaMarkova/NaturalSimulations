var Walker = function() {
    this.x = width/2;
    this.y = height/2;
};

Walker.prototype.display = function() {
    stroke(0, 0, 0);
    point(this.x, this.y);
};

// Randomly move right, left, down or up
Walker.prototype.walk = function() {
    var r = random(1);
    
    //adjusted logic accoridng to rules 
    if (r < 0.1) {
      this.x++;
    } else if (r < 0.2) {  //20% chance walking down
      this.x--;
    } else if (r < 0.4) { //40% chance left the other
      this.y++;
    } else {
      this.y--;
    }
};

var w = new Walker();

draw = function() {
    w.walk();
    w.display();
};
