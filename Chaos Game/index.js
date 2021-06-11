const canvas = document.querySelector("#gamefield")
const ctx = canvas.getContext("2d")

let game = new ChaosGame()

game.fillCanvas()
// window.onload = () => {
//     window.setInterval(() => {
//         game.roundPass()
//     }, 50)
// }
