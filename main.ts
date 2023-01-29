namespace SpriteKind {
    export const Decoration = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    gamestarted = 0
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
})
let fireball: Sprite = null
let LevelNumber: Sprite = null
let Level: Sprite = null
let player1: Sprite = null
let gamestarted = 0
sprites.destroyAllSpritesOfKind(SpriteKind.Player)
scene.setBackgroundImage(assets.image`Starsbg`)
let mySprite = sprites.create(assets.image`title`, SpriteKind.Decoration)
mySprite.setPosition(78, -10)
animation.runMovementAnimation(
mySprite,
animation.animationPresets(animation.flyToCenter),
2000,
false
)
music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
let pressatoplay = sprites.create(assets.image`pressatoplay`, SpriteKind.Decoration)
pressatoplay.setPosition(80, 81)
animation.runMovementAnimation(
pressatoplay,
animation.animationPresets(animation.bobbing),
2000,
true
)
let candostuff = 1
game.onUpdate(function () {
    if (controller.right.isPressed()) {
        player1.x += 1
    }
})
game.onUpdate(function () {
    if (controller.right.isPressed()) {
        player1.x += 1
    }
})
game.onUpdate(function () {
    if (controller.left.isPressed()) {
        player1.x += -1
    }
})
game.onUpdate(function () {
    if (controller.left.isPressed()) {
        player1.x += -1
    }
})
game.onUpdate(function () {
    if (controller.up.isPressed()) {
        player1.y += -1
    }
})
game.onUpdate(function () {
    if (controller.up.isPressed()) {
        player1.y += -1
    }
})
game.onUpdate(function () {
    if (controller.down.isPressed()) {
        player1.y += 1
    }
})
game.onUpdate(function () {
    if (controller.down.isPressed()) {
        player1.y += 1
    }
})
forever(function () {
    if (controller.A.isPressed() && (gamestarted == 0 && candostuff == 1)) {
        gamestarted = 1
        sprites.destroyAllSpritesOfKind(SpriteKind.Decoration)
        music.stopAllSounds()
        scene.setBackgroundImage(assets.image`nothing`)
        Level = sprites.create(assets.image`level`, SpriteKind.Decoration)
        LevelNumber = sprites.create(assets.image`0`, SpriteKind.Decoration)
        LevelNumber.x += 19
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        pause(500)
        sprites.destroyAllSpritesOfKind(SpriteKind.Decoration)
        scene.setBackgroundImage(assets.image`Starsbg`)
        player1 = sprites.create(assets.image`player`, SpriteKind.Player)
        player1.setPosition(80, 81)
        player1.setStayInScreen(true)
        fireball = sprites.create(assets.image`fireball`, SpriteKind.Enemy)
        fireball.setBounceOnWall(true)
        fireball.setPosition(randint(0, 160), randint(0, 160))
        fireball.setVelocity(player1.x - fireball.x, player1.y - fireball.y)
    }
})
