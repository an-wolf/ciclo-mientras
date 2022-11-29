basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() >= 25) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Heart)
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
})
