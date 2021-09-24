// JavaScript RPG

// attack controls damage and health of the objects
function attack(attacker, defender) {
    if (attacker.name === 'Hercules') {
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

// battle controls the turn order and when an object reaches 0 health
function battle(player, enemy) {
    while (player.health > 0 && enemy.health > 0) {
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

// runGame controls the event order of the story
function runGame(){

        // Hercules
    let player = {
        name: "Hercules",
        health: 100,
        attackPower: 10,
        defending: true,
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
        health: 250,
        attackPower: 20,
        attacks: ['Bite', 'Regenerate', 'Constrict', 'Spit Poison']
    }

    // Intro
    alert("You open your eyes and see King Eurystheus, the grandson of the hero Perseus and King of Greece.")
    alert("King Eurystheus:\nWelcome Hercules! You are about to embark on the quest to capture Cerberus, the guard dog of the Underworld!");
    alert("The road ahead of you will be dangerous, but if you succeed you will go down in history as the Greatest of the Greek Heroes!");
    alert("You will first have to fight the Vicious Nemean Lion, this will be feat in and of itself.");
    alert("Secondly, you will need to slay the Nine-headed Lernaean Hydra. Only a true Hero will be able to accomplish both of these tasks!");
    alert("Lastly you will need to capture Cerberus from the Underworld and bring him back to Athens!");
    // Play the game choice
    let accept = prompt("Do you accept this quest?\n'yes' or 'no'");
    if (accept === 'no') {
        alert("What a pitty, your name will not be known for the rest of history.");
    }
    else if (accept === 'yes') {
        alert("Huzzah! Well you best be off then... and good luck!");
        alert("After days of travel you find yourself standing outside a massive cave. Inside you see a MASSIVE lion, its fur is white as snow. This must be the Nemean Lion.");
        alert("The lion turns his head towards you and rawrs! You charge towards the lion.\n Prepare to fight!");
        // Hercules vs Nemean Lion
        battle(player, lion);
        // Game Over if player dies
        if (player.health === 0) {
            alert("Hercules has fallen to the Nemean Lion.\nGame Over.");
        }
        else {
            alert("Huzzah! You have slain the Nemean Lion!");
            alert("Hercules begins to skin the lion, taking his pelt and tying it around his neck as a cape.");
            alert("You gained the Hide of the Nemean Lion.\nYour health has increased by 100!");
            player.health = 200;
            console.log(`${player.name} health is now ${player.health}`);
            alert("You travel to a lake that is rumored to be home to the Hydra. This magical beast is the next step to reaching the Underworld.");
            alert("As you approach the water the Lernaean Hydra burts out of the water. All nine of it's heads fixed on you!");
            alert("The Lernaean Hydra strikes out at you first!\nPrepare to fight!");
            // Hercules vs Lernaean Hydra
            battle(player, hydra);
            // Game Over if player dies
            if (player.health === 0) {
                alert("Hercules has fallen to the Nemean Lion.\nGame Over.");
            }
            else {
                alert("Huzzah! You have slain the Lernaean Hydra!");
                alert("You stand next to the slain beast and see a large bone sitting on the ground. You pick it up, for some reason you feel compelled to take it with you.");
                alert("Maybe it will make a good club?");
                alert("You travel to the fabled entrance to the Underworld. And before you sits a large black hound with three heads!");
                alert("This is Cerberus - the guard dog of the Underworld.");
                alert("You begin to prepare yourself for a fight but you can tell Cerberus is more interested in your NEW bone club!");
                alert("You offer the bone to Cerberus. Cerberus wags his tail! For afterall, Cerberus is just a good boy... even if he is from the Underworld.");
                alert("You return to Athens with your new best friend, Cerberus the Underworld Dogo.");
                alert("King Eurystheus is impressed! Hercules' name goes down in history as the Greatest of Greek Heros!");
                alert("THE END");
            }
        }
    }
}

runGame();