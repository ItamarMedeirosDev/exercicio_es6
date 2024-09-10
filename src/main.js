const alunos = [
  { nome: "Itamar", nota: 10 },
  { nome: "João", nota: 7 },
  { nome: "Renata", nota: 8 },
  { nome: "Paulo", nota: 4 },
  { nome: "Felipe", nota: 3 },
  { nome: "Matheus", nota: 0 },
  { nome: "Lucas", nota: 7 }
];

const alunosAprovados = (alunos) => {
  return alunos.filter(aluno => aluno.nota >= 6);
};

const alunosReprovados = (alunos) => {
  return alunos.filter(aluno => aluno.nota < 6);
};

const formatarAlunos = (alunos) => {
  return alunos.map(aluno => `Nome: ${aluno.nome}, Nota: ${aluno.nota}`).join('; ');
};

const aprovados = alunosAprovados(alunos);
const reprovados = alunosReprovados(alunos);

console.log(`Estes são os alunos aprovados: ${formatarAlunos(aprovados)}`);
console.log(`Estes são os alunos reprovados: ${formatarAlunos(reprovados)}`);
