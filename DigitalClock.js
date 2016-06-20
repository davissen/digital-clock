$(document).ready(function(){

	function digitalClock(){
		var currentTime = new Date ();
		var timePeriod = "AM"
		var currentHours = currentTime.getHours ( );
		var currentMinutes = currentTime.getMinutes ( );
		var currentSeconds = currentTime.getSeconds ( );


		if (currentHours == 0) {
			currentHours = 12
		} if (currentHours > 12 ){
			currentHours = currentHours - 12 ;
			timePeriod = "PM";
		} if (currentHours < 10){
			currentHours = "0" + currentHours;
		}


		if (currentMinutes < 10 ) {
			
			 currentMinutes = "0" + currentMinutes;
		}

		if (currentSeconds < 10 ) {
			
			currentSeconds = "0" + currentSeconds;
		}



		//Change the text color to a different color of the clock every hour, selected from an array of colors
		var list =[ '#F4F1BB','#A7CDBD','#5CA4A9','#869D7A','#424874','#DCD6F7','#DFFDFF']
		var bkgColor = list[Math.floor(Math.random()*list.length)]
		if ( currentMinutes == 00 && currentSeconds == 0 ){
			$('h1').css('color',bkgColor)
		}else{

		}

		//Change the background to a random color every 5 minutes
		var randomColor= '#'+Math.floor(Math.random()*16777215).toString(16);
		if ( currentMinutes % 5 == 0 && currentMinutes !==0 && currentSeconds == 0  ){
			$('body').css('background-color', randomColor);
		} else{
			
		}

		//color to black if it is an odd minute and another color if it is even minute
		if (currentMinutes % 2 == 0){
			$('.center').css('background-color', 'pink');
		} else if ( currentMinutes % 2 !== 0){
			$('.center').css('background-color', '#1a0000');
		}	
		
		
		document.getElementById('clock').innerHTML=timePeriod+" "+currentHours+" : "+currentMinutes+" : "+currentSeconds
	
	}

	setInterval(digitalClock,1000);

})




