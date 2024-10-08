const btnSoma = document.getElementById("soma");
btnSoma.addEventListener("click",() => {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let soma = parseInt(valor1) + parseInt(valor2);
    console.log(soma)
    document.getElementById ("result").innerHTML = "O resultado é "+ soma;
});
const btnsubtracao = document.getElementById("subtracao");
btnsubtracao.addEventListener("click",() => {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let subtracao = parseInt(valor1) - parseInt(valor2);
    
    document.getElementById ("result").innerHTML = "O resultado é "+ subtracao;
});
const btnmultiplicacao = document.getElementById("multiplicacao");
btnmultiplicacao.addEventListener("click",() => {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let multiplicacao = parseInt(valor1) * parseInt(valor2);
    
    document.getElementById ("result").innerHTML = "O resultado é "+ multiplicacao;
});
const btndivisao = document.getElementById("divisao");
btndivisao.addEventListener("click",() => {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let divisao = parseInt(valor1) / parseInt(valor2);
    
    document.getElementById ("result").innerHTML = "O resultado é "+ divisao;
});