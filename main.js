window.onscroll = function() {animateIn()};

function animateIn() {
	// add class .slideIn to figures when scroll height is 600px
	console.log('function triggered');
	if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
		var fadeMeIn = document.getElementsByTagName('figure');

		console.log(fadeMeIn);
				
		fadeMeIn.classList.remove("hidden");
		//fadeMeIn.classList.add("slideIn");
		fadeMeIn.className = 'slideIn';
		
		console.log('>600');
	} 
}