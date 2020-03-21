var generator = new Random(1); //made variable generator that makes a random num
var standardDeviation = 2; //standardDeviation set to 2 as says
var mean = 0; //mean set to 0 as says

var Walker = function() {
    this.x = width/2;
    this.y = height/2;
};

Walker.prototype.display = function() {
    strokeWeight(3);
    stroke(0, 0, 0);
    point(this.x, this.y);
};

// Randomly move up, down, left, right, or stay in one place
Walker.prototype.walk = function() {
    var numX = generator.nextGaussian();
    var numY = generator.nextGaussian();
    var xStepSize = standardDeviation * numX + mean;
    var yStepSize = standardDeviation * numY + mean;
  
    this.x += xStepSize;
    this.y += yStepSize;
};

var w = new Walker();

draw = function() {
    w.walk();
    w.display();
};
