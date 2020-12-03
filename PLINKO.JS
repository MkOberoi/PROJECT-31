class Plinko{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic: true
        }
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("white");
        this.body = Bodies.circle(x, y, radius, options);
        this.color = color(random(0,255),random(0,255),random(0,255),random(0,255))
        pop();
      }
}