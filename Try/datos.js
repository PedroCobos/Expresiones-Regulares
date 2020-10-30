//Inserta los datos en otra pagina html

var dato1 = localStorage["curp"];
var dato2 = localStorage["issn"];

var p1 = document.getElementById("issnField");
p1.innerHTML= dato1;
var p2 = document.getElementById("curpField");
p2.innerHTML= dato2;
