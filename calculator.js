// Classe Calculator respectant les principes SOLID
class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("La division par zéro n'est pas autorisée.");
        }
        return a / b;
    }

    power(a, b) {
        return Math.pow(a, b);
    }

    sqrt(a) {
        if (a < 0) {
            throw new Error("La racine carrée d'un nombre négatif n'est pas définie.");
        }
        return Math.sqrt(a);
    }

    factorial(n) {
        if (n < 0) {
            throw new Error("La factorielle d'un nombre négatif n'est pas définie.");
        }
        if (n === 0 || n === 1) return 1;
        return n * this.factorial(n - 1);
    }
}
module.exports = Calculator; // Export de la classe


