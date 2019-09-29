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
    },
  },
  data() {
    return {
      map: null,
    };
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
    data(route) {
      if (route) {
        this.drawMapRoute(route.geojson);
        this.drawStartEndPoints([route.startPoint, route.endPoint]);
		this.fitZoomToRoute([route.startPoint, route.endPoint]);

        // Scroll map in to view
        const map = document.getElementById('map');
        if (map) {
          map.scrollIntoView();
        }
      }
    },
  },
  methods: {
    initMap() {
      this.$nextTick(() => {
        this.map = new L.Map('map', { zoomControl: false });
        const tonerUrl = 'http://tile.stamen.com/terrain/{Z}/{X}/{Y}.png';
        const url = tonerUrl.replace(/({[A-Z]})/g, s => s.toLowerCase());
        const basemap = L.tileLayer(url, {
          subdomains: ['', 'a.', 'b.', 'c.', 'd.'],
          minZoom: 0,
          maxZoom: 17,
          type: 'png',
          attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>',
        });
        basemap.addTo(this.map);
        this.map.setView([51.505, -0.09], 13);
      });
    },
    updateMapCenter(coords) {
      this.map.setView(coords, 14);
    },
    fitZoomToRoute(startEndPoints) {
      this.map.fitBounds(startEndPoints);
    },
    drawMapRoute(geojson) {
      const routeStyle = {
        color: '#F9971E',
        weight: 5,
      };
      const routeLayer = L.geoJSON(geojson, routeStyle).addTo(this.map);
    },
    drawStartEndPoints(startEndPoints) {
	//   let i = 0;
	// if (i === 0) {
	//   circle.bindPopup('Start', { closeOnClick: false, autoClose: false }).openPopup();
	// }
	// i++;
      for (const point of startEndPoints) {
        const circle = L.circle(point.reverse(), {
					 color: '#F9971E',
					 radius: 5,
					 fillOpacity: 1,
        });
        circle.addTo(this.map);
      }
    },
  },
};
</script>

<style>

#map {
	height: 400px;
}

</style>
