const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
//pq ao primeiro LI possui a classes abaixo
//( CSS function repositions an element vertically on the 2D plane. Its result is a <transform-function> data type.)
// .tech {
//     transform: translateY(-20px);
//   }

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
let clickBox = document.getElementsByTagName('li');
console.log(clickBox);
clickBox[0].addEventListener("click", recebeClick);
clickBox[1].addEventListener("click", recebeClick);
clickBox[2].addEventListener("click", recebeClick);

function recebeClick(eventoDeOrigem){
    //console.log(eventoDeOrigem)
    if(eventoDeOrigem.target === clickBox[0]){
        alteraClasse(1,2,0)
    } else if(eventoDeOrigem.target === clickBox[1]){
        alteraClasse(0,2,1)
    } else {
        alteraClasse(0,1,2)
    }
}
function alteraClasse(valor1, valor2, valor3){
    clickBox[valor1].className = null;
    clickBox[valor2].className = null;
    clickBox[valor3].className = 'tech';
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('change', alteraTexto)
function alteraTexto(eventoTexto){
    let elementoClasse = document.getElementsByClassName('tech');   
    console.log(input.value);
    elementoClasse[0].innerText = input.value;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
myWebpage.addEventListener('dblclick', redirecionaPagina);

function redirecionaPagina(){
    window.open('https://www.linkedin.com/in/su%C3%A9li-trist%C3%A3o-da-costa-99213b29/');
}


// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('mouseleave', changeColor);

function changeColor(evento){
    console.log(evento.type)
    if (evento.type === 'mouseover'){
        myWebpage.style.color = 'red';
    }else {
        myWebpage.style.color = 'white';
    }
}


// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.