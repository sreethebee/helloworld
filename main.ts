input.onButtonPressed(Button.A, function () {
    basic.showString("have a great day!")
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.ForeverInBackground)
    basic.showString("youre awesome")
    basic.showIcon(IconNames.SmallHeart)
})
basic.showString("hi!")
basic.forever(function () {
    music.playMelody("C A D B G C5 F E ", 120)
})
