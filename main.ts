IR.IR_callbackUser(function () {
    if (IR.IR_read() == 24) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
    if (IR.IR_read() == 8) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    }
    if (IR.IR_read() == 165) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    }
    if (IR.IR_read() == 181) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    if (IR.IR_read() == 199) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
    }
    if (IR.IR_read() == 22) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
    if (IR.IR_read() == 13) {
        basic.showLeds(`
            . # . # .
            # # # # #
            . # . # .
            # # # # #
            . # . # .
            `)
    }
    if (IR.IR_read() == 93) {
        basic.showNumber(1)
    }
    if (IR.IR_read() == 157) {
        basic.showNumber(2)
    }
    if (IR.IR_read() == 29) {
        basic.showNumber(3)
    }
    if (IR.IR_read() == 221) {
        basic.showNumber(4)
    }
    if (IR.IR_read() == 253) {
        basic.showNumber(5)
    }
    if (IR.IR_read() == 61) {
        basic.showNumber(6)
    }
    if (IR.IR_read() == 31) {
        basic.showNumber(7)
    }
    if (IR.IR_read() == 21) {
        basic.showNumber(8)
    }
    if (IR.IR_read() == 9) {
        basic.showNumber(9)
    }
    if (IR.IR_read() == 25) {
        basic.showNumber(0)
    }
})
Maqueen_V5.I2CInit()
IR.IR_init()
basic.forever(function () {
	
})
