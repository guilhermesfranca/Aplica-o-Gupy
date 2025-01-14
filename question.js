//1° questão

let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) { //enquanto "K" for menor que o indice o while vai continuar
  K = K + 1; // K é sempre incrementado em 1 a cada ciclo
  SOMA = SOMA + K; // soma vai acumulando o valor de K até finalizar o programa
}
console.log('Questão: 1');

console.log(SOMA);
//quando o programa termina ele exibe o valor da soma de K de 1 a 13 ou seja = 91



//2° questão
console.log('Questão: 2');

function fibonacciTrue(num) {
  let a = 0; 
  let b = 1; 
  
  if (num === 0 || num === 1) { // se for 0 || 1 ele já é fibonnaci
    return true;
  } 
  
  
  while (b < num) { //loop se repete enquanto b for menor que o numero
    let temp = a; //var temporária
    a = b; //o número que antes era "a" agora é o numero que estava em "b".
    b = temp + b; // próximo numero da sequencia é a + b
  } //resumo, a cada loop a vai se tornando b e b vai se tornando a soma de a + b

  return b === num; // se o número encontrado for igual a b ele é fibonnaci
}

// Testando a função com um número
let numero = 13;
if (fibonacciTrue(numero)) {
  console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
}

let numero2 = 15;
if (fibonacciTrue(numero2)) {
  console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${numero2} NÃO pertence à sequência de Fibonacci.`);
}


// questão 3
// array de objetos com data do faturamento e valor
const faturamentoDiario = [
  { dia: 1, faturamento: 5000 },
  { dia: 2, faturamento: 15000 },
  { dia: 3, faturamento: 0 },
  { dia: 4, faturamento: 20000 },
  { dia: 5, faturamento: 0 },
  { dia: 6, faturamento: 10000 },
  { dia: 7, faturamento: 3000 },
  { dia: 8, faturamento: 17000 },
  { dia: 9, faturamento: 0 },
  { dia: 10, faturamento: 25000 },
  { dia: 11, faturamento: 1000 }
];



function calcularFaturamento(faturamentoDiario) {
  let soma = 0;
  let diasComFaturamento = 0;
  let menor = faturamentoDiario[0].faturamento;
  let maior = faturamentoDiario[0].faturamento;
  let diaMenor = faturamentoDiario[0].dia;
  let diaMaior = faturamentoDiario[0].dia;

  // Calcular soma, menor, maior e dias com faturamento
  faturamentoDiario.forEach(faturamento => {
    if (faturamento.faturamento > 0) {
      soma += faturamento.faturamento;
      diasComFaturamento++;

      if (faturamento.faturamento < menor) {
        menor = faturamento.faturamento;
        diaMenor = faturamento.dia;
      }
      if (faturamento.faturamento > maior) {
        maior = faturamento.faturamento;
        diaMaior = faturamento.dia;
      }
    }
  });

  let media = soma / diasComFaturamento;
//filtra os dias com faturamento acima da media
  let diasAcimaDaMedia = faturamentoDiario.filter(faturamento => faturamento.faturamento > media && faturamento.faturamento > 0).length;
  console.log('Questão: 3');
  
  console.log(`Menor faturamento: R$ ${menor} no dia ${diaMenor}`);
  console.log(`Maior faturamento: R$ ${maior} no dia ${diaMaior}`);
  console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}

calcularFaturamento(faturamentoDiario);

console.log('Questão: 4');


// Valores de faturamento mensal por estado
const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

// Clculo do valor total mensal
const faturamentoTotal = Object.values(faturamentoEstados).reduce((total, valor) => total + valor);

// exibe o % de representação de cada um
for (let estado in faturamentoEstados) {
  let percentual = (faturamentoEstados[estado] / faturamentoTotal * 100).toFixed(2);
  console.log(`O percentual de ${estado} é ${percentual}%`);
 
}

console.log('Questão: 5');


let string = prompt("Insira aqui o texto pra invertermos!! Cuidado com os palíndronos rsrs EX: osso, radar, rever, reviver...");

let stringInvertida = "";
for (let i = string.length - 1; i >= 0; i--) {
  stringInvertida += string[i];
}

console.log("String original:", string);
console.log("String invertida:", stringInvertida);