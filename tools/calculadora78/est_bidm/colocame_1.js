// JavaScript Document
function coloca_1(){ //De Enric
var x = document.getElementById("entradax").value;
x=x.replace(' ','');
var arr=x.split(',');
	
var frecuencia="1";
 
 for (i=0;i<=arr.length-2;i++){
	 frecuencia=frecuencia+",1";
 }
 
	 document.estadistica.textarea3.value=frecuencia;
	 
 
}