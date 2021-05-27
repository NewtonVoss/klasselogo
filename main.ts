input.onButtonPressed(Button.A, function () {
    tal += 1
})
input.onButtonPressed(Button.B, function () {
    bokstav += 1
})
let tal = 0
let bokstav = 0
let teksttabell = ["A", "B", "C", "D", "E", "F", "Vossestrand", "Granvin"]
basic.forever(function () {
    basic.showString("" + tal + teksttabell[bokstav])
})
