<template>
  <form class="process-form">
    <h3 class="h3">{{ survey.Header }}</h3>
    <div class="list-holder">
      <input class="checkbox-tools" type="radio" name="tools" :id="survey.label.one">
      <label class="for-checkbox-tools" :for="survey.label.one">
        {{ survey.mark.one }}
      </label>
      <input class="checkbox-tools" type="radio" name="tools" :id="survey.label.two">
      <label class="for-checkbox-tools" :for="survey.label.two">
        {{ survey.mark.two }}
      </label>
      <input class="checkbox-tools" type="radio" name="tools" :id="survey.label.three">
      <label class="for-checkbox-tools" :for="survey.label.three">
        {{ survey.mark.three }}
      </label>
      <input class="checkbox-tools" type="radio" name="tools" :id="survey.label.four">
      <label class="for-checkbox-tools" :for="survey.label.four">
        {{ survey.mark.four }}
      </label>
      <input class="checkbox-tools" type="radio" name="tools" :id="survey.label.five">
      <label class="for-checkbox-tools" :for="survey.label.five">
        {{ survey.mark.five }}
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