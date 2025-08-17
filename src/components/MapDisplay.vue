<script setup lang="ts">
import { ref } from 'vue'
import { GoogleMap, AdvancedMarker, InfoWindow } from 'vue3-google-map'

const center = { lat: 45.8777451, lng: 10.7394732 }
const markerOptions = { position: center }
const pinOptions = { background: '#FBBC04', glyph: '★', glyphColor: 'white', borderColor: 'white' }

const showInfo = ref(false);

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const mapId = import.meta.env.VITE_MAP_ID;

const toggleInfo = () => {
  showInfo.value = !showInfo.value;
}
</script>

<template>
  <GoogleMap
    :api-key="apiKey"
    :mapId="mapId"
    class="google-map"
    :center="center"
    :zoom="15"
  >
    <AdvancedMarker :options="markerOptions" :pin-options="pinOptions" @click="toggleInfo" />
    <InfoWindow v-if="showInfo" :options="{ position: center }">
      <div>
        <h3>Ozymandias place</h3>
        <p>Lat: {{ center.lat }}</p>
        <p>Lng: {{ center.lng }}</p>
      </div>
    </InfoWindow>
  </GoogleMap>
</template>

<style scoped>
h3, p {
  color: #181818;
}

.google-map {
  width: 100%;
  height: 500px;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
</style>
