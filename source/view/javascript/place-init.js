var testPlace = {
	name: "The Flying Goat Coffee",
	loc: "324 Center St, Healdsburg, CA 95448",
	review: 4.6,
	img: "https://media-cdn.tripadvisor.com/media/photo-s/03/4b/c9/dd/flying-goat-coffee.jpg"
}

function initPlacePanel(placeObj) {

	var photo_reference = placeObj.photos[0].photo_reference;
	var keyParem = "&key=AIzaSyC_KZyErDtZ42CuFscO2l5YseWaV8MCHrQ";
	var image = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + photo_reference + keyParem;

	// Capitalizing First Letters
	placeObj.types[0] = placeObj.types[0].charAt(0).toUpperCase() + placeObj.types[0].slice(1);
	placeObj.opening_hours.open_now = placeObj.opening_hours.open_now.toString().charAt(0).toUpperCase() + placeObj.opening_hours.open_now.toString().slice(1);

	if (!placeObj.rating) {
		placeObj.rating = "N/A";
	}

	if (placeObj.price_level) {
		var price = "";
		for (var i = 1; i <= placeObj.price_level; i++) {
			price += "$";
		}
		placeObj.price_level = price;
	}
	else {
		placeObj.price_level = "N/A";
	}

	return `
	<div class="place container" id="last">
			<div class="row">
				<div class="col-lg-3 image">
					<img src=${image} alt="">
				</div>
				<div class="col-lg-5 summary">
					<h1>${placeObj.name}</h1>
					<h3>${placeObj.formatted_address}</h3>
				</div>
				<div class="col-lg-4 reviews">
					<h2>Avg Rating:  ${placeObj.rating}</h2>
					<h3>Type: ${placeObj.types[0]}</h3>
					<h3>Pricing: ${placeObj.price_level}</h3>
					<h3>Open Now: ${placeObj.opening_hours.open_now}</h3>
				</div>
			</div>
		</div>
	`
}
