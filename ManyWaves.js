angleMode = "radians";

var Wave = function(amplitude, period, color) {
    this.startAngle = 0;
    this.amplitude = amplitude;
    this.period = period;
    this.color = color;
    this.angleVel = (TWO_PI / this.period) * 5;
};

Wave.prototype.update = function() {
    this.startAngle += TWO_PI / this.period;
};

Wave.prototype.draw = function() {
    var angle = this.startAngle;
    fill(this.color);
    
    for (var x = 0; x<= width; x+= 19){
        var y = this.amplitude * sin(angle);
        ellipse(x, y+height/2, 42, 42);
        angle+= this.angleVel;
    }
};

var wave = new Wave(200, 175, color(255, 0, 0, 100));


translate(0, height/2);

var wave1 = new Wave(126, width-60, color(46, 82, 79));

draw = function() {
    background(255);
    wave.update();
    wave.draw();
    wave1.update();
    wave1.draw();
};

