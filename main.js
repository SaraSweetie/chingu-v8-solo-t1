let firstFive = [];

window.onload = function() {fadeEachIn(firstFive)};

function fadeEachIn(firstFive) {
  let elements = document.getElementsByClassName('element');

  firstFive.push(elements);

  console.log(elements);

  firstFive.forEach(function(element, i) {
	console.log(firstFive);
	// use setTimeout to delay fadeIn of first 5 elements onload
	setTimeout(function(){
		//element.classList.remove("element");
		element.classList.add("slideIn");
	}, 200 * (i + 1));

	});
}

/*window.onload = function() {fadeEachIn()};

function fadeEachIn() {
  let elements = document.getElementsByClassName('element');
  
  console.log(elements);

  elements.forEach(function(element, i) {
	console.log(element);
	// use setTimeout to delay fadeIn of first 5 elements onload
	setTimeout(function(){
		//element.classList.remove("element");
		element.classList.add("slideIn");
	}, 200 * (i + 1));

	});
}*/

window.onscroll = function() {animateInScroll()};

function animateInScroll() {
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