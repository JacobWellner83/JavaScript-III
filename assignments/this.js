/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding- The default binding which "this" refers to when not specified otherwise.


* 2. Implicit Binding- The referencing that occurs within an object when a method is place on it. It always references whatever is on the left side of the last "."


* 3. New Binding- Used to create objects using a new Keyword and Function(constructor function).


* 4. Explicit Binding- When we specifically tell this what to reference using methods like bind, call and apply.


*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this)

// Principle 2

// code example for Implicit Binding

const ninja = {
    color: "Blue",
    age: "unknown",
    weapon: "katana",
    saying () {
        return `${this.color} Ninja is the deadliest with his ${this.weapon}.`
    }
}

console.log(ninja.saying())

// Principle 3

// code example for New Binding

function Turtle(food) {
    this.food = food
    this.eat = function() {
        console.log(`Leonardo loves to eat ${this.food}`)
    }
}

const leo = new Turtle('pizza')
leo.eat()

// Principle 4

// code example for Explicit Binding

const swordsman = {
    name: "Inigo Montoya"
}

const importantThings = ['Hello', 'killed', 'my father', 'Prepare'];

function introduce(importantThings1, importantThings2, importantThings3, importantThings4) {
    console.log(`${importantThings1}, My name is ${this.name}. You ${importantThings2} ${importantThings3}. ${importantThings4} to die.`);
}

//introduce.apply(swordsman, importantThings)
const threeFingeredMan = introduce.bind(swordsman, ...importantThings);

threeFingeredMan();