<template>
  <form class="process-form">
    <h3 class="h3">{{ survey.Header }}</h3>
    <div class="list-holder">
      <input class="checkbox-tools" type="radio" name="tools" id="tool-1">
      <label class="for-checkbox-tools" for="tool-1">
        1
      </label>
      <input class="checkbox-tools" type="radio" name="tools" id="tool-2">
      <label class="for-checkbox-tools" for="tool-2">
        2
      </label>
      <input class="checkbox-tools" type="radio" name="tools" id="tool-3">
      <label class="for-checkbox-tools" for="tool-3">
        3
      </label>
      <input class="checkbox-tools" type="radio" name="tools" id="tool-4">
      <label class="for-checkbox-tools" for="tool-4">
        4
      </label>
      <input class="checkbox-tools" type="radio" name="tools" id="tool-5">
      <label class="for-checkbox-tools" for="tool-5">
        5
      </label>
    </div>
  </form>
</template>

<script>
export default {
  name: "processForm",
  props: ['survey']
}
</script>

<style scoped>

</style>