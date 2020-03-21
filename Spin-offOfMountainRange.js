    var xOff = 0;
    
    for (var x = 0; x < width; x+= 2) {
       
        var yOff = 0.0;
       
        for (var y = 0; y < 180; y+=2) {
            
            var bright = map(noise(xOff, yOff), 0, 1, -200, 283);
           
            stroke(255, 255, 255, bright);
            point(x, y);
            
            yOff += 0.1;
        }
        xOff += 0.01;
    }


var drawRange = function() {
    stroke(199, 162, 162);
    var incAmount = 0.01;
    for (var t = 0; t < (incAmount*width)+10; t += incAmount) {
        var n = noise(t);
        var y = map(n, 1.4, 0.55, 0, height/2);
        rect(t*50, height-y, 1, y);
    }
};

var drawRange2 = function(){
    stroke(204, 25, 25);
    var incAmount = 0.01;
    for (var t = 0; t < (incAmount*width)+10; t += incAmount) {
        var n = noise(t);
        var y = map(n, 1.4, 0.2, -4, height/2);
        rect(t*100, height-y, 1, y);
    }
};


drawRange();
drawRange2();



var generator = new Random(1);
var standardDeviation = 60;
var mean = 0;
var count = 0;

var bird = function() {
    this.x = 350;
    this.y = 100;
};

bird.prototype.display = function() {
    noFill();
    strokeWeight(2);
    stroke(28, 214, 34);
    arc(this.x, this.y, 10, 6, 180, 360);
    arc(this.x+10, this.y, 10, 6, 180, 360);
    
};

// Randomness
bird.prototype.move = function() {
    var numX = generator.nextGaussian();
    var numY = generator.nextGaussian();
    var xStepSize = standardDeviation * numX + mean;
    var yStepSize = standardDeviation * numY + mean;
  
    this.x += xStepSize;
    this.y += yStepSize;
    
    if (this.y > 150)
    {
        this.y = 20;
    }
};

var b = new bird();

//display birds
for (var i = 0; i<200; i++){
    b.move();
    b.display();
}


