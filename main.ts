input.onButtonPressed(Button.A, function () {
    jokalaria.move(-1)
})
input.onButtonPressed(Button.B, function () {
    jokalaria.move(1)
})
let meteorito: game.LedSprite = null
let jokalaria: game.LedSprite = null
jokalaria = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(randint(500, 750))
    meteorito = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(100)
        meteorito.change(LedSpriteProperty.Y, 1)
    }
    if (meteorito.isTouching(jokalaria)) {
        music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
        game.gameOver()
    }
    basic.pause(200)
    game.addScore(1)
    music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
    meteorito.delete()
})
