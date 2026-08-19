// JavaScript Document
 function vaciamemoria() //De Enric
 {
	 document.first.a11.value=""
	 document.first.frecuencia.value="" //De Enric
	 document.first.r1.value=""
	 document.first.r2.value=""
	 document.first.r3.value=""
	 document.first.r4.value=""
	 document.first.r5.value=""
	 document.first.suma_cua.value=""
	 document.first.suma.value=""
	 document.first.varianza.value=""
	 document.first.varianzap.value=""
	 document.first.desviacion.value=""
	 document.first.desviacionp.value=""
	 	 
 }

 function isNum(arg)
{
	var args = arg;
	var fad = true;

	if (args == "" || args == null || args.length == 0)
	{
		return false;
	}

	args = args.toString();

	for (var i = 0;  i<args.length;  i++)
	{
		if (args.substring(i,i+1) < "0" || args.substring(i, i+1) > "9")
		{
			if(args.substring(i, i+1) == ".")
			{
				if(fad == true)
					fad = false;
				else
					return false;			
			}
			else
			{
				return false;
			}
		}
	}
	return true;
}

function madd()
{
	var vva = document.first.a11.value;
	var frec= document.first.frecuencia.value; //De Enric
	vva = vva.replace(" ","");
	frec = frec.replace(" ",""); //De Enric
	var resul0;
	var resul2; //De Enric
	var bb = true;
	var bb2 = true; //De Enric
	
	if(vva != "")
	{	
		
		resul0 = vva.split(",");		
	}
	//De Enric-------------------------------------------------------
	if(frec != "")
	{	
		
		resul2 = frec.split(",");		
	}
    
	if(resul0.length!=resul2.length){
		alert("No coincide el número de elementos de los datos y el de las frecuencias, los resultados serán erróneos")
	}
	
	
	
	//De Enric-------------------------------------------------------
	for(var v=0; v<resul0.length; v++)
	{
		var d = resul0[v]; //Esta es la matriz que buscaba l'Enric
	
		if(isNaN(d) || d == "")
		{
			alert("Este número no es una expresión válida");
			var bb = false;
			break;
		}
		
		
	}
 //De Enric-------------------------------------------------------	
	for(var v2=0; v2<resul2.length; v2++)
	{
		var d2 = resul2[v2]; //Esta es la matriz que buscaba l'Enric
	
		if(isNaN(d2) || d2 == "")
		{
			alert("Este número no es una expresión válida");
			var bb2 = false;
			break;
		}
		
		
	}
	
	

var resul = new Array();
var t=0;
for(i=0; i<resul0.length; i++){
	for(j=0; j<resul2[i]; j++){
		
		resul[t]=resul0[i];
		t=t+1;
	}
}


	if(bb == true)
	{
		var tot = resul.length;
		var mean=0;
		document.first.r1.value = tot;
		
//Variance of a number array
var deviation = new Array();
var sum = 0;
var sum2 = 0;
var devnsum = 0;
var stddevn = 0;
var len = resul.length;
for (var i=0; i<len; i++) {
sum = sum + (resul[i] * 1);  // ensure number
sum2=sum2+(resul[i] *resul[i]);
}
var mean2 = (sum/len).toFixed(16);  // 6 decimal places
for (i=0; i<len; i++) {
deviation[i] = resul[i] - mean2;
deviation[i] = deviation[i] * deviation[i];
devnsum = devnsum + deviation[i];
}
stddevn = Math.sqrt(devnsum/(len-1)).toFixed(6);  // 6 decimal places
stddevnn = Math.sqrt(devnsum/(len)).toFixed(6);  // 6 decimal places
suma_cua = (stddevnn*stddevnn*len+len*mean2*mean2).toFixed(6);

document.first.varianza.value = stddevnn*stddevnn;
document.first.desviacion.value = stddevnn;
document.first.varianzap.value = stddevn*stddevn;
document.first.desviacionp.value = stddevn;
document.first.suma_cua.value = sum2;
document.first.suma.value = sum;

	
		//Mean calculation
		for(var c=0; c<tot; c++)
		{
			mean = mean+parseFloat(resul[c]);
		}
		mean = mean/tot;
		document.first.r2.value = Math.round(mean*100000)/100000;	

		//Medial calculation
		var resal = sorting(resul);
		var median = 0;

		if(tot%2 == 0)
		{
			var sdd = "("+parseFloat(resal[(tot/2)-1])+"+"+parseFloat(resal[tot/2])+")/2";
			median = sdd+" = "+eval(sdd);
		}
		else
		{
			median = resal[(tot-1)/2];
		}
		document.first.r3.value = median;
		document.first.r5.value = resal;

		var modeval=0;
		var maxval=0;
		var mode,curval;
		curval = resal[0];
	
		for(var z=0; z<=tot; z++)
		{
			var zval = resal[z];
			if(zval == curval)
			{
				//alert(zval+"--"+curval);
				modeval=modeval+1;
				if(modeval > maxval)
				{
					mode = curval;
					maxval = modeval;
				}
			}
			else
			{
				//alert(curval+"--"+modeval+"--"+maxval);
				if(modeval == maxval &&  mode != curval)
				{
					mode = mode+","+curval;
				}
				
				curval = zval;
				modeval = 1;
			}			
		}
		document.first.r4.value = mode;
    

	}
}

function sorting(resul)
{
	var sortnum = true;
	var pos = 0;
	tot = resul.length;
	while(sortnum == true)
	{
		for(var j=(pos+1); j<tot; j++)
		{
			var rd = parseFloat(resul[pos]);
			var fg = parseFloat(resul[j]);
			if(rd > fg)
			{
				resul[pos] = fg;
				resul[j] = rd;
			}
		}
		pos = pos+1;
		if(pos >= tot)
		{
			sortnum=false;
		}
	}

	return resul;
}


