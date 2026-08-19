// JavaScript Document

function dibuixa(){
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
	
	graficax = new Array();
	graficay = new Array();
	for(i=0;i<=1199;i++){
		graficax.push([min_x+i*max_x-min_x/1200]);
		graficay.push([2+2*(min_x+i*max_x-min_x/1200)]);
	}
	
$(function() {

		

		for (var i = 0; i < arr.length; i++) {
			sin.push([arr[i], arr2[i]]);
			
		}
		
		for (var i = 0; i <arr.length; i++) {
			cos.push([arr[i], arr3[i]]);
		}
		
		

		var plot = $.plot("#placeholder", [
			{ data: sin, label: ""},
			
		], {
			series: {
				lines: {
					show: false
				},
				points: {
					show: true
				}
			},
			grid: {
				hoverable: true,
				clickable: true
			},
			xaxis: {
				min: min_x,
				max: max_x
			},
			yaxis: {
				min: min_y,
				max: max_y
			}
		});
				var plot = $.plot("#placeholder", [
			
			{ data: cos, label: "cos(x)"}
		], {
			series: {
				lines: {
					show: true
				},
				points: {
					show: false
				}
			},
			grid: {
				hoverable: true,
				clickable: true
			},
			xaxis: {
				min: min_x,
				max: max_x
			},
			yaxis: {
				min: min_y,
				max: max_y
			}
		});

		$("<div id='tooltip'></div>").css({
			position: "absolute",
			display: "none",
			border: "1px solid #fdd",
			padding: "2px",
			"background-color": "#fee",
			opacity: 0.80
		}).appendTo("body");

		$("#placeholder").bind("plothover", function (event, pos, item) {

			if ($("#enablePosition:checked").length > 0) {
				var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";
				$("#hoverdata").text(str);
			}

			if ($("#enableTooltip:checked").length > 0) {
				if (item) {
					var x = item.datapoint[0].toFixed(2),
						y = item.datapoint[1].toFixed(2);

					$("#tooltip").html(item.series.label + "(" + x + " , " + y +")")
						.css({top: item.pageY+5, left: item.pageX+5})
						.fadeIn(200);
				} else {
					$("#tooltip").hide();
				}
			}
		});

		$("#placeholder").bind("plotclick", function (event, pos, item) {
			if (item) {
				$("#clickdata").text(" - click point " + item.dataIndex + " in " + item.series.label);
				plot.highlight(item.series, item.datapoint);
			}
		});

		// Add the Flot version string to the footer

		$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
	});
	}