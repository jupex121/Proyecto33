class Particle {
    constructor(x, y, r) {
        var options = {
            restitution: 0.4,
            friction: 0
        }
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image=loadImage("barrel.png");
        this.color = color(random(0, 255), random(0,255), random(0, 255));
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(this.image, 0, pos.y ,this.r*2, this.r*2);
        pop();
    }

};