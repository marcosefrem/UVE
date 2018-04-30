/*	----------------------------------------------------------------------------------------------------
	 JS para página home
------------------------------------------------------------------------------------------------------ */
;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));

$(".box").inViewport(function(px){
    if(px) {
	    
	    $(this).addClass("in-canvas");
	    $(this).removeClass("out-canvas");
    }else{
	   	 $(this).removeClass("in-canvas");
	   	 $(this).addClass("out-canvas");
	};
});



$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //>=, not <=
    if (scroll >= 10) {
        //clearHeader, not clearheader - caps H
        $("body").addClass("scrolled");
    }else{
        $("body").removeClass("scrolled");
	    
    }
}); //missing );


/*	--------------------------------------------------
	Declaración de funciones
-------------------------------------------------- */


/*	--------------------------------------------------
	Lógica de scripts
-------------------------------------------------- */
$(function() {

	
	
	$('#card-slider').slick({
		
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  dots: false,
		 responsive: [
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        dots: true
		      }
		    }
			]  
	  
	});


	

    $('input#phone').click(function(){
		if ($(this).is(':checked')) {
			$('#contactField').attr("placeholder", "Teléfono");
		}	    
    });
    $('input#email').click(function(){
		if ($(this).is(':checked')) {
			$('#contactField').attr("placeholder", "Email");

		}	    
    });
 
 
   	
	/*	--------------------------------------------------
		Llamada de funciones
	-------------------------------------------------- */


	
	/*	--------------------------------------------------
		Llamada de funciones en resize
	-------------------------------------------------- */
	$( window ).on('resize', function() {
		


	});

});
