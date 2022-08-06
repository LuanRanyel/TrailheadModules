const greetingMaker = function(greeting){
    return function(whoGreeting){
        return greeting + ", " + whoGreeting + "!";
    }
}

const greetingHello = greetingMaker("Hello");
const greetingBonjour = greetingMaker("Bonjour");
const greetingCiao = greetingMaker("Ciao");

console.log(greetingHello("Gemma")); // Hello, Gemma!
console.log(greetingBonjour("Fabien")); // Bonjour, Fabien!
console.log(greetingCiao("Emanuela")); // Ciao, Emanuela!