let juan = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 1 1 1 1 1 1 1 f . . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 f 1 1 1 f 1 1 f . . 
. . . f 1 1 f 1 1 1 f 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . . f 1 1 1 1 1 1 1 f . . . 
. . . . f 1 f f f f f 1 f . . . 
. . . . f 1 1 1 1 1 1 1 f . . . 
. . . . . f 1 1 1 1 1 f . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let _2juan = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 5 5 f . . 
. . . f 5 5 f 5 5 5 f 5 5 f . . 
. . . f 5 5 f 5 5 5 f 5 5 f . . 
. . . f 5 5 5 5 5 5 5 5 5 f . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . f 5 f f f f f 5 f . . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . . f 5 5 5 5 5 f . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(14)
for (let index = 0; index < 9; index++) {
    pause(100)
    juan.x += 4
    pause(100)
    juan.y += 4
}
// stairs go back up
for (let index = 0; index < 9; index++) {
    pause(100)
    juan.x += -4
    pause(100)
    juan.y += -4
}
for (let index = 0; index < 9; index++) {
    pause(100)
    _2juan.x += -4
    pause(100)
    _2juan.y += 4
}
for (let index = 0; index < 9; index++) {
    pause(100)
    _2juan.x += 4
    pause(100)
    _2juan.y += -4
}
forever(function () {
	
})
