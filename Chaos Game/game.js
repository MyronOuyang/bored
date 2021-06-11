class ChaosGame {
    constructor() {
        this.start = [
            [250, 50],
            [125, 400],
            [375, 400],
        ]
        this.current = []
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    calcDistance(curr, point) {
        let a = curr[0] - point[0];
        let b = curr[1] - curr[1];
        let c = Math.sqrt( a*a + b*b );
        return c
    }

    calcAngle(curr, point) {
        let dy = curr[1] - point[1]
        let dx = curr[0] - point[0]
        let theta = Math.atan(dy / dx)
        return theta
    }

    calcPoint(curr, distance, angle) {
        let xx = curr[0] + (distance * cos(angle))
        let yy = curr[0] + (distance * sin(angle))
        return [xx, yy]
    }

    randomDraw() {
        let endPoint = this.start[getRandomInt(3)]
        let angle = this.calcAngle(this.current, endPoint)
        let distance = this.calcDistance(this.current, endPoint) / 2
        let nextPoint = this.calcPoint(this.current, distance, angle)
        this.draw(nextPoint)
        this.current = nextPoint
    }

    draw(curr) {
        ctx.fillStyle = '#fe483a';
        ctx.fillRect(curr[0], [1], 10, 10);
    }

    fillCanvas() {
        for (let i = 0; i < this.start.length; i++) {
            ctx.fillStyle = '#2E8BC0';
            ctx.fillRect(this.start[i][0], this.start[i][1], 10, 10);
        }
    }
}
