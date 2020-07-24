const root = document.querySelector('#root');

function newElement(tag, content) {
	const title = `<${tag}>${content}</${tag}>`;
	root.insertAdjacentHTML('beforeend', title);
}

newElement('h1', 'Dificulty');

/* Observações iniciais:
// BOM - window - informações do navegador como o tamanho da tela por exemplo
// DOM - document

como estava fazendo antes da explicação:
// const root = document.querySelector('#root');
// const title = document.createElement('h1');
// title.textContent = 'Dificuldade';
// root.append(title);

modo realizado na explicação antes de criar a função:
// const root = document.querySelector('#root');
// const title = document.createElement('h1');
// title.textContent = 'Dificuldade';
*/
