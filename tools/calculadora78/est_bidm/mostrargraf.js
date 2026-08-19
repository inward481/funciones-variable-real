// JavaScript Document

        

		
		function Mostrargrafo(){
			if  (navigator.userAgent.indexOf('MSIE') !=-1) {
	  document.getElementById("chartContainer").style.marginLeft = "-5px";
	   document.getElementById("chartContainer").style.marginTop = "-150px";
  } else if (navigator.userAgent.indexOf('Firefox') !=-1) {
	  document.getElementById("chartContainer").style.marginLeft = "-150px";
  } else if (navigator.userAgent.indexOf('OPR') !=-1) {
	  document.getElementById("chartContainer").style.marginLeft = "-150px";
    
  } else if (navigator.userAgent.indexOf('Chrome') !=-1) {
	  document.getElementById("chartContainer").style.marginLeft = "-150px";
    
  } else if (navigator.userAgent.indexOf('safari') !=-1) {
	  document.getElementById("chartContainer").style.marginLeft = "-5px";
	  document.getElementById("chartContainer").style.marginTop = "-150px";
}
  
			var div = document.getElementById('grafo'); //obtiene el div como una variable mediante getelementbyid
	        div.style.display = ''; // cambia la propiedad display
			
		}
		
		function Ocultargrafo(){
			var div = document.getElementById('grafo');
	        div.style.display='none';
		}
		
		
		