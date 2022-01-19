<template>
  <div class="checkbox">
    <input v-if="label && label.index" class="checkbox-tools" type="radio" name="tools" :id="label.index">
    <label v-if="label && label.index" class="for-checkbox-tools" :for="label.index">
      {{ label.mark }}
    </label>
  </div>
</template>

<script>
export default {
  name: "formPoint",
props: ['label']
}
</script>

<style scoped>

</style>