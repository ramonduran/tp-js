
/*
 * Função para calcular Media.
 */
function calcularMedia(){
	var p1 = document.getElementById("p1").value * 0.4;
	var p2 = document.getElementById("p2").value * 0.4;
	var tp = document.getElementById("tp").value * 0.2;
	
	if (p1<0 || p1>10 || p2<0 || p2>10 || tp<0 || tp>10) { 
	   document.getElementById("resultado").innerHTML = "As notas deverão ser de 0 a 10";
	   return false;
	}
	
	var nota = p1+p2+tp;
	
	if ( nota >= 6 ){
	    var resultado = "APROVADO com nota " + nota;
	} else {
	    var resultado = "ALUNO DE P3 com nota " + nota
	}
 
	document.getElementById("resultado").innerHTML = resultado;
}