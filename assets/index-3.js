
/*
 * Função respondeu sim ou não.
 */
function respondeu(){
	var items = ['XBOX', 'PANELA SEM TAMPA', 'CASA NA PRAIA', 'IO-IO', 'COLAR DO TITANIC', 'EMPREGO DE 75 MIL REAIS POR HORA', 'DIPLOMA DA FATEC', 'LIVRO DE PHP', 'LIVRO DE JS', 'COMPUTADOR', 'VIAGEM PARA DISNEY', 'CHICLETE MASTIGADO', 'PILHA DESCARREGADA', 'VIAGEM PARA LUA', 'MURO DO MEXICO', 'PERUCA', 'NAVIO', 'GUARDA CHUVA FURADO', 'PORSCHE', 'VACA QUE NÃO DÁ LEITE', 'CASCA DE OVO', 'UMA NAVE ESPACIAL']

	document.getElementById("coisa1").innerHTML = items[Math.floor(Math.random()*items.length)];
	document.getElementById("coisa2").innerHTML = items[Math.floor(Math.random()*items.length)];
	
	setTimeout( function() { esconderCoisas() }, 7000);
}

/*
 * Função para esconder coisas.
 */
function esconderCoisas(){
	document.getElementById("coisa1").innerHTML = 'COISA 1';
	document.getElementById("coisa2").innerHTML = 'COISA 2';
}