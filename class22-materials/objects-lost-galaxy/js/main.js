//Create a mouse object that has four properties and three methods
let mouse = {}

mouse.leftBtn = new Boolean
mouse.rightBtn = new Boolean
mouse.mouseColor = 'White'
mouse.connectionType = 'USB'

mouse.click = function (btn1, btn2){
    if(btn1 === true){
        alert('You clicked left')
        mouse.rightBtn = false
    } else if(btn2 === true){
        alert('You clicked right')
        mouse.leftBtn = false
    } else {
        alert('Thats not a Button!')
    }
}

mouse.scroll = function (n1){
    console.log('I am scolling!')
}

mouse.mouseColorChange = function (color) {
    mouse.mouseColor = color
    console.log(`You selected a ${mouse.mouseColor} mouse.`)
}

mouse.changeConnectionType = function (connection){
    mouse.connectionType = connection

    if(mouse.connectionType === 'USB'){
        console.log(`Your mouse is connected via ${mouse.connectionType}`)
    } else if(mouse.connectionType === 'Blue Tooth'){
        console.log(`Your mouse is connected via ${mouse.connectionType}`)
    } else {
        console.log(`That is a incompatable connection type`)
    }
}