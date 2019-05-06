var canvas = document.getElementById('canvas')
var c = canvas.getContext('2d')

var colors = ['#96CEB4', '#FFEEAD', '#FFEEAD', '#FF6F69', '#FFCC5C', '#AAD8B0']

var resize = function () {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

var randomNumberInInterval = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


window.addEventListener('resize', resize)

//window.addEventListener('load', main)



