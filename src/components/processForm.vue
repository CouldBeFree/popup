<template>
  <form class="process-form">
    <h3 class="h3">{{ questions.Header }}</h3>
    <div class="list-holder">
      <input v-if="survey.label && survey.label.one" class="checkbox-tools" type="radio" name="tools" :id="survey.label.one">
      <label v-if="survey.label && survey.label.one" class="for-checkbox-tools" :for="survey.label.one">
        {{ survey.mark.one }}
      </label>
      <input v-if="survey.label && survey.label.two" class="checkbox-tools" type="radio" name="tools" :id="survey.label.two">
      <label v-if="survey.label && survey.label.two" class="for-checkbox-tools" :for="survey.label.two">
        {{ survey.mark.two }}
      </label>
      <input v-if="survey.label && survey.label.three" class="checkbox-tools" type="radio" name="tools" :id="survey.label.three">
      <label v-if="survey.label && survey.label.three" class="for-checkbox-tools" :for="survey.label.three">
        {{ survey.mark.three }}
      </label>
      <input v-if="survey.label && survey.label.four" class="checkbox-tools" type="radio" name="tools" :id="survey.label.four">
      <label v-if="survey.label && survey.label.four" class="for-checkbox-tools" :for="survey.label.four">
        {{ survey.mark.four }}
      </label>
      <input v-if="survey.label && survey.label.five" class="checkbox-tools" type="radio" name="tools" :id="survey.label.five">
      <label v-if="survey.label && survey.label.five" class="for-checkbox-tools" :for="survey.label.five">
        {{ survey.mark.five }}
      </label>
    </div>
  </form>
</template>

<script>
export default {
  name: "processForm",
  props: ['questions']
}
</script>

<style scoped>

</style>
