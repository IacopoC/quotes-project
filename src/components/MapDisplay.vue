<script setup lang="ts">
import { GoogleMap, AdvancedMarker } from 'vue3-google-map'

const center = { lat: 40.689247, lng: -74.044502 }
const markerOptions = { position: center, label: 'L', title: 'LADY LIBERTY' }
const pinOptions = { background: '#FBBC04' }
</script>

<template>
  <GoogleMap
    api-key="api_key"
    mapId="mappa_id"
    style="width: 100%; height: 500px; padding: 25px;"
    :center="center"
    :zoom="15"
  >
    <AdvancedMarker :options="markerOptions" :pin-options="pinOptions"/>
    <AdvancedMarker :options="markerOptions">
      <template #content>
        <div style="background: white; color: black; padding: 5px; border-radius: 5px">
          Custom Content
        </div>
      </template>
    </AdvancedMarker>
  </GoogleMap>
</template>

<style scoped>

</style>
