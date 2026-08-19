// JavaScript Document. Enric Ripoll Mira
function calculos_cubi() {
	
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
	var yyy=0;
	var xxy=0;
	var xxxy=0;
	var xxx=0;
	var xxxx=0;
	var xxxxx=0;
	var xxxxxx=0;
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
		yyy+=arr3[j]*Math.pow(arr2[j],3);
		xy+=arr[j]*arr2[j]*arr3[j];
		xxy+=Math.pow(arr[j],2)*arr2[j]*arr3[j];
		xxxy+=Math.pow(arr[j],3)*arr2[j]*arr3[j];
		xxx+=Math.pow(arr[j],3)*arr3[j];
		xxxx+=Math.pow(arr[j],4)*arr3[j];
		xxxxx+=Math.pow(arr[j],5)*arr3[j];
		xxxxxx+=Math.pow(arr[j],6)*arr3[j];
	}
	var xmean=x/ft;
	var ymean=y/ft;
	var xy_n=xy/ft;
	var covarxy=xy_n-xmean*ymean;
	var a00 = ft;
	var a01 = x;
	var a02 = xx;
	var a03= xxx;
	var a04 = y;
	var a10 = x;
	var a11 = xx;
	var a12 = xxx;
	var a13 = xxxx;
	var a14 = xy;
	var a20 = xx;
	var a21 = xxx;
	var a22 = xxxx;
	var a23 = xxxxx;
	var a24 = xxy;
	var a30 = xxx;
	var a31 = xxxx;
	var a32 = xxxxx;
	var a33 = xxxxxx;
	var a34 = xxxy;

	
	
	
	 a = new Array();
	 a= [[a00,a01,a02,a03,a04],[a10,a11,a12,a13,a14],[a20,a21,a22,a23,a24],[a30,a31,a32,a33,a34]]
	 
	 for (i=4;i>=0;i--){
		 a[0][i]=a[0][i]/a00
	 }
	 
	 
	 
	 for (i=4;i>=0;i--){
		 a[1][i]=a[1][i]+a[0][i]*(-a[1][0])
		 a[2][i]=a[2][i]+a[0][i]*(-a[2][0])
		 a[3][i]=a[3][i]+a[0][i]*(-a[3][0])
	 }
	 
	 a00=a[0][0]
	 a01=a[0][1]
	 a02=a[0][2]
	 a03=a[0][3]
	 a04=a[0][4]
	 a10=a[1][0]
	 a11=a[1][1]
	 a12=a[1][2]
	 a13=a[1][3]
	 a14=a[1][4]
	 a20=a[2][0]
	 a21=a[2][1]
	 a22=a[2][2]
	 a23=a[2][3]
	 a24=a[2][4]
	 a30=a[3][0]
	 a31=a[3][1]
	 a32=a[3][2]
	 a33=a[3][3]
	 a34=a[3][4]
	 	 
	 for (i=4;i>=0;i--){
		 a[1][i]=a[1][i]/a11
	 }
	 for (i=0;i<=4;i++){
		 a[2][i]=a[2][i]+a[1][i]*(-a21)
		 a[3][i]=a[3][i]+a[1][i]*(-a31)
	 }
	 a00=a[0][0]
	 a01=a[0][1]
	 a02=a[0][2]
	 a03=a[0][3]
	 a04=a[0][4]
	 a10=a[1][0]
	 a11=a[1][1]
	 a12=a[1][2]
	 a13=a[1][3]
	 a14=a[1][4]
	 a20=a[2][0]
	 a21=a[2][1]
	 a22=a[2][2]
	 a23=a[2][3]
	 a24=a[2][4]
	 a30=a[3][0]
	 a31=a[3][1]
	 a32=a[3][2]
	 a33=a[3][3]
	 a34=a[3][4]
	 for (i=0;i<=4;i++){
		 a[2][i]=a[2][i]/a22
	 }
	 for (i=0;i<=4;i++){
		 a[3][i]=a[3][i]+a[2][i]*(-a32)
	 }
	 a00=a[0][0]
	 a01=a[0][1]
	 a02=a[0][2]
	 a03=a[0][3]
	 a04=a[0][4]
	 a10=a[1][0]
	 a11=a[1][1]
	 a12=a[1][2]
	 a13=a[1][3]
	 a14=a[1][4]
	 a20=a[2][0]
	 a21=a[2][1]
	 a22=a[2][2]
	 a23=a[2][3]
	 a24=a[2][4]
	 a30=a[3][0]
	 a31=a[3][1]
	 a32=a[3][2]
	 a33=a[3][3]
	 a34=a[3][4]
	 for (i=0;i<=4;i++){
		 a[3][i]=a[3][i]/a33
	 }
	 for (i=0;i<=4;i++){
		 a[2][i]=a[2][i]+ a[3][i]*(-a23)
	 	 a[1][i]=a[1][i]+ a[3][i]*(-a13)
		 a[0][i]=a[0][i]+ a[3][i]*(-a03)
	 	 a[1][i]=a[1][i]+ a[2][i]*(-a12)
	 	 a[0][i]=a[0][i]+ a[2][i]*(-a02)
		 a[0][i]=a[0][i]+ a[1][i]*(-a01)
	 }
		 
	
	var A=a[0][4];
	var B=a[1][4];
	var C=a[2][4];
	var D=a[3][4];
	var R_a=0;
	var R_b =0;
	var R_b1 =0;
	var R_b2 =0;
	var R_2 =0;
	var S_e_2=0;
	
	for(i=0; i<arr.length;i++){
		R_a += arr3[i]*(arr2[i]-ymean)*(arr2[i]-ymean);
	    R_b1 = arr3[i]*(arr2[i]-(A+B*arr[i]+C*arr[i]*arr[i]+D*arr[i]*arr[i]*arr[i]));
		R_b2 = (arr2[i]-(A+B*arr[i]+C*arr[i]*arr[i]+D*arr[i]*arr[i]*arr[i]));
		R_b += R_b1*R_b2;
	}
		R_2=(R_a-R_b)/R_a;
		
		S_e_2 = (yy-A*y-B*xy-C*xxy-D*xxxy)/ft;
	
	document.getElementById("res_area").style.visibility = "visible";
	document.getElementById("result1").value = ft;
	document.getElementById("result2").value = xmean;
	document.getElementById("result3").value = ymean;
	document.getElementById("result4").value = covarxy;
	document.getElementById("result5").value = R_2;
	document.getElementById("result6").value = "";
	document.getElementById("result7").value = A;
	document.getElementById("result8").value = B;
	document.getElementById("result9").value = C;
	document.getElementById("result10").value = D;
	document.getElementById("result11").value = "";
	document.getElementById("result12").value = "";
	
	
	var AA = Math.round(A * 100) / 100;
	var BB = Math.round(B * 100) / 100;
	var CC = Math.round(C * 100) / 100;
	var DD = Math.round(D * 100) / 100;
	var tipo = "c\u00FAbico"
	document.getElementById("tipo").value = tipo;
	var controlx = new Array();
    var controly = new Array();
	for(i=0;i<1199;i++){
	controlx[i]=min_x+i*(max_x-min_x)/1199;
	controly[i]=A+B*controlx[i]+C*Math.pow(controlx[i],2)+D*Math.pow(controlx[i],3);
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
      text: "Ajuste c\u00FAbico"  
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
		color: "#088A08",
		showInLegend: true,
		legendText: "y = " + AA + "+" + BB + "x + " + CC + "x^2 +" + DD + "x^3",
        dataPoints: dps2
      }
        
      ]
    });

    chart.render();
	
  }


