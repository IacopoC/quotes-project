<script setup>
import { ref } from 'vue'
import { GoogleMap, AdvancedMarker, InfoWindow } from 'vue3-google-map'

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const mapId = import.meta.env.VITE_MAP_ID

const markers = ref([
  {
    id: 1,
    position: { lat: 45.8777451, lng: 10.7394732 },
    title: 'Ozymandias',
    description: 'A place where I remember...',
    pinOptions: { background: '#FBBC04', glyph: '★', glyphColor: 'white', borderColor: 'white' }
  },
  {
    id: 2,
    position: { lat: 46.3062213, lng: 10.7355964 },
    title: 'Ozymandias',
    description: 'A place I remember again...',
    pinOptions: { background: 'red', glyph: '★', glyphColor: 'white', borderColor: 'white' }
  }
])

const activeMarker = ref(null)

const toggleInfo = (id) => {
  activeMarker.value = activeMarker.value === id ? null : id
}
</script>

<template>
  <GoogleMap
    :api-key="apiKey"
    :map-id="mapId"
    class="google-map"
    :center="markers[0].position"
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
        <div>
          <h3>{{ marker.title }}</h3>
          <p>{{ marker.description }}</p>
          <p>Lat: {{ marker.position.lat }}</p>
          <p>Lng: {{ marker.position.lng }}</p>
        </div>
      </InfoWindow>
    </template>
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

