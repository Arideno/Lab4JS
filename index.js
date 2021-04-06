let a = [1, 2, 3, 4]
a.push(5)

// for (let i in a) {
//     console.log(a[i])
// }

let s = "Hello"

// console.log(s)
// console.log(s.charAt(1))
//
// console.log(1 + "32")
// console.log(2 + 3)

let user = {
    name: "Name",
    surname: "Surname",
    age: 18
}

user.name = "Another name"
user.isVerified = true

// console.log(user)

// for (let key in user) {
//     console.log(key, user[key])
// }

function sayHello(name = "Anonymus") {
    return `Hello ${name}`
}
//
// let greeting = sayHello()
// alert(greeting)

let anotherHello = sayHello
// console.log(anotherHello())

let getInt = function () {
    return 1
}

// console.log(getInt())

let getString = () => {
    return "String"
}

// console.log(getString())

function getDataFromServer(callback) {
    callback(2)
}

// getDataFromServer((data) => {
//     console.log(data)
// })

let name = "Andrii"

function printName(name) {
    console.log(name)
}

name = "Vlad"

// printName(name)

const h1 = document.getElementById("h1")

// let z = 1
//
// h1.onclick = () => {
//     console.log(z)
// }
//
// z = 2

import {counter, count} from './analitycs.js'

h1.onclick = () => {
    count()
    console.log(counter)
}