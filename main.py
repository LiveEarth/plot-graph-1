input.onButtonPressed(Button.A, function () {
    soundExpression.giggle.play()
    random010 = randint(1, 10)
    basic.pause(5000)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
    	
    }
})
let random010 = 0
soundExpression.giggle.play()
basic.pause(5000)
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
})
