<script setup>
import OzymandiasImage from '@/assets/img/piramide.jpg'
</script>

<template>
  <div class="row py-4">
    <div class="col-md-12">
      <h2>About Ozymandias</h2>
    </div>
  </div>
  <div class="row pt-4">
    <div class="col-md-6">
      <p><strong>Quotes from Ozymandias</strong> is a project about the famous poem of Shelley,
        linked to places where I remember the poem and music I listened to during this period.</p>
      <p>Here is the full poem of Shelley:</p>
      <figure>
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
    <div class="col-md-6">
      <img :src="OzymandiasImage" alt="Ozymandias" class="img-fluid border border-secondary rounded-3 p-4">
    </div>
  </div>
</template>

<style scoped></style>
