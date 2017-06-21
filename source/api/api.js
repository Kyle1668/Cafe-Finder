
$(document).ready(function () {
	// Autocomplete search bar functionality.
	var placeSearch = new google.maps.places.Autocomplete(document.getElementById("searchBar"));

	google.maps.event.addListener(placeSearch, 'place_changed', function() {
		var place = placeSearch.getPlace();
		var request = "https://" + "maps.googleapis.com/maps/api/place/textsearch/xml?query=Coffee+near+" + place.formatted_address + "&key=AIzaSyC_KZyErDtZ42CuFscO2l5YseWaV8MCHrQ";
		console.log(place.formatted_address);
		console.log(request);
		console.log(place.result);
	})

});
