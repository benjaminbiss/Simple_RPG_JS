// JavaScript RPG

// Hercules
let player = {
    name: "Hercules",
    health: 100,
    attackPower: 20,
    defending: false,
    attacks: ['Dodge', 'Uppercut', 'Round House Kick', 'Full Nelson']
}
// Nemean Lion
let lion = {
    name: "Nemean Lion",
    descriptor: "The Vicious",
    health: 200,
    attackPower: 10,
    attacks: ['Claw', 'Bite', 'Pounce', 'Evade']
}
// Lernaean Hydra
let hydra = {
    name: "Lernaean Hydra",
    descriptor: "The Impossible Nine-Headed",
    health: 300,
    attackPower: 5,
    attacks: ['Bite', 'Regenerate', 'Constrict']
}
// Cerberus
let dogo = {
    name: "Cerberus",
    descriptor: "The Underworld Dogo"
}


function battle(player, enemy) {
    while (player.health > 0 && lion.health > 0) {
        function attack(attacker, defender) {
            defender.health -= attacker.attackPower;
            return defender;
        }
        if (player.defending === false) {
            enemy = attack(player, lion);
            player.defending = !player.defending;
        }
        else {
            player = attack(lion, player);
            player.defending = !player.defending;
        }
    }
}
battle(player, lion);