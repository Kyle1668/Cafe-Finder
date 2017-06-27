var NUMPLACES = 0;
var MAXNUMPLACES = 5;

function addPlace(newContainer) {
	$(".place-container").append(newContainer);
	$("#last").hide().fadeIn("slow");
	$("#last").removeAttr("id");
}

function loadPlaces() {
	while (NUMPLACES != MAXNUMPLACES) {
		addPlace(initPlacePanel(PLACES_ARRAY[NUMPLACES]));
		NUMPLACES++;
	}
	$(".load-more").css("opacity", "10");
}

function removePlaces() {
	$(".load-more").css('opacity', '0');
	$(".place").fadeOut("fast", function() {
		$(this).remove();
	});
	NUMPLACES = 0;
	MAXNUMPLACES = 5;
}

$(document).ready(function () {

	// Load places
	$("#searchButton").click(function () {
		removePlaces();
		loadPlaces();
		$(this).fadeOut("fast");
	});

	$("#searchBar").change(function() {
		if (NUMPLACES > 0) {
			$("#searchButton").fadeIn("fast");
			$("#searchButton").animate({ opacity: 1 });
			removePlaces();
		}
	});

	// Load 5 more places
	$("#showMoreText").click(function() {
		console.log("Clicked");
		MAXNUMPLACES += 5
		$(".load-more").css("opacity", "0");
		loadPlaces();

		if (MAXNUMPLACES >= PLACES_ARRAY.length) {
			$("#showMoreText").hide();
		}

	});

});
