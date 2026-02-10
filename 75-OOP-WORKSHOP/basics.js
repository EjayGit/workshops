class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }

  poop() {
    console.log(`${this.name} poops.`);
  }
}

const animal = new Animal("Dog");
animal.speak(); // Dog makes a noise.
animal.poop(); // Dog poops.


class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks.
dog.poop(); // Rex poops.


class Bird extends Animal {
  speak() {
    console.log(`${this.name} chirps.`);
  }

  fly() {
    console.log(`${this.name} flies.`);
  }
}

const bird = new Bird("Sparrow");
bird.speak(); // Sparrow chirps.
bird.poop(); // Sparrow poops. (inherited from Animal)
bird.fly(); // Sparrow flies.


class FlyingAnimal extends Animal {
  fly() {
    console.log(`${this.name} flies.`);
  }
}


class Pig extends FlyingAnimal {
  speak() {
    console.log(`${this.name} oinks.`);
  }
}


const pig = new Pig("Porky");
pig.speak(); // Porky oinks.
pig.poop(); // Porky poops. (inherited from Animal)
pig.fly(); // Porky flies. (inherted from FlyingAnimal)