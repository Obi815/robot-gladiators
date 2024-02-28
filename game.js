// Start off getting player Name, Health, Attack
var playerName = window.prompt("Wha is your robots's name?");
var playerHealth = 100;
var playerAttack = 10;

// Now getting enemy Name, Health, Attack
var enemyName = "Roborto";
var enemyHealth = 50;
var ennemyAttack = 12;



function fight() {
    window.alert("Welcome to Robot Gladiators!");
    
    // subtract playerAttack from enemyHealth
    enemyHealth = enemyHealth - playerAttack;

    // check the players health
    if(playerHealth <= 0) {
        window.alert(playerName + " has died :(");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left!");
    }

    // subtract enemyAttack from playerHealth
    playerHealth = playerHealth - ennemyAttack;

    // checking enemy robots health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left!")
    }

}
fight();