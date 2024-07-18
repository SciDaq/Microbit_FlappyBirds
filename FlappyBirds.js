function CheckHit () {
    for (let obstacle3 of obstacle) {
        if (obstacle3.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && obstacle3.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            game.setScore(score)
            music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            game.gameOver()
        }
    }
}
function BuildObstacle () {
    for (let obstacle2 of obstacle) {
        obstacle2.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        emptyObstacleY = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != emptyObstacleY) {
                obstacle.push(game.createSprite(4, index))
            }
        }
        score += 1
    }
}
input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, 1)
})
let emptyObstacleY = 0
let score = 0
let Bird: game.LedSprite = null
let obstacle: game.LedSprite[] = []
let ticks = 0
let index = 0
ticks = 0
obstacle = []
Bird = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Blink, 300)
score = 0
basic.forever(function () {
    while (obstacle.length > 0 && obstacle[0].get(LedSpriteProperty.X) == 0) {
        obstacle.removeAt(0).delete()
    }
    BuildObstacle()
    CheckHit()
    ticks += 1
    basic.pause(1000)
})
