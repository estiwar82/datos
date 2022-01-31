function seleccion(vector) { 
    let n = vector.length;
        
    for(let cicloPrincipal = 0; cicloPrincipal < n; cicloPrincipal++) {
        let minimo = cicloPrincipal;

        for(let cicloSecundario = cicloPrincipal+1; cicloSecundario < n; cicloSecundario++){
            if(vector[cicloSecundario] < vector[minimo]) {
                minimo=cicloSecundario; 
            }
         }
         if (minimo != cicloPrincipal) {
             let temporal = vector[cicloPrincipal]; 
             vector[cicloPrincipal] = vector[minimo];
             vector[minimo] = temporal;      
        }
    }
    return vector;
}

function ejecutaSeleccion(){
    let vector = document.getElementById("vectorSeleccion").value; 
    vector = JSON.parse(vector)
    let resultado = seleccion(vector)
    document.getElementById('resultadoSeleccion').innerHTML=resultado;
}