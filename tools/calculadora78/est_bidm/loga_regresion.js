// JavaScript Document. Enric Ripoll Mira
function calculos_loga() {
	
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
	var x_mit=0;
	var y_mit=0;
	var x2y2=0;
	var arr5= new Array();
	
	for(var j=0;j<arr.length;j++){
		arr[j]=parseFloat(arr[j]);
		arr2[j]=parseFloat(arr2[j]);
		arr3[j]=parseFloat(arr3[j]);
		arr5[j]=Math.log(arr[j]);
		x_mit+=arr[j]*arr3[j];
		y_mit+=arr2[j]*arr3[j];
		x+=arr5[j]*arr3[j];
		y+=arr2[j]*arr3[j];
		ft+=arr3[j];
		xx+=arr3[j]*Math.pow(arr5[j],2);
		yy+=arr3[j]*Math.pow(arr2[j],2);
		xy+=arr5[j]*arr2[j]*arr3[j];
	}
	var xy_n=xy/ft;
	var xx_n=xx/ft;
	var xy_n=xy/ft;
	
	var xmean=x/ft;
	var ymean=y/ft;
	pend=(xy_n-xmean*ymean)/(xx_n-xmean*xmean);
	orden=ymean-pend*xmean;
	pend=Math.round(pend*10000000)/10000000;
	orden=Math.round(orden*10000000)/10000000;
	y=orden+' + '+pend+' x';
	var x_y=0;
    var cvarx=0;
    var cvary=0;
	var sigmaa=0;
	var err_pend=0;
	for(var j=0;j<arr.length;j++){
		arr5[j]=parseFloat(arr5[j]);
		arr2[j]=parseFloat(arr2[j]);
		x_y+=arr3[j]*(arr5[j]-xmean)*(arr2[j]-ymean);
		cvarx+=arr3[j]*(arr5[j]-xmean)*(arr5[j]-xmean);
		cvary+=arr3[j]*(arr2[j]-ymean)*(arr2[j]-ymean);
		sigmaa+=arr3[j]*(arr2[j]-pend*arr5[j]-orden)*(arr2[j]-pend*arr5[j]-orden);
		x2y2+=arr[j]*arr2[j]*arr3[j];
					}
	var x2y2_n=x2y2/ft;
	var mitjana_x=x_mit/ft;
	var mitjana_y=y_mit/ft;
	var covarxy=x2y2_n-mitjana_x*mitjana_y;
	var sigma2=Math.sqrt(sigmaa/(arr.length-2));		
	var varx=cvarx/ft
	var vary=cvary/ft
	var sxy=x_y/ft;
	var coefcor=sxy/(Math.sqrt(varx)*Math.sqrt(vary));
	var err_pend=(Math.sqrt(ft)*sigma2)/Math.sqrt(ft*xx-x*x);
	var err_orden = err_pend*Math.sqrt(xx/ft);
	var A1 = orden;
	var B1 = pend;
	var A = A1;
	var B = B1;

	document.getElementById("res_area").style.visibility = "visible";
	document.getElementById("result1").value = ft;
	document.getElementById("result2").value = mitjana_x;
	document.getElementById("result3").value = mitjana_y;
	document.getElementById("result4").value = covarxy;
	document.getElementById("result5").value = coefcor*coefcor;
	document.getElementById("result6").value = "";
	document.getElementById("result7").value = A;
	document.getElementById("result8").value = B;
	document.getElementById("result9").value = "";
	document.getElementById("result10").value = "";
	document.getElementById("result11").value = "";
	document.getElementById("result12").value = "";
	
	var AA = Math.round(A * 1000) / 1000;
	var BB = Math.round(B * 1000) / 1000;
	var tipo = "logar\u00EDtmico"
	document.getElementById("tipo").value = tipo;
	var controlx = new Array();
    var controly = new Array();
	for(i=0;i<1199;i++){
	controlx[i]=min_x+i*(max_x-min_x)/1199;
	controly[i]=A+B*Math.log(controlx[i]);
	}
	
	
			
		var dps=new Array;
		var dps2=new Array;
			
			
		for(i=0;i<arr.length;i++){
			dps[i]=({x: parseFloat(arr[i]),y: parseFloat(arr2[i])});
		}
		
		for(i=0;i<1199;i++){
			dps2[i]=({x: parseFloat(controlx[i]),y: parseFloat(controly[i])});
		}
		
				
		
		var chart = new CanvasJS.Chart("chartContainer",
    {
	  zoomEnabled: true,
	  backgroundColor: "#F5F6CE",
      theme: "theme3",    // "theme1"
      title:{
      text: "Ajuste logar\u00EDtmico"
	   
      },
      data: [
      { 
	    markerColor: "orange",     
        type: "scatter",
		markerBorderColor : "red", 
		
        dataPoints: dps
      },
        {        
        type: "line",
		color: "#ff0033",
		showInLegend: true,
		legendText: "y="+AA+"+"+BB+"\u00B7ln(x)",
		dataPoints: dps2
      }     
      ]
    });

    chart.render();
	
  }
