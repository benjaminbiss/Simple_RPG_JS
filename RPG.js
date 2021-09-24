// JavaScript RPG

// Hercules
let player = {
    name: "Hercules",
    health: 100,
    attackPower: 10,
    defending: false,
    attacks: ['Uppercut', 'Right Hook', 'Round House Kick', 'Full Nelson']
}
// Nemean Lion
let lion = {
    name: "Nemean Lion",
    descriptor: "The Vicious",
    health: 200,
    attackPower: 10,
    attacks: ['Nibble', 'Claw', 'Bite', 'Pounce']
}
// Lernaean Hydra
let hydra = {
    name: "Lernaean Hydra",
    descriptor: "The Impossible Nine-Headed",
    health: 300,
    attackPower: 20,
    attacks: ['Bite', 'Regenerate', 'Constrict']
}
// Cerberus
let dogo = {
    name: "Cerberus",
    descriptor: "The Underworld Dogo"
}

// Function to run a battle between the player and the enemy
function battle(player, enemy) {
    while (player.health > 0 && lion.health > 0) {
        function attack(attacker, defender) {
            if (attacker.name === player.name) {
                let attackType = prompt("Choose your attack!\n1. Uppercut\n2. Right Hook\n3. Round House Kick\n4. Full Nelson");
                defender.health -= attacker.attackPower * attackType;
                alert(`${attacker.name} used ${attacker.attacks[attackType - 1]}`);
                return defender;
            }
            else {
                let attackType = Math.floor(Math.random() * 4);
                defender.health -= attacker.attackPower * (attackType - 1);
                alert(`${attacker.name} used ${attacker.attacks[attackType]}`);
                return defender;
            }
            
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