<template>
    <v-container>
        <div v-if="messages.length > 0">
          <v-alert
            v-for="message in messages"
            v-model="message.display"
            :key="message.key"
            :type="message.type"
            :dismissible="true"
          >
            {{ message.content }}
          </v-alert>
        </div>
        <input-fields
          :user-coords="userCoords"
          v-on:submit-form="getData"
          v-on:message="makeMessage"
        />
        <map-view
          :user-coords="userCoords"
          :data="data"
          v-on:message="makeMessage"
        />
    </v-container>
</template>

<script>
import InputFields from './InputFields';
import MapView from './MapView';
import Route from '../models/route';
import Webapi from '../webapi';

export default {
  name: 'home-page',
  components: {
    InputFields,
    MapView,
  },
  data: () => ({
    data: undefined,
    userCoords: null,
    messages: [],
  }),
  mounted() {
    this.getUserCoords();
  },
  methods: {
    async getData(params) {
      console.log(params)
      try {
        const bodyJson = await Webapi.findPath(params)
        this.data = new Route(bodyJson);
      }
      catch (TypeError) {
        console.log(TypeError)
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
