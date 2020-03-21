//variables (like in Gaussian walk)
var generator = new Random(1);
var standardDeviation = 2;
var mean = 0; 
    
    //starting point for splatter
    var dot = function() {
            this.x = 121;
            this.y = 64;
    };
    
    //display
    dot.prototype.display = function() {
        
        var side = random(4);
        noStroke();
        
        var fillR = generator.nextGaussian()*10;
        var red = standardDeviation * fillR + mean;
        fill(76, 0, 189);
rect(this.x, this.y, side, side);
    };

//Gaussian
dot.prototype.splatter = function() {
    var numX = generator.nextGaussian();
    var numY = generator.nextGaussian();
    var xMove = standardDeviation * numX + mean;
    var yMove = standardDeviation * numY + mean;
    
    
    this.x += xMove;
    this.y += yMove;

};


var p = new dot();

draw = function() {
    p.splatter();
    p.display();
};