function rapido(vector, izquierda, derecha)
{
	let cicloIncremento = izquierda;
	let cicloDecremento = derecha;
	let temporal;
	pivoteTemporal = (izquierda + derecha) / 2; 
	let pivote = parseInt(vector[pivoteTemporal.toFixed()]);  

	while (cicloIncremento <= cicloDecremento)
	{
		while (parseInt(vector[cicloIncremento]) < pivote){
            cicloIncremento++;
        }
		while (parseInt(vector[cicloDecremento]) > pivote){
			cicloDecremento--;
        }
		if (cicloIncremento <= cicloDecremento)
		{
			temporal = vector[cicloIncremento];
			vector[cicloIncremento] = vector[cicloDecremento];
			vector[cicloDecremento] = temporal;
			cicloIncremento++;
			cicloDecremento--;
		}
	}

	if (izquierda < cicloDecremento){
		rapido(vector, izquierda, cicloDecremento);
    }
	if (cicloIncremento < derecha){
		rapido(vector, cicloIncremento, derecha);
    }
	return vector;
}
function ejecutaRapido(){
    let vector = document.getElementById("vectorRapido").value; 
    vector = JSON.parse(vector)
    let resultado = rapido(vector, 0, vector.length -1)
    document.getElementById('resultadoRapido').innerHTML=resultado;
}
