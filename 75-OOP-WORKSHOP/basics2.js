class User{
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }
    
    raises(){
        console.log(`${this.name} raises their ${this.weapon}.`);
    }

    lowers(){
        console.log(`${this.name} lowers their ${this.weapon}.`)
    }
}

class Axe extends User{
    slashes(){
        console.log(`${this.name} slases with their Axe!`);
    }
}

const freddie = new User('Freddie', 'axe');
const axe = new Axe('Freddie', 'axe');
freddie.raises();
axe.slashes();
freddie.lowers();