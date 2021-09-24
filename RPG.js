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


function runGame(){

    // Function to run a battle
    function battle(player, enemy) {
        while (player.health > 0 && enemy.health > 0) {
            function attack(attacker, defender) {
                if (attacker.name === player.name) {
                    let attackType = prompt("Choose your attack!\n1. Uppercut\n2. Right Hook\n3. Round House Kick\n4. Full Nelson");
                    defender.health -= attacker.attackPower * attackType;
                    console.log(`${attacker.name} used ${attacker.attacks[attackType - 1]} dealing ${attacker.attackPower * attackType} damage to ${defender.name}, their health is now at ${defender.health}`);
                    return defender;
                }
                else {
                    let attackType = Math.floor(Math.random() * 4);
                    defender.health -= attacker.attackPower;
                    console.log(`${attacker.name} used ${attacker.attacks[attackType]} dealing ${attacker.attackPower * attackType} damage to ${defender.name}, your health is now at ${defender.health}`);
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
    // Hercules vs Nemean Lion
    battle(player, lion);
    player.health = 200;
    // Hercules vs Lernaean Hydra
    battle(player, hydra);
}

runGame();