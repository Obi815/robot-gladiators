var playerName = window.prompt("What is your robots's name?");
var playerHealth = 100;
var playerAttack = 10;

// logging multiple values with a console log 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //ALert players that they are starting the round 
    window.alert("Welcome to Robot Gladiators!");
};

// Subtract the value of 'playerAttack' from the value 'enemyHealth' and use that result to update the value in 'enemyHealth variable
enemyHealth = enemyHealth - playerAttack;

// log a resulting message to the console so we know that it worked 
console.log( playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.');

// check enemy health
if (enemyHealth <= 0) {
    window.alert(enemyName + ' has died!');
}
else {
    window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
}


//subtract the value 'enemyAttack from the value of 'playerHelath' and use that result to update the value in 'playerHealth' variable 
playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console so we know that it worked 
console.log( enemyName + ' attacked ' + playerName + '. ' + playerName + " now has " + playerHealth + ' health reamaining.');
fight();
