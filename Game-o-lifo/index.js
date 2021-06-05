const canvas = document.querySelector("#gamefield")
const ctx = canvas.getContext("2d")

dead_color = `#181818`;
alive_color = `#FF756B`;
ctx.fillStyle = alive_color;
ctx.fillRect(5, 5, 5, 5);

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