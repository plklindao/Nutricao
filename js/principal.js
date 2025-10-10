//console.log(document.querySelector("h1"));
var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = ("Nego nutritations");

var paciente = document.querySelector("#primeiro-paciente");
var tdNome = document.querySelector(".info-nome");
var nome = tdNome.textContent;
console.log(nome);


var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
console.log(paciente);
console.log(tdPeso);

var tdAltura = document.querySelector("#primeiro-paciente");
var tdAltura = document.querySelector(".info-altura");
var altura = tdAltura.textContent;
console.log(altura);

var tdImc = document.querySelector(".info-imc");
var imc = peso / (altura * altura);
tdImc.textContent = imc;
console.log(imc);



var pesoEhvalido = true;
var alturaEhvalido = true;


if(peso<0||peso>1000){
    console.log("Peso inválido");
    pesoEhvalido = false;
}


if(altura<0||altura>3.00){
    console.log(" Altura invalidada");
    alturaEhvalido = false;
}




