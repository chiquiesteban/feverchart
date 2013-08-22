var w, h, nox, noy, ndx, ndy,varl,varlbis,mouseX,mouseY,finald;
var Array1 = [];

$(document).ready(function(){

	w = $("#chart-c").width();
	h =  w*0.4;
	$("#chart-c").height(h);

	for (var i in data) {
		$("#chart-c").append('<div class="yearbar" id="yb'+i+'" style="left:'+(100/data.length)*(parseInt(i)+parseInt(1))+'%;"><span>'+data[i][0]+'</span></div>')
		if ( i%showEach != 0) { $("#yb"+i).addClass("invisiblebar")}
	}

	for (var j = vertSteps - 1; j >= 0; j--) {
		$("#chart-c").append('<div class="vbar" id="vb'+j+'" style="bottom:'+ (100/vertSteps)*j +'%"><div class="yaxis">'+(maxVert/vertSteps)*j+'</div></div>');
		$("#vb"+j).css("top", ($("#vb"+j).offset().top-parseInt(10)))
	};

	$(".yearbar").css("height", h);

	for (var k in data) {
		$("#yb"+k).append('<div class="lball" id="lb'+k+'a"></div>')
		$("#lb"+k+"a").css("bottom", (data[k][1]*100)/maxVert+"%")
		
		$("#yb"+k).append('<div class="lball" id="lb'+k+'b"></div>')
		$("#lb"+k+"b").css("bottom", (data[k][2]*100)/maxVert+"%")

		$("#yb"+k).append('<div class="lball" id="lb'+k+'c"></div>')
		$("#lb"+k+"c").css("bottom", (data[k][3]*100)/maxVert+"%")

		$("#yb"+k).append('<div class="lball" id="lb'+k+'d"></div>')
		$("#lb"+k+"d").css("bottom", (data[k][4]*100)/maxVert+"%")

		$("#yb"+k).append('<div class="lball" id="lb'+k+'e"></div>')
		$("#lb"+k+"e").css("bottom", (data[k][5]*100)/maxVert+"%")

		$("#yb"+k).append('<div class="lball" id="lb'+k+'f"></div>')
		$("#lb"+k+"f").css("bottom", (data[k][6]*100)/maxVert+"%")

		$("#yb"+k).append('<div class="lball" id="lb'+k+'g"></div>')
		$("#lb"+k+"g").css("bottom", (data[k][7]*100)/maxVert+"%")
	};



	var lineGraph1 = d3.select("#chart-c").append("svg:svg").attr("width", w).attr("height", h);
	drawLine(1,color1,lineGraph1,"a");

    var lineGraph2 = d3.select("#chart-c").append("svg:svg").attr("width", w).attr("height", h);
	drawLine(2,color2,lineGraph2,"b");

	var lineGraph3 = d3.select("#chart-c").append("svg:svg").attr("width", w).attr("height", h);
	drawLine(3,color3,lineGraph3,"c");

	var lineGraph4 = d3.select("#chart-c").append("svg:svg").attr("width", w).attr("height", h);
	drawLine(4,color4,lineGraph4,"d");

	var lineGraph5 = d3.select("#chart-c").append("svg:svg").attr("width", w).attr("height", h);
	drawLine(5,color5,lineGraph5,"e");

	var lineGraph6 = d3.select("#chart-c").append("svg:svg").attr("width", w).attr("height", h);
	drawLine(6,color6,lineGraph6,"f");

	var lineGraph7 = d3.select("#chart-c").append("svg:svg").attr("width", w).attr("height", h);
	drawLine(7,color7,lineGraph7,"g");


	$(window).resize(function(){
		w = $("#chart-c").width();
		h =  w*0.4;
		$("#chart-c").height(h);
		$(".yearbar").css("height", h);

		$(".vbar").remove();

		for (var j = vertSteps - 1; j >= 0; j--) {
			$("#chart-c").append('<div class="vbar" id="vb'+j+'" style="bottom:'+ (((j*vertSteps)*100)/maxVert) +'%"><div class="yaxis">'+(maxVert/vertSteps)*j+'</div></div>');
			$("#vb"+j).css("top", ($("#vb"+j).offset().top-parseInt(10)))
		};

		for (var p in data) {
			$("#lb"+p+"a").css("bottom", (data[p][1]*100)/maxVert+"%");
			$("#lb"+p+"b").css("bottom", (data[p][2]*100)/maxVert+"%");
			$("#lb"+p+"c").css("bottom", (data[p][3]*100)/maxVert+"%");
			$("#lb"+p+"d").css("bottom", (data[p][4]*100)/maxVert+"%");
			$("#lb"+p+"e").css("bottom", (data[p][5]*100)/maxVert+"%");
			$("#lb"+p+"f").css("bottom", (data[p][6]*100)/maxVert+"%");
			$("#lb"+p+"g").css("bottom", (data[p][7]*100)/maxVert+"%");
		}

		$("svg").remove();
		lineGraph1 = d3.select("#chart-c").append("svg:svg").attr("width", w).attr("height", h);
		lineGraph2 = d3.select("#chart-c").append("svg:svg").attr("width", w).attr("height", h);
		lineGraph3 = d3.select("#chart-c").append("svg:svg").attr("width", w).attr("height", h);
		lineGraph4 = d3.select("#chart-c").append("svg:svg").attr("width", w).attr("height", h);
		lineGraph5 = d3.select("#chart-c").append("svg:svg").attr("width", w).attr("height", h);
		lineGraph6 = d3.select("#chart-c").append("svg:svg").attr("width", w).attr("height", h);
		lineGraph7 = d3.select("#chart-c").append("svg:svg").attr("width", w).attr("height", h);
		drawLine(1,color1,lineGraph1,"a");
		drawLine(2,color2,lineGraph2,"b");
		drawLine(3,color3,lineGraph3,"c");
		drawLine(4,color4,lineGraph4,"d");
		drawLine(5,color5,lineGraph5,"e");
		drawLine(6,color6,lineGraph6,"f");
		drawLine(7,color7,lineGraph7,"g");
	})

});

function drawLine(num, color, lineG, letter) {

	for (var o in data) {

    	if (o < (data.length-1)) {
	    	nox = ($("#lb"+o+letter).offset().left)-5;
	    	noy = ($("#lb"+o+letter).offset().top)-5;
	    	ndx = ($("#lb"+parseInt((o*1)+1)+letter).offset().left)-5;
	    	ndy = ($("#lb"+parseInt((o*1)+1)+letter).offset().top)-5;

		    myLine = lineG.append("svg:line")
		    .attr("x1", nox)
		    .attr("y1", noy)
		    .attr("x2", ndx)
		    .attr("y2", ndy)
		    .style("stroke", color);
		    myLine.style("stroke-width", strokew)
		    myLine.style("stroke-linecap","round");;
		}

		$("#lb"+o+letter).mousemove(function(e){
			$("#nametag").remove();
				varl = (this.id).split("lb");
				varlbis = varl[1].split(letter);
				finald = data[varlbis[0]][num]
				$("#chart-c").append('<div id="nametag">'+
						'<div class="datedata">'+data[varlbis[0]][0]+'</div>'+
						'<div class="nametagdata">'+data[varlbis[0]][num]+'</div>'+
					'</div>')

			mouseX = e.pageX - 20 - $(this).parent().parent().offset().left;
      		mouseY = e.pageY + parseInt(20) - $(this).parent().offset().top;
      		$("#nametag").css({'top':mouseY,'left':mouseX, 'z-index':'110'});

		})

		$("#lb"+o+letter).mouseout(function(){
			$("#nametag").remove();
		})

	}


}
