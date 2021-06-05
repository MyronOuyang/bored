this.fillArray = () => {

    for (let i = 0; i < this.cells_in_rows; i++) {
        for (let j = 0; j < this.cells_in_column; j++) {
            let color;
            if (this.active_array[i][j] == 1)
                color = this.alive_color;
            else
                color = this.dead_color;
            ctx.fillStyle = color;
            ctx.fillRect(1, 1, 5, 5);
        }
    }

};