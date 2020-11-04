class rope {
    constructor(bodyA, bodyB, pointB) {
        var options = {
            bodyA: bodyA,
            // bodyB: bodyB,
            pointB: pointB,
            stiffness: 0.04,
            length: 350
        }
        this.rope = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.rope);
    }
    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        stroke(random(100,200),random(150,255),random(100,200));
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
