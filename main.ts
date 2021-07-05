input.onButtonPressed(Button.A, function () {
    radio.sendString("y")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("n")
})
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
