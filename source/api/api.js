
$(document).ready(function () {
	// Autocomplete search bar functionality.
	var placeSearch = new google.maps.places.Autocomplete(document.getElementById("searchBar"));

	google.maps.event.addListener(placeSearch, 'place_changed', function() {
		var place = placeSearch.getPlace();

		var get = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=Coffee+near+" +  place.formatted_address +  "&key=AIzaSyC_KZyErDtZ42CuFscO2l5YseWaV8MCHrQ&sensor=false";

		$.get(get, function (data) {
			console.log("Worked!");
			console.log(data);
			$("h1").text(data.results[1].name);
		});

		console.log(place.formatted_address);
		console.log(get);
		console.log(place.result);
	})

});
