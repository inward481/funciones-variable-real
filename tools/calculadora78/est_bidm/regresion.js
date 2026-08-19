// JavaScript Document. Enric Ripoll Mira
   
function calculos() {
	var x = document.getElementById("entradax").value;
	var y = document.getElementById("entraday").value;
	var f = document.getElementById("frecuencia").value;
	x=x.replace(' ','');
	y=y.replace(' ','');
	f=f.replace(' ','');	
	var arr=x.split(',');
	var arr2=y.split(',');
	var arr3=f.split(',');
	
// Valores máximos
    var max_x = Math.max.apply(Math, arr);
	var min_x = Math.min.apply(Math, arr);
	var max_y = Math.max.apply(Math, arr2);
	var min_y = Math.min.apply(Math, arr2);
	var max_x = Math.max(max_x,Math.abs(min_x));
	var max_y = Math.max(max_y,Math.abs(min_y));
	
	
	if(arr.length!=arr2.length||arr.length==0 || arr2.length!=arr3.length || arr.length!=arr3.length){
		alert("¡Cuidado, revisa los datos!");
		
	}
	var lcm=0;
	var flag=false;
	var total=1;
	var x=0;
	var y=0;
	var xy=0;
	var xx=0;
	var yy=0;
	var ft=0;
	for(var j=0;j<arr.length;j++){
		arr[j]=parseFloat(arr[j]);
		arr2[j]=parseFloat(arr2[j]);
		arr3[j]=parseFloat(arr3[j]);
		x+=arr[j]*arr3[j];
		y+=arr2[j]*arr3[j];
		ft+=arr3[j];
		xx+=arr3[j]*Math.pow(arr[j],2);
		yy+=arr3[j]*Math.pow(arr2[j],2);
		xy+=arr[j]*arr2[j]*arr3[j];
	}
	var xy_n=xy/ft;
	var xx_n=xx/ft;
	var xy_n=xy/ft;
	
	var xmean=x/ft;
	var ymean=y/ft;
	pend=(xy_n-xmean*ymean)/(xx_n-xmean*xmean);
	orden=ymean-pend*xmean;
		
	var x_y=0;
    var cvarx=0;
    var cvary=0;
	var sigmaa=0;
	var err_pend=0;
	for(var j=0;j<arr.length;j++){
		arr[j]=parseFloat(arr[j]);
		arr2[j]=parseFloat(arr2[j]);
		x_y+=arr3[j]*(arr[j]-xmean)*(arr2[j]-ymean);
		cvarx+=arr3[j]*(arr[j]-xmean)*(arr[j]-xmean);
		cvary+=arr3[j]*(arr2[j]-ymean)*(arr2[j]-ymean);
		sigmaa+=arr3[j]*(arr2[j]-pend*arr[j]-orden)*(arr2[j]-pend*arr[j]-orden);
					}
	var sigma2=Math.sqrt(sigmaa/(arr.length-2));		
	var varx=cvarx/ft
	var vary=cvary/ft
	var sxy=x_y/ft;
	var coefcor=sxy/(Math.sqrt(varx)*Math.sqrt(vary));
	var err_pend=(Math.sqrt(ft)*sigma2)/Math.sqrt(ft*xx-x*x);
	var err_orden = err_pend*Math.sqrt(xx/ft);
	var A=orden;
	var B = pend;

	// aqui 1
	
	var AA = Math.round(A * 1000) / 1000;
	var BB = Math.round(B * 1000) / 1000;
	var funcion="";
	
	// grafica = new Array();
	// for(i=min_x;i<=max_x;i+=0.25){
	// 	grafica.push([i,A+B*i]);
	//}
	
	
	
}
	

  

	
	
	


