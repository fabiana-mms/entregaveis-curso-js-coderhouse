//Com array

const numeros = [27, 6, 44, 8, 1, 7, 10, 25, 4, 6];

for (i = 0; i < numeros.length; i++) {
  if (numeros[i] >= 10) {
    console.log(numeros[i]);
  }
}

//Com operador de soma

let soma = 0;

for (i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    soma += i;
  }
}

console.log("A soma dos números pares de 1 a 10 é: " + soma);
