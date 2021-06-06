const canvas = document.querySelector("#gamefield")
const ctx = canvas.getContext("2d")

let game = new Game()

window.onload = () => {
    window.setInterval(() => {
        game.roundPass()
    }, 50)
}
