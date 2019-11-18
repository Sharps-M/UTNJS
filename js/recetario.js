/*
/////

Ejercicio2:
Armar un recetario para una ensalada

👉 Crear una variable por cada ingrediente de la lista
        (ej: declaran una variable que se llama zanahoria)
* Guardar cada valor de tipo "string" en su respectiva variable
    
👉 Crear una variable que se llame ingredientes
* Guardar en ella toda la suma de las variables de nuestras verduras juntas
* Luego de cada verdura deberán sumar un salto de línea para que cada verdura ocupe un renglón


👉 Utilizar el método document.write() para escribir en la pantalla del index.html
la lista de ingredientes.
* Les debería figurar de la siguiente manera:

Ingredientes =
🥕Zanahoria: 200gr
🍅Tomate: 400gr
🥦Brocoli: 200gr
🥑Aguacate 300gr

/////
*/


//Probe diferentes modos de implementar el document.write(), deshabilite todas menos la que me parecia mas "elegante", sin embargo las deje en el codigo como guia.

//alert("ESTO ES UN POP UP DE JAVASCRIPT");

//var vIngrediente1 = '<div class="alert alert-warning" role="alert">🥕Zanahoria: 200gr</div>';
//var vIngrediente2 = '<div class="alert alert-danger" role="alert">🍅Tomate: 400gr</div>';
//var vIngrediente3 = '<div class="alert alert-success" role="alert">🥦Brocoli: 200gr</div>';
//var vIngrediente4 = '<div class="alert alert-secondary" role="alert">🥑Aguacate: 300gr</div>';

//var vIngrediente1 = '🥕Zanahoria: 200gr';
//var vIngrediente2 = '🍅Tomate: 400gr';
//var vIngrediente3 = '🥦Brocoli: 200gr';
//var vIngrediente4 = '🥑Aguacate 300gr';

//var ensalada = vIngrediente1 + vIngrediente2 + vIngrediente3 + vIngrediente4;
//var ensalada = vIngrediente1+ '<br>' +vIngrediente2+ '<br>' +vIngrediente3+ '<br>' +vIngrediente4;

//document.write(ensalada);

//document.write('<div class="alert alert-warning" role="alert">'+ vIngrediente1 +'</div>' + '<div class="alert alert-danger" role="alert">'+ vIngrediente2 +'</div>' + '<div class="alert alert-success" role="alert">'+ vIngrediente3 +'</div>' + '<div class="alert alert-secondary" role="alert">' +vIngrediente4+ '</div>');

//document.write(vIngrediente1);
//document.write('<br>');
//document.write(vIngrediente2);
//document.write('<br>');
//document.write(vIngrediente3);
//document.write('<br>');
//document.write(vIngrediente4);
//document.write('<br>');

var inputArray = [];
var size = 4; //Maximum Array size

for(var i=0; i<size; i++) {
	
	//Taking Input from user
	inputArray[i] = prompt('Ingrese Ingredientes Ensalada:' + (i+1));
}

//Print the array in the console.
document.write("<h1>Ingredientes</h1><br>"+inputArray);



//var  vElementos = new Array();
//     vElementos.push('Aca Iria el Input method');

//     for (var i = 0; i < vElementos; i ++ ){
//        document.write(vElementos[i]);
//     };