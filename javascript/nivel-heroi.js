const prompt = require("prompt-sync")();


let nome = prompt("Digite o nome do seu herói: ");
let nivelHeroi =  Number(prompt("Qual a quantidade XP do seu herói: "));

while (nivelHeroi < 1000) {
    console.log("Seu herói ainda não tem experiência suficiente para se classificar.");
    nivelHeroi = Number(prompt("Digite novamente a quantidade XP do seu herói: "));
}

let nivel;


if (nivelHeroi > 10000) {
    nivel = "Radiante";
} else if (nivelHeroi >= 9001) {
    nivel = "Imortal";
} else if (nivelHeroi >= 8001) {
    nivel = "Ascendente";
} else if (nivelHeroi >= 7001) {
    nivel = "Platina";
} else if (nivelHeroi >= 5001) {
    nivel = "Ouro";
} else if (nivelHeroi >= 2001) {
    nivel = "Prata";
} else if (nivelHeroi >= 1001) {
    nivel = "Bronze";
} else if (nivelHeroi >= 1000) {
    nivel = "Ferro";
}



console.log(`O Herói de nome: ${nome} está no nível ${nivel}`);
