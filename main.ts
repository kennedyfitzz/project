let bike: Sprite = null
let Cars: Sprite = null
let Trucks: Sprite = null
let _type = false
scene.setBackgroundColor(1)
let age = game.askForNumber("How old are you?", 2)
if (age >= 16) {
    _type = game.ask("Do you like trucks?", "Yes: A No: B")
    if (_type) {
        Trucks = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . f 1 f 1 1 f . . . . 
            . f f f f f f f f f f f f f f . 
            . f f f f f f f f f f f f f f . 
            . f f f f f f f f f f f f f f . 
            . . f f 1 f . . . f f 1 f . . . 
            . . f f f f . . . f f f f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
    } else {
        Cars = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f . . . . 
            . f f f 1 1 1 f 1 1 1 f . . . . 
            . f f f f f f f f f f f f f f . 
            . f f f f f f f f f f f f f f . 
            . f f 1 f f f f f f 1 f f f f . 
            . f f f f . . . f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
    }
} else {
    bike = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 8 . . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . . 8 . . . 8 . . 8 . . . . . 
        . . f f f . 8 8 . f f f . . . . 
        . . f f f . . . . f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
}
