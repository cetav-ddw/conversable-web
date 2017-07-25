var btnRequest = document.getElementById('btnRequest');
var modalFake = document.getElementById('modalFake');
var opacity = document.getElementById('opacity');

btnRequest.addEventListener("click", function(){
	
	modalFake.style.display = "block"
 	opacity.style.display = "block"
});

opacity.addEventListener("click", function(){
	modalFake.style.display = "none"
 	opacity.style.display = "none"
});