//Definindo nome do herói
let nomeHeroi = "Tempestade";

//Definindo a quantidade de experiência do herói
let xp = 10001;

let nivel;


if (xp <= 1000) {
    nivel = "Ferro";
} else if (xp <= 2000) {
    nivel = "Bronze";
} else if (xp <= 5000) {
    nivel = "Prata";
} else if (xp <= 7000) {
    nivel = "Ouro";
} else if (xp <= 8000) {
    nivel = "Platina";
} else if (xp <= 9000) {
    nivel = "Ascendente";
} else if (xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
};

let resultado = "O herói " + nomeHeroi + " está no nível " + nivel + "!";

console.log(resultado);

switch (xp) {
    case 2000:
    case 5000:
    case 7000:
    case 8000:
    case 9000:
    case 10000:
        console.log("Força, " + nomeHeroi + "! Mais um pouco de XP e você alcançará o próximo nível!")
        break
    default:
        if (xp > 10000) {
            console.log("Parabéns por alcançar o nível Radiante! Agora, o céu é o limite!")
        };
}




