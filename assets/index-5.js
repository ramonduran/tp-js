/*
 * Inserir ano 1960 ao 2020 no select #ano.
 */ 
var selectAno = document.getElementById('ano');

for (var i = 1960; i<=2020; i++){
    var opt = document.createElement('option'); // <option></option>
    opt.value = i; // <option value="i"></option>
    opt.innerHTML = i; // <option value="i">i</option>
    selectAno.appendChild(opt); // Adiciona o <option> criado em <select id="dia">
}

/*
 * Função para descobrir ano chines.
 */
function descobrirAnoChines(){
	var animals = ['Macaco', 'Galo', 'Cão', 'Porco', 'Rato', 'Boi', 'Tigre', 'Lebre', 'Dragão', 'Serpente', 'Cavalo', 'Ovelha'];
	var anoSelecionado = document.getElementById("ano").value;
	
	console.log( anoSelecionado%12 );
	
	var resultado = animals[anoSelecionado%12];
	
	document.getElementById("resultado").innerHTML = 'Seu ano chinês é o ' + resultado;
}