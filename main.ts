input.onButtonPressed(Button.A, function () {
    hibaszámláló = 0
    basic.showNumber(hibaszámláló)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
})
let hibaszámláló = 0
pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Resistive)
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Resistive)
hibaszámláló = 0
basic.showNumber(hibaszámláló)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        hibaszámláló += 1
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showNumber(hibaszámláló)
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpDown), music.PlaybackMode.InBackground)
        basic.showNumber(hibaszámláló)
    }
})
