<script setup>
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';


const route = useRoute();

useHead({
  title: route.meta.title,
  meta: [
    {
      name: 'description',
      content: route.meta.description,
    },
  ],
});
</script>

<template>
    <div class="py-4">
    <div class="row">
      <div class="col-md-12 pb-4"><p><strong>Quotes from Ozymandias</strong> is a project about the famous poem of Shelley, linked to places where I remember the poem and music I listened to during this period.</p></div>
      </div>
      <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
      <figure class="text-center">
        <blockquote class="blockquote">
          <p>I met a traveller from an antique land,
            Who said—“Two vast and trunkless legs of stone
            Stand in the desert. . . . Near them, on the sand,
            Half sunk a shattered visage lies, whose frown,
            And wrinkled lip, and sneer of cold command,
            Tell that its sculptor well those passions read
            Which yet survive, stamped on these lifeless things,
            The hand that mocked them, and the heart that fed;
            And on the pedestal, these words appear:
            My name is Ozymandias, King of Kings;
            Look on my Works, ye Mighty, and despair!"
            Nothing beside remains. Round the decay
            Of that colossal Wreck, boundless and bare
            The lone and level sands stretch far away.</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Percy Bysshe Shelley <cite title="Ozymandias">Ozymandias</cite>
        </figcaption>
      </figure>
      </div>
      <div class="col-md-3"></div>
      </div>
    </div>
</template>

<style scoped>
</style>
