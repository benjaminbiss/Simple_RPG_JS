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

// attack controls damage and health of the objects
// battle controls the turn order and when an object reaches 0 health
// runGame controls the even order of the story
function runGame(){
    alert("You open your eyes and see King Eurystheus, the grandson of the hero Perseus and King of Greece.")
    alert("King Eurystheus:\nWelcome Hercules! You are about to embark on the quest to capture Cerberus, the gaurd dog of the underworld!");
    alert("The road ahead of you will be dangerous, but if you succeed you will go down in history as the Greatest of the Greek Heroes!");
    alert("You will first have to fight the Vicious Nemean Lion, this will be feat in and of itself.");
    alert("Secondly, you will need to slay the Nine-headed Lernaean Hydra. Only a true Hero will be able to accomplish both of these tasks!");
    alert("Lastly you will need to capture Cerberus from the underworld and bring him back to Athens!");
    let accept = prompt("Do you accept this quest?\n'yes' or 'no'");
    if (accept === 'no') {
        alert("What a pitty, your name will not be known for the rest of history.");
    }
    else if (accept === 'yes') {
        alert("Hozzah! Well you best be off then... and good luck!");
        alert("After days of travel you find yourself standing outside a massive cave. Inside you see a MASSIVE lion, its fur is white as snow. This must be the Nemean Lion.");
        alert("The lion turns his head towards you and rawrs! You charge towards the lion.\n Prepare to fight!");
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
                    enemy = attack(player, enemy);
                    player.defending = !player.defending;
                }
                else {
                    player = attack(enemy, player);
                    player.defending = !player.defending;
                }
            }
        }
        // Hercules vs Nemean Lion
        battle(player, lion);
        alert("Hozzah! You have slain the Nemaen Lion!");
        alert("Hercules begins to skin the lion, taking his pelt and tying it around his neck as a cape.");
        alert("You gained the Hide of the Nemaen Lion.\nYour health has increased by 100!");
        alert("You travel to a lake that is rumored to be home to the Hydra. This magical beast is the next step to reaching the underworld.");
        alert("As you approach the water the Lernaean Hydra burts out of the water. All nine of it's heads fixed on you!\n Prepare to fight!");
        player.health = 200;
        // Hercules vs Lernaean Hydra
        battle(player, hydra);
        alert("Hozzah! You have slain the Lernaean Hydra!");
        alert("You stand next to the slain beast and see a large bone sitting on the ground. You pick it up, for some reason you feel compelled to take it with you.");
        alert("Maybe it will make a good club?");
        alert("You travel to the fabled entrance to the underworld. And before you sits a large black hound with three heads!");
        alert("This is Cerberous - the gaurd dog of the Underworld.");
        alert("You begin to prepare yourself for a fight but you can tell Cerberous is more interested in your NEW bone club!");
        alert("You offer the bone to Cerberous. Cerberous wags his tail! For afterall, Cerberous is just a good boy... even if he is from the Underworld.");
        alert("You return to Athens with your new best friend, Cerberous the Underworld Dogo.");
        alert("King Eurystheus is impressed! Hercules' name goes down in history as the Greatest of Greek Heros!");
        alert("THE END");
    }
}

runGame();