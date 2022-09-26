input.onButtonPressed(Button.A, function () {
    control.reset()
})
input.onGesture(Gesture.Shake, function () {
    if (number == 0) {
        basic.showString("yes")
    } else if (number == 1) {
        basic.showString("no")
    } else if (number == 2) {
        basic.showString("possibly")
    } else if (number == 3) {
        basic.showString("never")
    } else if (number == 4) {
        basic.showString("in the future")
    } else {
    	
    }
})
let number = 0
basic.showString("ask a question")
number = randint(0, 4)
basic.forever(function () {
	
})
