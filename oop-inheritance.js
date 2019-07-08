class Fruit {
    // How you make the object, you need a constructor!
    // Freshness - how old this thing is
    // It will decrease each day, starting at 5,
    // When it is 0, we need to throw it out
    constructor(name, price, freshness=5) {
        this.name = name;
        this.price = price;
        this.freshness = freshness
    }

    // Can add more functions, we call them methods
    getOlder() {
        this.freshness--;
        this.price--;
    }

}

let myFruit = new Fruit ( `Star Fruit`, 100);
console.log(`My Fruit`, myFruit);

myFruit.getOlder();
console.log(`My Fruit`, myFruit);

class Apple extends Fruit {

    // Things needed to make an Apple
    // freshness has a default value,
    // so leaving it off, will always start at 5
    constructor(name, price, color){
        // Create the 'parent' part first with `super`
        // Fruit needs name, price, & freshness (default)
        super(name, price);

        // Add all the Apple specifics
        this.color = color;

    }

    // Can add new methods to a child class
    // but they only work on child objects/instances
    sayColor(){
        console.log(`This apple is ${this.color}`);
        
    }

    // Can change the behavior of parent methods
    getOlder(){
        this.freshness--;
        this.price++;
    }
}

// Create an instance of the Apple class - use `new`
let myApple = new Apple(`Granny Smith`, 50, `green`)
console.log(myApple);

// Can the Apple get older? // Yes, it can.
myApple.getOlder();
console.log(myApple);
