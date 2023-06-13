function calcularICMS() {
    let valorMercadoria = parseFloat(prompt("Insira o valor da mercadoria:"));
    let aliquota = parseFloat(prompt("Insira a alíquota do ICMS (%):"));
    
    let icms = (valorMercadoria * aliquota) / 100;
    
    console.log("O valor do ICMS é: " + icms);
}

function calcularValorMercadoria() {
    let icms = parseFloat(prompt("Insira o valor do ICMS:"));
    let aliquota = parseFloat(prompt("Insira a alíquota do ICMS (%):"));
    
    let valorMercadoria = (icms * 100) / aliquota;
    
    console.log("O valor da mercadoria é: " + valorMercadoria);
}
  
function calcularAliquotaICMS() {
    let valorMercadoria = parseFloat(prompt("Insira o valor da mercadoria:"));
    let icms = parseFloat(prompt("Insira o valor do ICMS:"));
    
    let aliquota = (icms * 100) / valorMercadoria;
    
    console.log("A alíquota do ICMS é: " + aliquota + "%");
}
  