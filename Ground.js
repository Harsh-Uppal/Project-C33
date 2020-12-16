class Ground {
    constructor(x, y, width, height) {
        this.vals = { width: width, height: height };
        this.body = Bodies.rectangle(x, y, width, height, { isStatic: true });
        World.add(world, this.body);
    }

    display() {
        fill("white");
        rect(this.body.position.x, this.body.position.y, this.vals.width, this.vals.height);
        fill("black");
    }
}