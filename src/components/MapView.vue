<template>
	<v-card id="map-card" class='mt-4'>
			<div id="map"></div>
	</v-card>
</template>

<script>
import Map from '../models/map';

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
        this.map.setView(value, 14);
      }
    },
    data(route) {
      if (route) {
        this.map.drawRoute(route);
		    this.map.fitZoomToRoute([route.startPoint, route.endPoint]);

        // Scroll map in to view
        const mapDiv = document.getElementById('map');
        if (mapDiv) {
          mapDiv.scrollIntoView();
        }
      }
    },
  },
  methods: {
    initMap() {
      this.$nextTick(() => {
        this.map = new Map('map', { zoomControl: false });
      });
    },
  },
};
</script>

<style>


#map {
	height: 90vh;
}

</style>
