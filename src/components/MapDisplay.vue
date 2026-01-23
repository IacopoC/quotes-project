<script setup>
import { ref, computed } from 'vue'
import { GoogleMap, AdvancedMarker, InfoWindow } from 'vue3-google-map'
import { RouterLink } from 'vue-router'

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const mapId = import.meta.env.VITE_MAP_ID

const markers = ref([
  {
    id: 1,
    position: { lat: 45.8777451, lng: 10.7394732 },
    title: 'Ledro (TN)',
    description: 'A place where I remember...',
    pinOptions: { background: '#FBBC04', glyph: '★', glyphColor: 'white', borderColor: 'white' }
  },
  {
    id: 2,
    position: { lat: 46.3062213, lng: 10.7355964 },
    title: 'Ossana (TN)',
    description: 'A place where I remember again...',
    pinOptions: { background: 'red', glyph: '★', glyphColor: 'white', borderColor: 'white' }
  }
])

const center = computed(() => ({
  lat: markers.value.reduce((sum, marker) => sum + marker.position.lat, 0) / markers.value.length,
  lng: markers.value.reduce((sum, marker) => sum + marker.position.lng, 0) / markers.value.length,
}))

const activeMarker = ref(null)

const toggleInfo = (id) => {
  activeMarker.value = activeMarker.value === id ? null : id
}
</script>

<template>
  <div class="row py-4">
    <div class="col-md-12">
  <GoogleMap
    :api-key="apiKey"
    :map-id="mapId"
    class="google-map"
    :center="center"
    :zoom="8"
  >
    <template v-for="marker in markers" :key="marker.id">
      <AdvancedMarker
        :options="{ position: marker.position }"
        :pin-options="marker.pinOptions"
        @click="toggleInfo(marker.id)"
      />
      <InfoWindow
        v-if="activeMarker === marker.id"
        :options="{ position: marker.position }"
      >
        <div class="info-map">
          <h4>{{ marker.title }}</h4>
          <p>{{ marker.description }}</p>
          <p>Lat: {{ marker.position.lat }}</p>
          <p>Lng: {{ marker.position.lng }}</p>
        </div>
      </InfoWindow>
    </template>
  </GoogleMap>
      </div>
    </div>
    <div class="row align-items-md-stretch py-4">
      <div class="col-md-6">
        <div class="h-100 p-5 text-bg-dark rounded-3">
          <h2>What is Ozymandias</h2>
          <p>See in the map the Ozymandias places I discovered, learn more about the project in the about page.</p>
          <RouterLink to="/about"><button class="btn btn-outline-light" type="button">Go to About</button></RouterLink>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2>Places in Ozymandias</h2>
          <p>The places of Ozymandias is Ossana (TN) and Lake Ledro(TN), two places where the spirit of the poem of Shelley is very present.</p>
          <button class="btn btn-outline-secondary" type="button">Go to Places</button>
        </div>
      </div>
    </div>
</template>

<style scoped>
.info-map h4 {
  color: #181818;
}

.info-map p {
  color: #181818;
}

.google-map {
  width: 100%;
  height: 500px;
}

.info-map {
  padding: 0 20px 10px 20px;
}
</style>

