window.onscroll = function() {animateIn()};

function animateIn() {
	// add class .slideIn to figures when scroll height is 550px
	if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550){

		let fadeIn = document.querySelectorAll('#features figure');

		fadeIn.forEach(function(element, i) {
			// use setTimeout to delay fadeIn forEach 0.4s
			setTimeout(function(){
				element.classList.remove("hidden");
				element.classList.add("slideIn");
			}, 400 * (i + 1));
		});
	}
	if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
		// show back to top button
		document.getElementById('btt').className = "bounceIn";
		console.log('button should be visible');
	} 
}