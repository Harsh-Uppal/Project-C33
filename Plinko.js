// JavaScript source code
class Plinko {
    constructor(x, y) {
        this.body = Bodies.circle(x, y, 5, { isStatic: true });
        World.add(world, this.body);
    }

    display() {
        push();
        fill("white")
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        circle(0, 0, 10);
        fill("black");
        pop();
    }
}