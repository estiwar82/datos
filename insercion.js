function insercion(vector) {
    let n = vector.length;
        for (let cicloPrincipal = 1; cicloPrincipal < n; cicloPrincipal++) {
            let valorActual = vector[cicloPrincipal];
            let cicloSecundario = cicloPrincipal-1; 

            while ((cicloSecundario > -1) && (valorActual < vector[cicloSecundario])) {
                vector[cicloSecundario+1] = vector[cicloSecundario];
                cicloSecundario--;
            }
            vector[cicloSecundario+1] = valorActual;
        }
    return vector;
}
function ejecutaInsercion(){
    let vector = document.getElementById("vectorInsercion").value; 
    vector = JSON.parse(vector)
    let resultado = insercion(vector)
    document.getElementById('resultadoInsercion').innerHTML=resultado;
}