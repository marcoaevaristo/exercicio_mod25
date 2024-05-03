"use strict";

var alunos = [{
  nome: "Pedro",
  nota: 7
}, {
  nome: "Maria",
  nota: 5
}, {
  nome: "João",
  nota: 8
}, {
  nome: "Ana",
  nota: 6
}, {
  nome: "Carlos",
  nota: 4
}];

// Função para filtrar alunos com nota maior ou igual a 6
function filtrarAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

// Chama a função para obter alunos aprovados
var alunosAprovados = filtrarAprovados(alunos);

// Exibe os alunos aprovados
console.log("Alunos aprovados:", alunosAprovados);