<template>
  <v-container>
    <v-row no-gutters>
        <v-flex sm-12>
            <v-text-field
                v-model="fromLocation"
                outlined
                label="Start"
            />
        </v-flex>
    </v-row>
    <v-row no-gutters>
        <v-flex sm-12>
            <v-text-field
                v-model="toLocation"
                outlined
                label="End"
            />
        </v-flex>
    </v-row>
    <v-row no-gutters>
            <v-spacer/>
            <v-btn
                @click="submit()"
                color="primary"
            >Go</v-btn>
    </v-row>
  </v-container>
</template>

<script>
const OPENCAGE_API_KEY = '15f9a2399c8c4abea6c2251bcbbb4755';

export default {
  name: 'input-fields',
  data() {
    return {
      fromLocation: null,
      toLocation: null,
      fromCoords: null,
      toCoords: null,
    };
  },
  props: {
    userCoords: {
      type: undefined,
    },
  },
  watch: {
    async userCoords(value) {
      if (value) {
        this.fromCoords = value;
        this.fromLocation = await this.getAddressfromCoords(value);
      }
    },
  },
  methods: {
    async getAddressfromCoords(coords) {
      const url = `https://api.opencagedata.com/geocode/v1/geojson?q=${coords[0]}+${coords[1]}&key=${OPENCAGE_API_KEY}`;
      try {
        const response = await fetch(url);
        const json = await response.json();
        return json.features[0].properties.formatted;
      } catch {
        this.$emit('message', {type: 'error', content: 'Could not find address from coordinates'});
      }
    },
    async getCoordsFromAddress(address) {
      try {
        const url = `https://api.opencagedata.com/geocode/v1/geojson?q=${address}&key=${OPENCAGE_API_KEY}`;
        const response = await fetch(url);
        const json = await response.json();
        const coords = json.features[0].geometry.coordinates;
        return coords.reverse();
      } catch {
        this.$emit('message', {type:'error', content: 'Could not find location for address'});
      }
    },
    async submit() {
      // if form valid
      if (this.toLocation && this.fromLocation) {
        if (!this.fromCoords) {
          this.fromCoords = await this.getCoordsFromAddress(this.fromLocation);
        }
        this.toCoords = await this.getCoordsFromAddress(this.toLocation);
        this.$emit('submit-form', {
          fromLocation: this.fromCoords.reverse(),
          toLocation: this.toCoords.reverse(),
        });
      } else { // If form is not valid
        this.$emit('message', {type: 'error', content: "Fields incomplete"})
      }
    },
  },
};
</script>
