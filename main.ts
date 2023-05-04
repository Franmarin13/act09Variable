basic.forever(function () {
    basic.pause(1000)
    if (input.temperature() >= 21 && input.temperature() < 27) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Happy)
    }
    if (input.temperature() < 21) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Sad)
    }
    if (input.temperature() > 27) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Surprised)
        pins.servoWritePin(AnalogPin.P1, 3000)
        basic.pause(5000)
        control.reset()
    }
})
