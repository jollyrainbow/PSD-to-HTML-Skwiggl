$(document).ready(function() {
	$('#menu li a').hover(function(){
		$(this).addClass('hover-menu');
	},
	function() {
		$(this).removeClass('hover-menu');
	});
});