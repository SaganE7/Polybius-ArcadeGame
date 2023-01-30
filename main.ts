namespace SpriteKind {
    export const Decoration = SpriteKind.create()
    export const Background = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (indevmodemenu == 1 && (info.score() == 0 && gamestarted == 0 && (canyesno == 1 && candostuff == 0))) {
        scoremod = 1
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() == 0 && gamestarted == 0 && (canyesno == 1 && candostuff == 0)) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Decoration)
        scene.setBackgroundImage(assets.image`nothing`)
        devmodeicon = sprites.create(assets.image`devmode`, SpriteKind.Decoration)
        indevmodemenu = 1
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
        game.showLongText("Welcome to the Dev Mode Menu! INSTRUCTIONS: Read this, remember the keybinds, press \"A\" to exit the dialogue, then using the keybinds while it still says \"DEV MODE\", toggle dev features on and off. Have fun!        KEYBINDS: UP = Enable scoremod (B to add 1 to score) ; DOWN = Always invulnerable ; A to exit", DialogLayout.Bottom)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (indevmodemenu == 1 && (info.score() == 0 && gamestarted == 0 && (canyesno == 1 && candostuff == 0))) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Decoration)
        indevmodemenu = 0
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (invulnerable == 0) {
        if (info.score() > info.highScore()) {
            HighScore = info.score()
        }
        info.setScore(0)
        gamestarted = 0
        candostuff = 0
        canyesno = 0
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
        scene.setBackgroundImage(assets.image`nothing`)
        gameover = sprites.create(assets.image`gameover`, SpriteKind.Decoration)
        pause(100)
        canyesno = 1
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (indevmodemenu == 1 && (info.score() == 0 && gamestarted == 0 && (canyesno == 1 && candostuff == 0))) {
        invulnerable = 69
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    }
})
let picture: Image = null
let fireball2: Sprite = null
let FireSquareVelocityMultiplier = 0
let fireball: Sprite = null
let LevelNumber: Sprite = null
let Level: Sprite = null
let flagfiresquarespawned = 0
let player1: Sprite = null
let gameover: Sprite = null
let HighScore = 0
let invulnerable = 0
let devmodeicon: Sprite = null
let scoremod = 0
let gamestarted = 0
let indevmodemenu = 0
let candostuff = 0
let canyesno = 0
info.setScore(0)
canyesno = 0
candostuff = 0
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
canyesno = 1
game.onUpdate(function () {
    if (candostuff == 1) {
        if (controller.right.isPressed()) {
            player1.x += 1
        }
    }
})
game.onUpdate(function () {
    if (candostuff == 1) {
        if (controller.right.isPressed()) {
            player1.x += 1
        }
    }
})
game.onUpdate(function () {
    if (candostuff == 1) {
        if (controller.left.isPressed()) {
            player1.x += -1
        }
    }
})
game.onUpdate(function () {
    if (candostuff == 1) {
        if (controller.left.isPressed()) {
            player1.x += -1
        }
    }
})
game.onUpdate(function () {
    if (candostuff == 1) {
        if (controller.up.isPressed()) {
            player1.y += -1
        }
    }
})
game.onUpdate(function () {
    if (candostuff == 1) {
        if (controller.up.isPressed()) {
            player1.y += -1
        }
    }
})
game.onUpdate(function () {
    if (candostuff == 1) {
        if (controller.down.isPressed()) {
            player1.y += 1
        }
    }
})
game.onUpdate(function () {
    if (candostuff == 1) {
        if (controller.down.isPressed()) {
            player1.y += 1
        }
    }
})
game.onUpdate(function () {
    if (controller.B.isPressed() && (scoremod == 1 && gamestarted == 1 && candostuff == 1)) {
        info.changeScoreBy(1)
    }
})
game.onUpdateInterval(1000, function () {
    if (gamestarted == 1) {
        info.changeScoreBy(1)
    }
})
// LEVEL 0
forever(function () {
    if (indevmodemenu == 0 && (info.score() < 30 && (controller.A.isPressed() && (gamestarted == 0 && canyesno == 1)))) {
        gamestarted = 1
        candostuff = 0
        flagfiresquarespawned = 0
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
        candostuff = 1
        player1.setPosition(80, 81)
        player1.setStayInScreen(true)
        for (let index = 0; index < 2; index++) {
            fireball = sprites.create(assets.image`fireball`, SpriteKind.Enemy)
            fireball.setBounceOnWall(true)
            fireball.setPosition(randint(0, 160), randint(0, 160))
            if (player1.y - fireball.y < 20 || player1.x - fireball.x < 20) {
                fireball.x += 20
                fireball.y += 20
            }
            fireball.setVelocity(player1.x - fireball.x, player1.y - fireball.y)
        }
        FireSquareVelocityMultiplier = 0
    }
})
forever(function () {
    if (flagfiresquarespawned == 1 && gamestarted == 1) {
        pause(50)
        fireball2.setVelocity((player1.x - fireball2.x) * FireSquareVelocityMultiplier, (player1.y - fireball2.y) * FireSquareVelocityMultiplier)
        FireSquareVelocityMultiplier += 0.01
    }
})
forever(function () {
    if (flagfiresquarespawned == 2 && gamestarted == 1) {
        pause(50)
        fireball2.setVelocity((player1.x - fireball2.x) * 1.3, (player1.y - fireball2.y) * 1.3)
    }
})
forever(function () {
    if (flagfiresquarespawned == 3 && gamestarted == 1) {
    	
    }
})
// LEVEL 1
forever(function () {
    if (gamestarted == 1 && (canyesno == 1 && candostuff == 1) && info.score() == 30) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Decoration)
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        gamestarted = 0
        candostuff = 0
        canyesno = 0
        scene.setBackgroundImage(assets.image`nothing`)
        Level = sprites.create(assets.image`level`, SpriteKind.Decoration)
        LevelNumber = sprites.create(assets.image`1`, SpriteKind.Decoration)
        LevelNumber.x += 19
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        sprites.destroyAllSpritesOfKind(SpriteKind.Decoration)
        picture = assets.image`Starsbg`
        picture.replace(6, 4)
        scene.setBackgroundImage(picture)
        candostuff = 1
        canyesno = 1
        gamestarted = 1
        player1 = sprites.create(assets.image`player`, SpriteKind.Player)
        player1.setStayInScreen(true)
        info.changeScoreBy(1)
        for (let index = 0; index < 2; index++) {
            fireball = sprites.create(assets.image`fireball`, SpriteKind.Enemy)
            fireball.setBounceOnWall(true)
            fireball.setPosition(randint(0, 160), randint(0, 160))
            if (player1.y - fireball.y < 40 || player1.x - fireball.x < 40) {
                fireball.x += 20
                fireball.y += 20
            }
            fireball.setVelocity(player1.x - fireball.x, player1.y - fireball.y)
        }
        fireball2 = sprites.create(assets.image`firesquare`, SpriteKind.Enemy)
        fireball2.setStayInScreen(true)
        fireball2.setPosition(randint(0, 160), randint(0, 160))
        if (player1.y - fireball2.y < 20 || player1.x - fireball2.x < 20) {
            fireball2.x += 20
            fireball2.y += 20
        }
        flagfiresquarespawned = 1
    }
})
forever(function () {
    if (gamestarted == 1 && (canyesno == 1 && candostuff == 1) && info.score() == 45) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Decoration)
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        gamestarted = 0
        candostuff = 0
        canyesno = 0
        FireSquareVelocityMultiplier = 0
        flagfiresquarespawned = 0
        scene.setBackgroundImage(assets.image`nothing`)
        Level = sprites.create(assets.image`level`, SpriteKind.Decoration)
        LevelNumber = sprites.create(assets.image`2`, SpriteKind.Decoration)
        LevelNumber.x += 19
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        sprites.destroyAllSpritesOfKind(SpriteKind.Decoration)
        picture = assets.image`Starsbg`
        picture.replace(6, 7)
        scene.setBackgroundImage(picture)
        candostuff = 1
        canyesno = 1
        gamestarted = 1
        player1 = sprites.create(assets.image`player`, SpriteKind.Player)
        player1.setStayInScreen(true)
        info.changeScoreBy(1)
        for (let index = 0; index < 2; index++) {
            fireball = sprites.create(assets.image`fireball`, SpriteKind.Enemy)
            fireball.setBounceOnWall(true)
            fireball.setPosition(randint(0, 160), randint(0, 160))
            if (player1.y - fireball.y < 20 || player1.x - fireball.x < 20) {
                fireball.x += 30
                fireball.y += 30
            }
            fireball.setVelocity(player1.x - fireball.x, player1.y - fireball.y)
        }
        fireball2 = sprites.create(assets.image`omegafiresquare`, SpriteKind.Enemy)
        fireball2.setStayInScreen(true)
        fireball2.setPosition(randint(0, 160), randint(0, 160))
        if (player1.y - fireball2.y < 20 || player1.x - fireball2.x < 20) {
            fireball2.x += 30
            fireball2.y += 30
        }
        flagfiresquarespawned = 2
    }
})
forever(function () {
    if (gamestarted == 1 && (canyesno == 1 && candostuff == 1) && info.score() == 60) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Decoration)
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        gamestarted = 0
        candostuff = 0
        canyesno = 0
        FireSquareVelocityMultiplier = 0
        flagfiresquarespawned = 0
        scene.setBackgroundImage(assets.image`nothing`)
        Level = sprites.create(assets.image`level`, SpriteKind.Decoration)
        LevelNumber = sprites.create(assets.image`4`, SpriteKind.Decoration)
        LevelNumber.x += 19
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        sprites.destroyAllSpritesOfKind(SpriteKind.Decoration)
        picture = assets.image`Starsbg`
        picture.replace(6, 2)
        scene.setBackgroundImage(picture)
        candostuff = 1
        canyesno = 1
        gamestarted = 1
        player1 = sprites.create(assets.image`player`, SpriteKind.Player)
        player1.setStayInScreen(true)
        info.changeScoreBy(1)
        for (let index = 0; index < 10; index++) {
            fireball2 = sprites.create(assets.image`flame`, SpriteKind.Enemy)
            fireball2.setBounceOnWall(true)
            fireball2.setPosition(randint(0, 160), randint(0, 160))
            if (player1.y - fireball2.y < 20 || player1.x - fireball2.x < 20) {
                fireball2.x += 69
                fireball2.y += 69
            }
            flagfiresquarespawned = 3
            fireball2.setVelocity((player1.x - fireball2.x) * 0.5, (player1.y - fireball2.y) * 0.5)
        }
    }
})
forever(function () {
    if (gamestarted == 1 && (canyesno == 1 && candostuff == 1) && info.score() == 69) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Decoration)
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        gamestarted = 0
        candostuff = 0
        canyesno = 0
        FireSquareVelocityMultiplier = 0
        flagfiresquarespawned = 0
        scene.setBackgroundImage(assets.image`nothing`)
        Level = sprites.create(assets.image`level`, SpriteKind.Decoration)
        LevelNumber = sprites.create(assets.image`4`, SpriteKind.Decoration)
        LevelNumber.x += 19
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        sprites.destroyAllSpritesOfKind(SpriteKind.Decoration)
        picture = assets.image`Starsbg`
        picture.replace(6, 2)
        scene.setBackgroundImage(picture)
        candostuff = 1
        canyesno = 1
        gamestarted = 1
        player1 = sprites.create(assets.image`player`, SpriteKind.Player)
        player1.setStayInScreen(true)
        info.changeScoreBy(1)
        for (let index = 0; index < 10; index++) {
            fireball2 = sprites.create(assets.image`golden`, SpriteKind.Enemy)
            fireball2.setBounceOnWall(true)
            fireball2.setPosition(randint(0, 160), randint(0, 160))
            if (player1.y - fireball2.y < 20 || player1.x - fireball2.x < 20) {
                fireball2.x += 69
                fireball2.y += 69
            }
            flagfiresquarespawned = 2
            fireball2.setVelocity((player1.x - fireball2.x) * 0.5, (player1.y - fireball2.y) * 0.5)
        }
    }
})
