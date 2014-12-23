//controles del libro en general
$(document).ready(init);


function init() {
    //single book
    $('#mi_libro').booklet({
        width: 960,
        height: 600,
        
        closed: true,
        covers:true,
        autoCenter: true,
        
        pagePadding: 0,
        hoverWidth: 70,
        
        shadows: true,
        shadowTopFwdWidth: 100
    });
    
    $("#bt_go").click(function(){
        $('#mi_libro').booklet("gotopage", $("#in_go").val());
    })
}

//Efecto al pasar el mouse sobre la luna aparece la imagen pagina 3
$(document).ready(luna);
function luna(){
	$('.ImageCorazon').hide('mostrar');
	$('.boton1').mouseenter(aparece);

	function aparece(){
		var x=$('.ImageCorazon').addClass('mostrar');
		x.fadeIn('slow');
	}
}
//Efecto del farol donde aparece la pareja
$(document).ready(faro);
function faro(){
	$('.botonFaros').mouseenter(parejaEntra);
	$('.botonFaros').mouseleave(parejaSale);

	function parejaEntra(){
		$('#Aparecer').fadeTo('fast',0.2);
	}

	function parejaSale(){
		$('#Aparecer').fadeTo('fast',1);
	}
}

//Efectos Pagina 4 de rotacion de fotos utilizando animate.css 
$(document).ready(efect);

function efect(){
	var imag4 = $('.fotoPag4');
	$(imag4).mouseenter(efectSwing);
	$(imag4).mouseleave(sle);

	function efectSwing(){
		$(imag4).addClass('animated flip');
	}

	function sle(){
		$(imag4).removeClass('animated flip');
	}
}

$(document).ready(efect2);

function efect2(){
	var imag42 = $('.fotoPag4-2');
	$(imag42).mouseenter(efectSwing2);
	$(imag42).mouseleave(sle2);

	function efectSwing2(){
		$(imag42).addClass('animated flip');
	}

	function sle2(){
		$(imag42).removeClass('animated flip');
	}
}

//Efecto Pagina 6 donde gira la foto
$(document).ready(efect3);

function efect3(){
	var imag43 = $('.fotoRecuerdo');
	$(imag43).mouseenter(efectSwing3);
	$(imag43).mouseleave(sle2);

	function efectSwing3(){
		$(imag43).addClass('animated flip');
	}

	function sle2(){
		$(imag43).removeClass('animated flip');
	}
}

//Efecto donde pasa el mouse sobre la luna aparece un texto
$(document).ready(efect4);

function efect4(){
	$('.LunaLunera').mouseenter(efectSwing4);
	$('.ContentLuna').fadeTo('fast',0);
	

	function efectSwing4(){
		$('.ContentLuna').fadeTo('slow',1);
		
	}

	
}

//Efecto pag 7 aparece corazon con estilos animate
$(document).ready(efect5);

function efect5(){
	var imag45 = $('.fondomar');
	var beso = $('.BesoCorazon');
	beso.hide();
	$(imag45).mouseenter(efectSwing5);
	

	function efectSwing5(){
		var rea = $(beso).show();
		$(rea).addClass('animated zoomIn');
	}
}
//Efecto al pasar el mouse en el sol aparece imagen
$(document).ready(efect6);

function efect6(){
	var imag46 = $('.SalSolcito');
	var soletra = $('.ContentSol');
	soletra.hide();
	imag46.mouseenter(efectSwing6);
	

	function efectSwing6(){
		var parrasol = $(soletra).show();
		$(parrasol).addClass('animated zoomIn');
	}
}
//Efecto Contraportada
$(document).ready(efect7);

function efect7(){
	var imag47 = $('.banquitaFinal');
	var parejacon = $('.parejacontra');
	//var paragrafo = $('.contenText');
	parejacon.fadeTo('fast',0);
	//paragrafo.hide();
	imag47.mouseenter(efectSwing7);
	

	function efectSwing7(){
		//$(parejacon).fadeTo('fast',1);
		var parejita = $(parejacon).fadeTo('fast',1);;
		$(parejita).addClass('animated fadeInDownBig');
		;
	}
}

$(document).ready(efect8);

function efect8(){
	var imag48 = $('.arbolCorazon');
	var paragrafo = $('.contenText');
	paragrafo.hide();
	imag48.mouseenter(efectSwing8);
	

	function efectSwing8(){
		var verParagrafo = $(paragrafo).show();
		$(verParagrafo).addClass('animated zoomIn');
	}
}