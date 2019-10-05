<template>
    <div>
        <v-card>
          <v-container>
            <alerts
              :messages="messages"
            />
            <input-fields
              :user-coords="userCoords"
              v-on:submit-form="getData"
              v-on:message="makeMessage"
            />
          </v-container>
        </v-card>

        <map-view
          :user-coords="userCoords"
          :data="mapData"
          v-on:message="makeMessage"
        />
    </div>
</template>

<script>
import InputFields from './InputFields';
import MapView from './MapView';
import Alerts from './Alerts';
import Route from '../models/route';
import Webapi from '../webapi';

export default {
  name: 'home-page',
  components: {
    InputFields,
    MapView,
    Alerts,
  },
  data: () => ({
    mapData: undefined,
    distance: null,
    userCoords: null,
    messages: [],
  }),
  mounted() {
    this.getUserCoords();
  },
  methods: {
    async getData(params) {
      try {
        const bodyJson = await Webapi.findPath(params)
        this.distance = bodyJson.distance;
        this.mapData = new Route(bodyJson.data);
      }
      catch {
        this.makeMessage({type: 'error', content: 'Could not find route'})
      }
    },
    async getUserCoords() {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const coordArray = [position.coords.latitude, position.coords.longitude];
        this.userCoords = coordArray;
      });
    },
    makeMessage(options) {
      this.messages.push({
        key: this.messages.length,
        display: true,
        type: options.type,
        content: options.content,
      });
    },
  },
};
</script>
