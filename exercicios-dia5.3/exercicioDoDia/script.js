function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };


  
  createDaysOfTheWeek();
  
  
// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
//Exercício 1:

function createDays(){
    tagDias = document.getElementById('days')
    //cria nome da tag
    for (let cont = 0; cont < dezDaysList.length; cont++){
        let nomeTag = document.createElement('li');
        nomeTag.innerText = dezDaysList[cont];
        nomeTag.className = "day";
        if ((dezDaysList[cont] === 24) || (dezDaysList[cont] ===25) || (dezDaysList[cont] === 31)){
            nomeTag.className += " holiday";
        }
        if ((dezDaysList[cont] === 4) || (dezDaysList[cont] === 11) || (dezDaysList[cont] === 18) || (dezDaysList[cont] === 25)){
            nomeTag.className  += " friday";
        }
        tagDias.appendChild(nomeTag);
    }
}
createDays();

//Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function botaoFeriados(feriado){
    let divButtonscontainer = document.getElementsByClassName('buttons-container');
    let feriadosButton = document.createElement('button');
    feriadosButton.id = 'btn-holiday';
    feriadosButton.setAttribute('type','button');
    feriadosButton.textContent = feriado;
    divButtonscontainer[0].appendChild(feriadosButton);
}
botaoFeriados("Feriado");




//Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

let feriadosButtonInformation = document.getElementById('btn-holiday');
feriadosButtonInformation.addEventListener('click', changeColorHolidays);
let numeroVezesClickFeriado = 0;

function changeColorHolidays(){
    let holidayInformation = document.getElementsByClassName("holiday");
    numeroVezesClickFeriado += 1;
    for(let cont = 0; cont < holidayInformation.length; cont += 1){
        if (numeroVezesClickFeriado % 2 === 0){
            holidayInformation[cont].style.backgroundColor ='rgb(238,238,238)';
        } else {
        holidayInformation[cont].style.backgroundColor ='red';
        }
    }    
}

//Exercício 4:
//Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function botaosexta(sexta){
    let divButtonscontainer = document.getElementsByClassName('buttons-container');
    let fridayButton = document.createElement('button');
    fridayButton.id = 'btn-friday';
    fridayButton.setAttribute('type','button');
    fridayButton.textContent = sexta;
    divButtonscontainer[0].appendChild(fridayButton);
}
botaosexta("Sexta-Feira");


//Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

let fridayButtonInformation = document.getElementById('btn-friday');
fridayButtonInformation.addEventListener('click', changeColorFridays);
let numeroVezesClickFriday = 0;

function changeColorFridays(){
    let fridayInformation = document.getElementsByClassName("friday");
    numeroVezesClickFriday += 1;
    for(let cont = 0; cont < fridayInformation.length; cont += 1){
        if (numeroVezesClickFriday % 2 === 0){
            fridayInformation[cont].style.backgroundColor ='rgb(238,238,238)';
        } else {
            fridayInformation[cont].style.backgroundColor ='red';
        }
    }    
}

//Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .


//Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
let informationClassMytasks = document.getElementsByClassName('my-tasks');
function createTasks(taskInformed){
    let tasks = document.createElement('li');
    tasks.innerText = taskInformed;
    informationClassMytasks[0].appendChild(tasks);
}
createTasks('cozinhar');
createColorTasks("blue");
createTasks('limpar');
createColorTasks("red");
createTasks('tomar banho')
createColorTasks("green");

//Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
function createColorTasks(colorInformed){
    let tasksColor = document.createElement('div');
    tasksColor.style.backgroundColor = colorInformed;
    tasksColor.className = 'tasks'
    informationClassMytasks[0].appendChild(tasksColor);
}

//Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.


//Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .