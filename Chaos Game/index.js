const canvas = document.querySelector("#gamefield")
const ctx = canvas.getContext("2d")

let game = new ChaosGame()

game.fillCanvas()
game.draw()
// game.randomDraw()
// game.randomDraw()
window.onload = () => {
    window.setInterval(() => {
        game.randomDraw()
    }, 1)
}
