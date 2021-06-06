const canvas = document.querySelector("#gamefield")
const ctx = canvas.getContext("2d")

let game = new Game()
game.fillCanvas()
// dead_color = `#181818`;
// alive_color = `#2E8BC0`;
// ctx.fillStyle = alive_color;
// ctx.fillRect(0, 0, 5, 5);
// ctx.fillRect(0, 5, 5, 5);
// ctx.fillRect(495, 10, 5, 5);
// ctx.fillRect(5, 5, 5, 5);
// ctx.fillRect(10, 10, 5, 5);

// const game = new GameOfLife()
// game.gameSetUp()

// window.onload = () => {

//     document.querySelector("#start-random").addEventListener("click", () => {
//         game.arrayRandomize();
//         game.fillArray();
//         window.setInterval(() => {
//             game.runGame();
//         }, 300)
//     })

//     document.querySelector("#stop").addEventListener("click", () => {
//         game.gameSetUp();
//     })

// }