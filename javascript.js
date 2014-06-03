var overlaySizeSet = false;

$(document).ready(function() {
	var squares = 16;
	makeGrid(squares);
	hover();
	$( "button" ).click(function() {
 		$("#container").empty();
 		squares = prompt("How many squares per side for new grid?");
 		makeGrid(squares);
 		hover();
	});
});

function makeGrid(squares) {
	var side = 960.0 / squares;	
	for (var i = 0; i < squares * squares; i++) {
		$("#container").append("<div class='block'/>");
	};
	$(".block").css("width", "" + side + "px");
	$(".block").css("height", "" + side + "px");
};

function hover() {
	$("div.block").mouseenter(function() {
		console.log($(this).css("backgroundColor"));
		if ($(this).css("backgroundColor") === "rgb(239, 239, 239)") {
			var r = Math.floor(Math.random() * 256);
 			var b = Math.floor(Math.random() * 256);
 			var g = Math.floor(Math.random() * 256);
			$(this).css("backgroundColor", "rgb(" + r + "," + b + "," + g +")");
 		}
 		/*if ($(this).children().length < 1) {
 			$(this).append("<div class='overlay'/>");
 			//$(".overlay").css("width", $(this).width() + "px");
 			//$(".overlay").css("height", $(this).height() + "px");
 		} else {
 			var $child = $(this).children(".overlay");
 			console.log($child.css("opacity"));
 			var newOpacity = parseFloat($child.css("opacity")) + .1;
 			$child.css("opacity", newOpacity);
 		}*/
	});
}