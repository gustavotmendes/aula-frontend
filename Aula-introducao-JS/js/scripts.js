// console.log("Ola Mundo");

// let n1 = Number(prompt("Informe a nota 1: "));
// console.log("Sua nota 1 e: " + n1);

// let n2 = Number(prompt("Informe a nota 2: "));
// console.log("Sua nota 2 e: " + n2);
// let media = (n1 + n2) / 2;

// console.log("Sua media e: " + media);
// if(media > 6){
//     console.log("Voce passou!")
// }else{
//     console.log("Voce reprovou!")
// };

function proc(){
    console.log("Entrou na funcao proc()!");
    let vnome = document.getElementById("nome").value;
    let vemail = document.getElementById("email").value;
    let valtura = document.getElementById("altura").value;

    let res = document.getElementById("resultado");
    res.innerHTML += "<p>Nome: " + vnome + "<br>" + " Email: " + vemail + "<br>" + " Altura: " + valtura + "</p>";
};