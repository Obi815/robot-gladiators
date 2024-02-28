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

    // subtract enemyAttack from playerHealth
    playerHealth = playerHealth - ennemyAttack;

}
fight();