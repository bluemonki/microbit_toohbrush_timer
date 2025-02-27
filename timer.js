input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    basic.showNumber(3)
    basic.pause(200)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    basic.showNumber(2)
    basic.pause(200)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    basic.showNumber(1)
    basic.pause(200)
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    drawSegment(0, 0)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.InBackground)
    drawSegment(3, 0)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.InBackground)
    drawSegment(0, 3)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.InBackground)
    drawSegment(3, 3)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
})
function drawSegment (xStart: number, yStart: number) {
    for (let index = 0; index <= 5; index++) {
        led.toggle(xStart, yStart)
        basic.pause(1000)
    }
    led.plot(xStart, yStart)
    for (let index = 0; index <= 5; index++) {
        led.toggle(xStart + 1, yStart)
        basic.pause(1000)
    }
    led.plot(xStart + 1, yStart)
    for (let index = 0; index <= 5; index++) {
        led.toggle(xStart, yStart + 1)
        basic.pause(1000)
    }
    led.plot(xStart, yStart + 1)
    for (let index = 0; index <= 5; index++) {
        led.toggle(xStart + 1, yStart + 1)
        basic.pause(1000)
    }
    led.plot(xStart + 1, yStart + 1)
}
basic.showIcon(IconNames.Angry)
basic.forever(function () {
	
})
