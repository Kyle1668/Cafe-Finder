var testPlace = {
	name: "The Flying Goat Coffee",
	loc: "324 Center St, Healdsburg, CA 95448",
	review: 4.6,
	img: "https://media-cdn.tripadvisor.com/media/photo-s/03/4b/c9/dd/flying-goat-coffee.jpg"
}

function makePanel(image, name, address, rating, type, price, isOpen) {
	return `
	<div class="place container" id="last">
			<div class="row">
				<div class="col-lg-3 image">
					<img src=${image} alt="">
				</div>
				<div class="col-lg-5 summary">
					<h1>${name}</h1>
					<h4>${address}</h4>
				</div>
				<div class="col-lg-4 reviews">
					<h2>Avg Rating:  ${rating}</h2>
					<h3>Type: ${type}</h3>
					<h3>Pricing: ${price}</h3>
					<h3>${isOpen}</h3>
				</div>
			</div>
		</div>
	`
}

function initPlacePanel(placeObj) {
	var price = "";
	var photo_reference = placeObj.photos[0].photo_reference;
	var keyParem = "&key=AIzaSyC_KZyErDtZ42CuFscO2l5YseWaV8MCHrQ";
	var address = placeObj.formatted_address.split(",");
	placeObj.formatted_address = address[0] + address[1] + address[2];
	console.log(address);
	console.log(placeObj.formatted_address);
	var image = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + photo_reference + keyParem;

	placeObj.types[0] = placeObj.types[0].charAt(0).toUpperCase() + placeObj.types[0].slice(1);

	if (!placeObj.rating) {
		placeObj.rating = "N/A";
	}

	if (placeObj.opening_hours.open_now) {
		placeObj.opening_hours.open_now = "Open Now"
	} else {
		placeObj.opening_hours.open_now = "Closed"
	}

	if (placeObj.price_level) {
		for (var i = 1; i <= placeObj.price_level + 1; i++) {
			price += "$";
		}
	} else {
		price = "N/A";
	}

	return makePanel(image, placeObj.name, placeObj.formatted_address, placeObj.rating, placeObj.types[0], price, placeObj.opening_hours.open_now);
}
