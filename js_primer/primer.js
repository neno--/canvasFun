var dog = {
    sound: 'woof',
    bark: function () {
        console.log(this.sound)
    }
}

dog.bark();

var sound = 'mijau'
var loose = dog.bark;

loose();

/////////////

var something = {}
var orother = {}
var fun = function () {
}

var another = fun.bind({})
var rebound = another.bind(window)

var obj1 = {
    a: something,
    af: fun
}

var obj2 = {
    b: something,
    bf: fun
}

console.log(something === orother)
console.log(obj1.a == obj2.b)
console.log(obj1.af == obj2.bf)
console.log(fun == another)         // kako to
console.log(fun == rebound)         // kako to


/////////////


console.log(this)
var aa = function() {
    console.log(this.attr)
}
var x = {
    attr : "hihi",

}

/////////
console.log('proto for instant objects - object literals')

var lit = {}
console.log(lit.__proto__)
console.log(lit)
console.log(typeof lit)

var obj = new Object()
console.log(obj.__proto__)
console.log(obj)
console.log(typeof obj)

var Creator = function() {
}

var cre = new Creator()
console.log(cre.__proto)
console.log(cre)
console.log(typeof cre)




