// Importation du module prompt-sync
const prompt = require('prompt-sync')();
const Calculator = require('./Calculator'); // Import de la classe Calculator
const { validateNumber } = require('./utils'); // Import de la fonction utilitaire

// Fonction principale pour gérer le menu
function mainMenu() {
    const calculator = new Calculator();

    while (true) {
        console.log(`\nChoisissez une opération :\n` +
            `1. Addition (+)\n` +
            `2. Soustraction (-)\n` +
            `3. Multiplication (*)\n` +
            `4. Division (/)\n` +
            `5. Puissance (^)\n` +
            `6. Racine carrée (√)\n` +
            `7. Factorielle (!)\n` +
            `8. Quitter`);
        const choice = prompt("Votre choix : ");

        if (choice === '8') {
            console.log("Merci d'avoir utilisé la calculatrice !");
            break;
        }

        try {
            const requiresTwoNumbers = ['1', '2', '3', '4', '5'];
            if (requiresTwoNumbers.includes(choice)) {
                const num1 = validateNumber(prompt("Entrez le premier nombre : "));
                const num2 = validateNumber(prompt("Entrez le deuxième nombre : "));
                let result;

                switch (choice) {
                    case '1':
                        result = calculator.add(num1, num2);
                        break;
                    case '2':
                        result = calculator.subtract(num1, num2);
                        break;
                    case '3':
                        result = calculator.multiply(num1, num2);
                        break;
                    case '4':
                        result = calculator.divide(num1, num2);
                        break;
                    case '5':
                        result = calculator.power(num1, num2);
                        break;
                    default:
                        console.log("Option invalide.");
                        continue;
                }
                console.log(`Le résultat est : ${result}`);
            } else if (choice === '6') {
                const num = validateNumber(prompt("Entrez un nombre : "));
                const result = calculator.sqrt(num);
                console.log(`Le résultat est : ${result}`);
            } else if (choice === '7') {
                const num = validateNumber(prompt("Entrez un nombre entier : "));
                if (!Number.isInteger(num)) {
                    throw new Error("Veuillez entrer un entier.");
                }
                const result = calculator.factorial(num);
                console.log(`Le résultat est : ${result}`);
            } else {
                console.log("Option invalide. Veuillez réessayer.");
            }
        } catch (error) {
            console.error(error.message);
        }
    }
}

// Lancer le menu principal
mainMenu();