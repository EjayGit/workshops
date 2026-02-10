// there are 2 players
// each player has health, attack, defense
// each player can attack the other player
// when they battle, they remove the attack value from the opponents health
// and they themselves lose health equal to the oponents defense value
/* 
RED
HEALTH 6
ATT 3
DEF 2

BLUE
HEALTH 9
ATT 2
DEF 4

RED attacks BLUE
BLUE loses 3 HP
RED loses 4 HP
*/

class Player{
    constructor(name, health, att, def){
        this.name = name;
        this.health = health;
        this.att = att;
        this.def = def;
    }

    attacks(player2){
        console.log(`${this.name} attacks ${player2.name}`);
        player2.health -= this.att;
        this.health -= player2.def;
        console.log(this.health);
        console.log(player2.health);
    }
}

const red = new Player('RED', 6,3,2);
const blue = new Player('BLUE', 9,2,4);
red.attacks(blue);
