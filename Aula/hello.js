const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Escolha o tipo de cálculo:");
console.log("1 - Soma");
console.log("2 - Subtração");
console.log("3 - Multiplicação");
console.log("4 - Divisão");

rl.question("Digite a opção desejada (1 a 4): ", (opcao) => {
    rl.question("Digite o primeiro número: ", (num1) => {
        rl.question("Digite o segundo número: ", (num2) => {
            let resultado;
            const n1 = Number(num1);
            const n2 = Number(num2);

            switch(opcao) {
                case '1':
                    resultado = n1 + n2;
                    console.log(`Resultado da soma: ${resultado}`);
                    break;
                case '2':
                    resultado = n1 - n2;
                    console.log(`Resultado da subtração: ${resultado}`);
                    break;
                case '3':
                    resultado = n1 * n2;
                    console.log(`Resultado da multiplicação: ${resultado}`);
                    break;
                case '4':
                    if (n2 !== 0) {
                        resultado = n1 / n2;
                        console.log(`Resultado da divisão: ${resultado}`);
                    } else {
                        console.log("Erro: não é possível dividir por zero.");
                    }
                    break;
                default:
                    console.log("Opção inválida! Escolha entre 1 e 4.");
            }

            rl.close();
        });
    });
});
