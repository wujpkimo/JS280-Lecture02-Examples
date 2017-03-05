function attack(pokemon) {
    pokemon.HP -= 20;
}

function Pokemon(nationalNo, hp, type, species, height, weight, abilities, localNo, japanese) {
    this.nationalNo = nationalNo;
    this.hp = hp;
    this.type = type;
    this.species = species;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.localNo = localNo;
    this.japanese = japanese;
    this.attack = function (other) {
        other.hp -= 20;
    };
}

var Hitokage = new Pokemon(
    1, 1200,
    "Fire", "Lizard Pokemon",
    0.61, 8.5,
    ["Blaze", "Solar Power"],
    [4, 229, 234, 83],
    "Hitokage");
var Fushigidane = new Pokemon(
    1, 2000,
    ["GRASS", "POISON"], "Seed Pokémon",
    0.71, 6.9,
    "Overgrow",
    [1, 226, 231, 80],
    "Fushigidane");


console.log("妙蛙種子hp:" + Fushigidane.hp);
console.log("小火龍hp:" + Hitokage.hp);
console.log("小火龍發動攻擊");
Hitokage.attack(Fushigidane);
console.log("妙蛙種子hp:" + Fushigidane.hp);
console.log("小火龍hp:" + Hitokage.hp);
console.log("妙蛙種子發動攻擊");
Fushigidane.attack(Hitokage);
console.log("妙蛙種子hp:" + Fushigidane.hp);
console.log("小火龍hp:" + Hitokage.hp);