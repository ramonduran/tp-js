function descobrirNomeNinja(){
	var nome = document.getElementById("nome").value.toUpperCase();
	var aux = '';
	
	// nome[0] = T | '' + CHI
	// nome[1] = E | CHI + KU
	// nome[3] = D | CHIKU + TE
	// CHIKUTE
	
	for ( index in nome ) {
		
		var letra = nome[index];
		
		switch(letra) {
		    case 'A': aux += 'KA'; break;
		    case 'B': aux += 'TU'; break;
		    case 'C': aux += 'MI'; break;
		    case 'D': aux += 'TE'; break;
		    case 'E': aux += 'KU'; break;
		    case 'F': aux += 'LU'; break;
		    case 'G': aux += 'JI'; break;
		    case 'H': aux += 'RI'; break;
		    case 'I': aux += 'KI'; break;
		    case 'J': aux += 'ZU'; break;
		    case 'K': aux += 'ME'; break;
		    case 'L': aux += 'TA'; break;
		    case 'M': aux += 'RIN'; break;
		    case 'N': aux += 'TO'; break;
		    case 'O': aux += 'MO'; break;
		    case 'P': aux += 'NO'; break;
		    case 'Q': aux += 'KE'; break;
		    case 'R': aux += 'SHI'; break;
		    case 'S': aux += 'ARI'; break;
		    case 'T': aux += 'CHI'; break;
		    case 'U': aux += 'DO'; break;
		    case 'V': aux += 'RU'; break;
		    case 'X': aux += 'NA'; break;
		    case 'W': aux += 'MEI'; break;
		    case 'Y': aux += 'FU'; break;
		    case 'Z': aux += 'RA'; break;
		    default: false;
		}
		
	} // endfor.
	
	document.getElementById("resultado").innerHTML = aux;
}