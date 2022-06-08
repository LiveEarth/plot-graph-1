let Tempnow = 0
OLED12864_I2C.init(60)
let index = 0
let Tempmin = input.compassHeading()
let Tempmax = input.compassHeading()
basic.forever(function () {
    Tempnow = input.compassHeading()
    if (Tempnow > Tempmax) {
        Tempmax = Tempnow
    } else if (Tempnow < Tempmin) {
        Tempmin = Tempnow
    }
    OLED12864_I2C.zoom(false)
    OLED12864_I2C.showNumber(
    5,
    0,
    Tempnow,
    1
    )
    OLED12864_I2C.pixel(index, 60 - Math.map(Tempnow, 0, 360, 0, 50), 1)
    OLED12864_I2C.draw()
    index += 1
    if (index == 128) {
        index = 0
        OLED12864_I2C.clear()
    }
    if (input.buttonIsPressed(Button.A)) {
        OLED12864_I2C.showString(
        0,
        3,
        "Min:",
        1
        )
        OLED12864_I2C.showNumber(
        5,
        3,
        Tempmin,
        1
        )
    }
    if (input.buttonIsPressed(Button.B)) {
        OLED12864_I2C.showString(
        0,
        3,
        "Max:",
        1
        )
        OLED12864_I2C.showNumber(
        5,
        3,
        Tempmax,
        1
        )
    }
})
