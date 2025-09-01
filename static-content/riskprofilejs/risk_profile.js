ht = window.outerHeight;
if(ht < 750){
	console.log("mob");
	$(".container").css("height","80vh");
	$(".container").css("margin-bottom","20px");
}
else{
	console.log("desk");
	$(".container").css("height","80vh");
	$(".container").css("margin-bottom","20px");
}	

var a = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var cur = 0;

$(".container").css("display","none");
$("#q0").animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
prevButton();

function prevButton(){
	if(cur>1){
		$("#prev").css("display","inline");
	}
	else{
		$("#prev").css("display","none");
	}
	if(cur==0 || cur==18){
		$("#exit, #next").css("display","none");
	}
	else{
		$("#exit").css("display","block");
		$("#next").css("display","inline");
	}
}

$("#next, #q0 .body-button").on("click",next);
$("#prev").on("click",prev);

function next(){
	$("#q"+cur).animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
	$("#q"+(cur+1)).animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
	cur = cur+1;
	prevButton();
}

function prev(){
	$("#q"+cur).animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
	$("#q"+(cur-1)).animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
	cur = cur-1;
	prevButton();
}

$("#options div").on("click",function(){
	a[parseInt($(this).attr("class"))] = parseInt($(this).attr("value"));
	$(this).parent().children().css({
		"background":"none",
		"color":"#011627",
		"border":"none",
	});
	$(this).css({
		"background": "#f1f1f1",
		"color": "#011627",
		"border": "0px solid #f1f1f1",	
		"border-radius": "10px"
	});
	$(this).find('span').css('color', '#011627');
	
	next();
});



$("#exit").on("click", function(){
	$("#q"+cur).animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
	$("#q0").animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
	cur = 0;
	a = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	$("#options div").css({
		"background":"none",
		"color":"#011627",
		"border":"none",
	});
	prevButton();
});

$("#q17 .body-button").on("click", function(){
	S=0;
	for(i=0;i<17;i++){
		S = S+a[i];
	}

	console.log(S);
	$(".cash-plus, .cautious, .balanced, .aggressive, .super-aggressive").css("display","none");
	$("#q18 h2 span").text(S);
	if(S<22){
		$("#q18 h1 span").text("Mixed Asset 30% Equity");
		$(".cash-plus").css("display","block");
		$('#buyModelProfileVal').val("Cash Plus");
	}
	else if(S<45){
		$("#q18 h1 span").text("Mixed Asset 50% Equity");
		$(".cautious").css("display","block");
		$('#buyModelProfileVal').val("Cautious");
	}
	else if(S<69){
		$("#q18 h1 span").text("Mixed Asset 70% Equity");
		$(".balanced").css("display","block");
		$('#buyModelProfileVal').val("Balanced");
	}
	else if(S<91){
		$("#q18 h1 span").text("Mixed Asset 90% Equity");
		$(".aggressive").css("display","block");
		$('#buyModelProfileVal').val("Aggressive");
	}
	else{
		$("#q18 h1 span").text("Indian 100% Equity");	
		$(".super-aggressive, .tax-benefit").css("display","block");
		$('#buyModelProfileVal').val("Super-Aggressive");
	}
	$("#buttons").css("display","none");
	next();
})
