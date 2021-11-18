
//aula 5.2 - exercicio 1 - buscando elementos
// // Acesse o elemento elementoOndeVoceEsta .
// console.log(document.getElementById("elementoOndeVoceEsta").innerText = "acessado elemento onde estou");

// // Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// console.log(document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "red");

// // Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// console.log(document.getElementById("primeiroFilhoDoFilho").innerText = "texto");

// // Acesse o primeiroFilho a partir de pai .
// console.log(document.getElementById('pai').firstElementChild);

// // Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
// console.log(document.getElementById("elementoOndeVoceEsta").firstElementChild);

// // Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// console.log(document.getElementById("elementoOndeVoceEsta").nextSibling);

// // Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
// console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling);

// // Agora acesse o terceiroFilho a partir de pai .
// console.log(document.getElementById("pai").lastElementChild.previousElementSibling);




//aula 5.2 - exercicio 2 - criando elementos
//Crie um irmão para elementoOndeVoceEsta .
// let elementoPai = (document.getElementById("elementoOndeVoceEsta").parentNode);
// console.log(elementoPai);
// let quintoFilho = document.createElement('section');
// quintoFilho.innerText = "quinto Filho";
// elementoPai.appendChild(quintoFilho);

// // Crie um filho para elementoOndeVoceEsta .
// let ondeEstou = (document.getElementById("elementoOndeVoceEsta"));
// console.log(ondeEstou);
// let terceiroFilhoOndeEstou = document.createElement('section');
// terceiroFilhoOndeEstou.innerText = 'terceiro Filho Do Filho'
// ondeEstou.appendChild(terceiroFilhoOndeEstou);

// // Crie um filho para primeiroFilhoDoFilho .
// let elementoFilhoDoFilho = (document.getElementById("primeiroFilhoDoFilho"));
// console.log(elementoFilhoDoFilho.innerText);
// let primeiroFilhoDoFilhoDoFilho = document.createElement('section');
// primeiroFilhoDoFilhoDoFilho.innerText = 'primeiro Filho Do Filho Do Filho'
// elementoFilhoDoFilho.appendChild(primeiroFilhoDoFilhoDoFilho);
// primeiroFilhoDoFilhoDoFilho.id = 'primeiroFilhoDoFilhoDoFilho';
// console.log(primeiroFilhoDoFilhoDoFilho);

// // A partir desse filho criado, acesse terceiroFilho.
// let elemento = (document.getElementById('primeiroFilhoDoFilhoDoFilho'));
// console.log(elemento.parentElement.parentElement.nextElementSibling);


//aula 5.2 - exercicio 3 - removendo elementos
//Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

let paiElement = (document.getElementById('pai'));

//remove primeiro filho de pai
console.log("elemento pai: " +paiElement);
paiElement.firstElementChild.remove();

//remove terceiro filho
console.log("elemento terceiro filho: " +paiElement.firstElementChild.nextElementSibling.innerHTML);
paiElement.firstElementChild.nextElementSibling.remove();

//remove último filho
console.log("elemento ultimo filho: " +paiElement.lastElementChild.innerHTML);
paiElement.lastElementChild.remove();


//remove último filho segundoEUltimoFilhoDoFilho
console.log("elemento segundoEUltimoFilhoDoFilho: " +paiElement.firstElementChild.lastElementChild.innerHTML);
paiElement.firstElementChild.lastElementChild.remove();