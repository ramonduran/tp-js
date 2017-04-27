/*
 * Inserir dia 1 ao 31 no select #dia.
 */ 
var selectDia = document.getElementById('dia');

for (var i = 1; i<=31; i++){
    var opt = document.createElement('option'); // <option></option>
    opt.value = i; // <option value="i"></option>
    opt.innerHTML = i; // <option value="i">i</option>
    selectDia.appendChild(opt); // Adiciona o <option> criado em <select id="dia">
}

/*
 * Inserir meses no select #mes.
 */ 
var selectMes = document.getElementById('mes');
var meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
for (var i = 0; i < meses.length; i++) {
    var opt = document.createElement('option'); // <option></option>
    opt.value = i; // <option value="meses[i]"></option>
    opt.innerHTML = meses[i]; // <option value="meses[i]">meses[i]</option>
    selectMes.appendChild(opt); // Adiciona o <option> criado em <select id="mes">
}

/*
 * Função descobrir nome de terror.
 */
function descobrirNomeDeTerror(){
	var nome = ['O Zumbi', 'O Assassino', 'O Psicopata', 'O Alienigena', 'O Carniceiro', 'O Vampiro', 'O Matador', 'O Maluco', 'O Vingador', 'O Monstro', 'O Bruxo', 'O Demônio'];
	var sobrenome = ['Endiabrado', 'Radioativo', 'Endemoniado', 'Vermelho', 'Possuído', 'Macabro', 'Negro ', 'Sem cabeça', 'Desconhecido', 'Inconsciente', 'Oculto ', 'Esquecido', 'Obscuro', 'Invocado', 'Caído', 'Costurado', 'Amaldiçoado', 'Anormal', 'Pertubardo', 'Sanguinário', 'Tenebroso', 'Importal', 'Ressuscitado', 'do Pântano', 'da Encruzilhada', 'do Porão', 'do Velho Poço', 'sem Perdão', 'do Cemitério', 'da Meia Noite', 'da Lua Cheia'];
	
	var diaSelecionado = parseInt(document.getElementById("dia").value) - 1;
	var mesSelecionado = document.getElementById("mes").value;
	
	var resultado = nome[mesSelecionado] + ' ' + sobrenome[diaSelecionado];
	
	document.getElementById("resultado").innerHTML = resultado;
}