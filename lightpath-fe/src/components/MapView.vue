<template>
	<v-card id="map-card" class='mt-4'>
		<v-container>
			<div id="map"></div>
		</v-container>
	</v-card>
</template>

<script>
import L from 'leaflet';

export default {
	name: 'map-view',
	props: {
		data: {
			type: undefined,
		},
		userCoords: {
			type: undefined,
		}
	},
	data() {
		return {
			map: null,
		}
	},
	mounted() {
		this.initMap();
	},
	watch: {
		userCoords(value) {
			if (value) {
				this.updateMapCenter(value);
			}
		},
		data(geojson) {
			if (geojson) {
				this.drawMapRoute(geojson);
				this.drawStartEndPoints(geojson);
				this.fitZoomToRoute(geojson);
			}
		},
	},
	methods: {
		initMap() {
			this.$nextTick(() => {
				this.map = new L.Map('map', {zoomControl: false});
				const tonerUrl = "http://tile.stamen.com/terrain/{Z}/{X}/{Y}.png";
				const url = tonerUrl.replace(/({[A-Z]})/g, function(s) {
					return s.toLowerCase();
				});
				const basemap = L.tileLayer(url, {
					subdomains: ['','a.','b.','c.','d.'],
					minZoom: 0,
					maxZoom: 16,
					type: 'png',
					attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>'
				});
				basemap.addTo(this.map);
				this.map.setView([51.505, -0.09], 13);
			})
		},
		updateMapCenter(coords) {
			this.map.setView(coords, 14);
		},
		fitZoomToRoute(geojson) {
			const firstLastCoords = this.getStartEndPoints(geojson);
			this.map.fitBounds(firstLastCoords);
		},
		drawMapRoute(geojson) {
			const routeStyle = {
				"color": "#F9971E",
				"weight": 5,
			};
			const routeLayer = L.geoJSON(geojson, routeStyle).addTo(this.map);
		},
		drawStartEndPoints(geojson) {
			const firstLastCoords = this.getStartEndPoints(geojson);
			let i = 0;
			for (let points of firstLastCoords) {
				const circle = L.circle(points.reverse(), {
					 color: "#F9971E",
					 radius: 5,
					 fillOpacity: 1,
				});
				circle.addTo(this.map);
				if (i === 0) {
					circle.bindPopup("Start", {closeOnClick: false, autoClose: false}).openPopup();
				}
				i++;
			}
		},
		getStartEndPoints(geojson) {
			const coords = geojson.features[0].geometry.coordinates;
			return [coords[0], coords[coords.length-1]];
		}
	}
}
</script>

<style>

#map {
	height: 400px;
}

</style>