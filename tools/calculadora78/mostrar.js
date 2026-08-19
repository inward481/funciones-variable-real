// JavaScript Document

        

		
		function MostrarDiv(){
			var div = document.getElementById('divOculto'); //obtiene el div como una variable mediante getelementbyid
	        div.style.display = ''; //cambia la propiedad del div del display de su style 
		}
		
		function OcultarDiv(){
			var div = document.getElementById('divOculto');
	        div.style.display='none';
		}