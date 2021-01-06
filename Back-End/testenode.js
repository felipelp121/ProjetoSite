let usuario = process.argv.slice(2);
let calcular = require("./calc");
let x = "";
let escolha = usuario[0]
let num1 = Number(usuario[1]);
let num2 = Number(usuario[2]);

if (escolha == "s"){
    x = calcular.soma(num1, num2);
    console.log(x);
}else if(escolha == "m"){
    x = calcular.mult(num1,num2);
    console.log(x);
}



