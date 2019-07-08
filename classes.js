// // Plain ole JavaScript object literal
// const myApple = {
//     color: `rosey`,
//     flavor: `sweet`,
//     size: `medium`,
// }

// console.log(`My apple:`, myApple);

// // Using an object constructor function
// function Apple(color, flavor, size){
//     this.color = color;
//     this.flavor = flavor;
//     this.size = size;
// }

// //Call it to create an object with `new`
// // use new to tell it what's happening
// const yourApple = new Apple('green', 'sour', 'large');

// console.log('Your apple:', yourApple);

// ES6 - Classes are a new way to construct objects
class Apple {

    // How you make the object, you need a constructor!
    constructor(name, color, flavor, size=`medium`){
        this.name = name;
        this.color = color;
        this.flavor = flavor;
        this.size = size;
    }

    // Can add more functions, we call them methods
    toString() {
        const string = `Apple: ${this.name} is ${this.color}, 
        tastes ${this.flavor} and is ${this.size}`;
        console.log(string);
    }

}

const honeyCrisp = new Apple('Honey Crisp', 'Rosey', 'sweet');

honeyCrisp.toString();