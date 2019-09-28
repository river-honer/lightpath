<template>
	<v-container>
		<input-fields
			:user-coords="userCoords"
			v-on:submit-form="getData"
		/>
		<map-view
			:user-coords="userCoords"
			:data="data"
		/>
	</v-container>
</template>

<script>
import InputFields from './InputFields';
import MapView from './MapView';
import { dummyJson } from '../constants';

export default {
	name: "home-page",
	components: {
		InputFields,
		MapView,
	},
	data: () => ({
		data: undefined,
		userCoords: null,
	}),
	mounted() {
		this.getUserCoords();
	},
	methods: {
		getData(params) {
			this.data = dummyJson;
		},
		async getUserCoords() {
            navigator.geolocation.getCurrentPosition(async position => {
                const coordArray = [position.coords.latitude, position.coords.longitude]
                this.userCoords = coordArray;
            });
        },
	}
};
</script>
