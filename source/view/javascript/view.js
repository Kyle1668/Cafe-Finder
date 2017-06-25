function loadPlace(index) {
	var newContainer = initPlacePanel(PLACES_ARRAY[index]);
	$(".place-container").append(newContainer);
	$("#last").hide().fadeIn("slow");
	$("#last").removeAttr("id");
}

function removePlaces() {
	$(".load-more").css("opacity", "10");
	$(".place").fadeOut("slow", function () {
		$(this).remove();
	});
}

$(document).ready(function () {
	var numPlaces = 0;
	var maxNumPlaces = 5;

	// Load places
	$("#searchButton").click(function () {
		if (numPlaces > 0) {
			removePlaces();
			numPlaces = 0;
			maxNumPlaces = 5;
		}
		while (numPlaces != maxNumPlaces) {
			loadPlace(numPlaces)
			numPlaces++;
		}
		$(".load-more").css("opacity", "10");
	});

	// Load 5 more places
	$("#showMoreText").click(function() {
		MAXNUMPLACES += 5
		$(".load-more").css("opacity", "0");
		$("#searchButton").trigger("click");

		if (MAXNUMPLACES >= PLACES_ARRAY.length) {
			$("#showMoreText").hide();
		}

	});

});
