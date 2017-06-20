

$(document).ready(function () {
	var NUMPLACES = 0;
	var MAXNUMPLACES = 5;

	// Load more places
	$("#searchBar").change(function () {
		while (NUMPLACES != MAXNUMPLACES) {
			var newContainer = initPlacePanel(testPlace);
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
		$("#searchBar").trigger("change");
	});
});
