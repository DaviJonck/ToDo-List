const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li');
  return li;
}


inputTarefa.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
})

function criaBotaoApagar(li) {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  botaoApagar.setAttribute('class', 'Apagar')
  li.appendChild(botaoApagar);
}

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput()
  criaBotaoApagar(li)
  salvarTarefa();

}

btnTarefa.addEventListener('click', function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
})

document.addEventListener('click', function (e) {
  const el = e.target;

  if (el.classList.contains('Apagar')) {
    el.parentElement.remove();
    salvarTarefa();
  }
});

function salvarTarefa() {
  const liTarefas = tarefas.querySelectorAll('li')
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefaJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefaJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas')
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa)
  }
}
adicionaTarefasSalvas()


function criandoData() {
  const data = new Date();
  document.querySelector('.data').innerText = data.toLocaleDateString();
}

criandoData()

function tarefaCompleta() {

}
