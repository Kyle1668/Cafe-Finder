$(document).ready(function () {
	var NUMPLACES = 0;
	var MAXNUMPLACES = 5;

	// Load places
	$("#searchButton").click(function () {
		while (NUMPLACES != MAXNUMPLACES) {
			var newContainer = initPlacePanel(PLACES_ARRAY[NUMPLACES]);
			$(".place-container").append(newContainer);
			$("#last").hide().fadeIn("slow");
			$("#last").removeAttr("id");
			NUMPLACES++;
		}
		$(".load-more").css("opacity", "10");
	});

	// Load 5 more places
	$("#showMoreText").click(function() {
		MAXNUMPLACES += 5
		$(".load-more").css("opacity", "0");
		$("#searchButton").trigger("click");

		if (MAXNUMPLACES == PLACES_ARRAY.length) {
			$("#showMoreText").hide();
		}

	});

});
