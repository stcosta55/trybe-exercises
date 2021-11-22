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

//Exercício 6:

//Exercício 7:

//Exercício 8:

//Exercício 9:

//Exercício 10: