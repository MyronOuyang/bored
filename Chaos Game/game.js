class ChaosGame {
    constructor() {
        this.start = [
            [180, 80],
            [320, 80],
            [250, 400],
            [100, 250],
            [400, 250],
        ]
        // this.start = [
        //     [5, 10],
        //     [495, 10],
        //     [495, 490],
        //     [5, 490],
        // ]
        this.current = [400, 400]
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    calcDistance(curr, point) {
        let x = (point[0] - curr[0]) / 4;
        let y = (point[1] - curr[1]) / 4;
        return [x,y]
    }

    randomDraw() {
        let endPoint = this.start[this.getRandomInt(5)]
        let distance = this.calcDistance(this.current, endPoint) 
        let nextPoint = [endPoint[0] - distance[0], endPoint[1] - distance[1]]
        this.current = nextPoint
        this.draw()
    }

    draw() {
        ctx.fillStyle = '#fe483a';
        ctx.fillRect(this.current[0], this.current[1], 5, 5);
    }

    fillCanvas() {
        for (let i = 0; i < this.start.length; i++) {
            ctx.fillStyle = '#2E8BC0';
            ctx.fillRect(this.start[i][0], this.start[i][1], 5, 5);
        }
    }
}
