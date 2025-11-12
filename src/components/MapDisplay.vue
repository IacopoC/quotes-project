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

const center = {
  lat: (markers.value[0].position.lat + markers.value[1].position.lat) / 2,
  lng: (markers.value[0].position.lng + markers.value[1].position.lng) / 2
}

const activeMarker = ref(null)

const toggleInfo = (id) => {
  activeMarker.value = activeMarker.value === id ? null : id
}
</script>

<template>
  <div class="row py-4">
    <div class="col-md-6">
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
          <h3>{{ marker.title }}</h3>
          <p>{{ marker.description }}</p>
          <p>Lat: {{ marker.position.lat }}</p>
          <p>Lng: {{ marker.position.lng }}</p>
        </div>
      </InfoWindow>
    </template>
  </GoogleMap>
      </div>
    <div class="col-md-6">
      <div class="py-4 px-3">
        <h3 class="pb-4">List of Ozymandias places:</h3>
        <p>1 ★. A place I remember</p>
        <p>2 ★. A place I remember Again</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info-map h3 {
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

