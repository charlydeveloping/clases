// Función: Una función es un bloque de código independiente que realiza una tarea específica. 
// Las funciones pueden tomar datos de entrada (argumentos), procesar esos datos y devolver un resultado
// (valor de retorno).

function transformarTexto() {
  var texto = document.getElementById("textoEntrada").value;
  console.log(texto)
  var textoMayuscula = texto.toUpperCase();
  console.log(textoMayuscula)
  var textoMinuscula = texto.toLowerCase();
  console.log(textoMinuscula)

  var numeroCaracteres = texto.length;

  document.getElementById("textoMayusculas").textContent = textoMayuscula
  document.getElementById("textoMinusculas").textContent = textoMinuscula
  document.getElementById("numeroCaracteres").textContent = numeroCaracteres

}
