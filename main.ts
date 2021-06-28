let 반복 = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("hi")
    for (let index = 0; index < 20103012301; index++) {
        led.setDisplayMode(DisplayMode.BlackAndWhite)
        basic.showArrow(ArrowNames.North)
        basic.showArrow(ArrowNames.East)
        basic.showArrow(ArrowNames.South)
        basic.showArrow(ArrowNames.West)
    }
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showArrow(ArrowNames.South)
})
input.onButtonPressed(Button.AB, function () {
    led.plotBarGraph(
    1,
    0
    )
})
input.onButtonPressed(Button.B, function () {
    basic.showString("direction")
    반복 = randint(0, 7)
    if (반복 == 0) {
        basic.showArrow(ArrowNames.North)
    } else if (반복 == 1) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (반복 == 2) {
        basic.showArrow(ArrowNames.East)
    } else if (반복 == 3) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (반복 == 4) {
        basic.showArrow(ArrowNames.South)
    } else if (반복 == 5) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (반복 == 6) {
        basic.showArrow(ArrowNames.West)
    } else if (반복 == 7) {
        basic.showArrow(ArrowNames.NorthWest)
    }
})
