var testPlace = {
	name: "The Flying Goat Coffee",
	loc: "324 Center St, Healdsburg, CA 95448",
	review: 4.6,
	img: "https://media-cdn.tripadvisor.com/media/photo-s/03/4b/c9/dd/flying-goat-coffee.jpg"
}

function initPlacePanel(placeObj) {
	return `
	<div class="place container" id="last">
			<div class="row">
				<div class="col-lg-3 image">
					<img src="${placeObj.img}" alt="">
				</div>
				<div class="col-lg-5 summary">
					<h1>${placeObj.name}</h1>
					<h3>${placeObj.loc}</h3>
				</div>
				<div class="col-lg-4 reviews">
					<h2>Avg Rating:  ${placeObj.review}</h2>
				</div>
			</div>
		</div>
	`
}
