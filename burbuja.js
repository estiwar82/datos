function burbuja(vector) {
  
    for (let cicloPrincipal = 0; cicloPrincipal < vector.length ; cicloPrincipal++) {
      for(let cicloSecundario = 0 ; cicloSecundario < vector.length - cicloPrincipal - 1; cicloSecundario++){ 
          
      if (vector[cicloSecundario] > vector[cicloSecundario + 1]) {      
        let temporal = vector[cicloSecundario];
        vector[cicloSecundario] = vector[cicloSecundario + 1];
        vector[cicloSecundario + 1] = temporal;
      }
     }
    }
    return vector;
  }
  function ejecutaBurbuja(){
    let vector = document.getElementById("vectorBurbuja").value; 
    vector = JSON.parse(vector)
    let resultado = burbuja(vector)
    document.getElementById('resultadoBurbuja').innerHTML=resultado;
}