// basic.showIcon(IconNames.Dice)
input.onGesture(Gesture.Shake, function () {
    let roll = randint(1, 6);
    if(roll == 1){
        basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `);
    }
    if(roll == 2){
        basic.showLeds(`
        # # # # #
        # . . # #
        # . . . #
        # # . . #
        # # # # #
        `);
    }
    if(roll == 3){
        basic.showLeds(`
        # # # # #
        # . . # #
        # . # . #
        # # . . #
        # # # # #
        `);
    }
    if(roll == 4){
        basic.showLeds(`
        # # # # #
        # # . # #
        # . . . #
        # # . # #
        # # # # #
        `);
    }
    if(roll == 5){
        basic.showLeds(`
        # # # # #
        # # . # #
        # . # . #
        # # . # #
        # # # # #
        `);
    }
    if(roll == 6){
        basic.showLeds(`
        # # # # #
        # # . # #
        # # . # #
        # # . # #
        # # # # #
        `);
    }
});
