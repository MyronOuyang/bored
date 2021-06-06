class Game {
    constructor() {
        this.grid = new Array(102);
        this.dead = `#181818`;
        this.alive = `#2E8BC0`;
        this.size = 5;
        for (let i = 1; i < this.grid.length - 1; i++) {
            this.grid[i] = new Array(102);
            for (let j = 1; j < this.grid[i].length - 1; j++) {
                this.grid[i][j] = this.randomStart(.95)
            }
        }
    }

    checkNeighbours(row, col) {
        let numAlive = 0
        for (let i = row - 1; i <= row + 1; i++) {
            if (typeof (this.grid[i]) !== "undefined") {
                for (let j = col - 1; j <= col + 1; j++) {
                    if (typeof (this.grid[i][j]) !== "undefined" && !(i == row && j == col) && this.grid[i][j] > 0) {
                        numAlive += 1;
                    }
                }
            }
        }

        if (this.grid[row][col] == 1) {
            if (numAlive < 2) {
                this.grid[row][col] = 0
            } else if (numAlive > 3) {
                this.grid[row][col] = 0
            }
        } else {
            if (numAlive == 3) {
                this.grid[row][col] = 1
            }
        }
    }

    roundPass() {
        for (let i = 1; i < this.grid.length - 1; i++) {
            for (let j = 1; j < this.grid[i].length - 1; j++) {
                this.checkNeighbours(i, j);
            }
        }
        this.fillCanvas()
    }

    randomStart(prob) {
        let res = 0;
        let ran = Math.random();
        if (ran > prob) {
            res = 1;
        }
        return res
    }

    fillCanvas() {
        for (let i = 1; i < this.grid.length - 1; i++) {
            for (let j = 1; j < this.grid[i].length - 1; j++) {
                if (this.grid[i][j] > 0) {
                    ctx.fillStyle = this.alive;
                } else {
                    ctx.fillStyle = this.dead;
                }
                ctx.fillRect(i * this.size, j * this.size, this.size, this.size);
            }
        }
    }
}
