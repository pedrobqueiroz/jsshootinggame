$(function(){

	$(document).keydown(function(e){
		var down = $("#square");
		var position = $("#square").position();
		
		//This console.log shows us the position of the square
		console.log(position);


		var top = position.top;
			left = position.left;	

	/* SWITCH::
	1. Move the box around the #container with (example) 'top': '+=100'
	2. The IF limits the movement to the #container */
		switch(e.keyCode){
			case 40: // down key
				$("#square").css('top', '+=100px');

				if(top >= 600){
					$("#square").css("top", "700px");
				} 
				break;

			case 38: // up key
				$("#square").css('top', '-=100px');
				
				if(top <= 100){
					$("#square").css("top", "0");
				} 
				break;

			case 37: // left key
				$("#square").css({
					'left': '-=100px',

				});

				if(left <= 100){
					$("#square").css("left", "0");
				} 
				break;

			case 39: //right key
				$("#square").css({
					'left': '+=100px',
					'transform':'rotateY(180deg)'
				});

				if(left >= 600){
					$("#square").css("left", "700px");
				}
				break;
		}

	});//KEYDOWN END

	/* CLICK: 
	1. Change square color, turns off keydown
	2. #gameOver fades in */
	$("#square").click(function(){
		$(this).effect("shake");

		var healthWitch = $("#health-bar-one div").width();
		console.log(healthWitch);

		$("#gameOver").fadeIn("5000");	
		$(document).off("keydown");
		$("h2 a").fadeIn("5500");
		$("p").hide();
		
		
	});//CLICK END


});//JQUERY END


/* TIME */
		var time = 30;
		var title = document.getElementsByTagName("p")[0];

		function timeFunction(){
			if(time == 0){
				title.textContent="0";
				clearInterval(idInterval);
			}else{
				title.textContent= time;
				time--;
			}
		};
		var idInterval = setInterval(timeFunction,1000);