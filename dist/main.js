"use strict";

var alunos = [{
  nome: "Itamar",
  nota: 10
}, {
  nome: "João",
  nota: 7
}, {
  nome: "Renata",
  nota: 8
}, {
  nome: "Paulo",
  nota: 4
}, {
  nome: "Felipe",
  nota: 3
}, {
  nome: "Matheus",
  nota: 0
}, {
  nome: "Lucas",
  nota: 7
}];
var alunosAprovados = function alunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};
var alunosReprovados = function alunosReprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota < 6;
  });
};
var formatarAlunos = function formatarAlunos(alunos) {
  return alunos.map(function (aluno) {
    return "Nome: ".concat(aluno.nome, ", Nota: ").concat(aluno.nota);
  }).join('; ');
};
var aprovados = alunosAprovados(alunos);
var reprovados = alunosReprovados(alunos);
console.log("Estes s\xE3o os alunos aprovados: ".concat(formatarAlunos(aprovados)));
console.log("Estes s\xE3o os alunos reprovados: ".concat(formatarAlunos(reprovados)));