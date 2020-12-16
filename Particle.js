// JavaScript source code
class Particle {
    constructor(x, y) {
        this.body = Bodies.circle(x, y, 5);
        this.color = Colors[round(random(0, 4))];
        this.scoreAdded = false;
        World.add(world, this.body);
    }

    display() {
        fill(this.color);
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        circle(0, 0, 10);
        pop();
        fill("black");

        if (this.scoreAdded)
            return;

        if (this.body.position.y > 550) {
            var x = this.body.position.x;

            if (x < 80) {
                score += 80;
            }
            else if (x < 120) {
                score += 60;
            }
            else if (x < 160) {
                score += 40;
            }
            else if (x < 200) {
                score += 20;
            }
            else if (x < 240) {
                score += 10;
            }
            else if (x < 280) {
                score += 20;
            }
            else if (x < 320) {
                score += 40;
            }
            else if (x < 360) {
                score += 60;
            }
            else if (x < 400) {
                score += 80;
            }

            this.scoreAdded = true;
        }
    }
}