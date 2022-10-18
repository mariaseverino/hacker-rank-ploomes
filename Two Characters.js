"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on("end", function () {
    inputString = inputString.split("\n");

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s) {
    // Write your code here
    const caracteres = [];
    let newS = s.split("");
    let maior = 0;

    for (let i = 0; i < s.length; i++) {
        if (caracteres.indexOf(newS[i]) < 0) {
            caracteres.push(newS[i]);
        }
    }
    while (caracteres.length > 0) {
        let j = caracteres[0];

        for (let i = 1; i < caracteres.length; i++) {
            newS = s.split("");

            newS = newS.filter((item) => item == j || item == caracteres[i]);

            let contador = 1;
            let atual = newS[0];

            while (atual != newS[contador] && newS.length > contador) {
                atual = newS[contador];
                contador = contador + 1;
            }
            if (newS.length == contador) {
                if (maior < newS.length) {
                    maior = newS.length;
                }
            }
        }
        caracteres.shift();
    }

    return maior;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const s = readLine();

    const result = alternate(s);

    ws.write(result + "\n");

    ws.end();
}
