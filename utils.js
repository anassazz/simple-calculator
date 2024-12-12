// Fonction pour valider les entrées utilisateur
function validateNumber(input) {
    const number = parseFloat(input);
    if (isNaN(number)) {
        throw new Error("Entrée invalide. Veuillez entrer un nombre valide.");
    }
    return number;
}

module.exports = { validateNumber }; // Export des fonctions utilitaires
