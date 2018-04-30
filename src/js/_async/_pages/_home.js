/*	----------------------------------------------------------------------------------------------------
	 JS para página home Async
------------------------------------------------------------------------------------------------------ */

/*	--------------------------------------------------
	Declaración de funciones
-------------------------------------------------- */
$(window).on('scroll', function(event) {
    var scrollValue = $(window).scrollTop();
    if (scrollValue == settings.scrollTopPx || scrollValue > 70) {
         $('.navbar').addClass('navbar');
    } 
});


/*	--------------------------------------------------
	Lógica de scripts
-------------------------------------------------- */
$(function() {
	/*	--------------------------------------------------
		Cerramos el menu de móvil y lanzamos el modal de login
		
	-------------------------------------------------- */
	
	$('#off-canvas__login').click(function(){
		
		closeCanvas();
		$('#modal-login').modal();
		
	})

	
	/*	--------------------------------------------------
		Llamada de funciones
	-------------------------------------------------- */
	 $('#card-slider').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
				 
		 
	 });





	
	/*	--------------------------------------------------
		Llamada de funciones en resize
	-------------------------------------------------- */
	$( window ).on('resize', function() {



	});

});
