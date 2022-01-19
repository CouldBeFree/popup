<template>
  <form class="process-form">
    <h3 class="h3">{{ question.Header }}</h3>
    <div class="list-holder">
      <input v-if="question.labels[0] && question.labels[0].one" class="checkbox-tools" type="radio" name="tools" :id="question.labels[0].one">
      <label v-if="question.labels[0] && question.labels[0].one" class="for-checkbox-tools" :for="question.labels[0].one">
        {{ question.marks[0].one }}
      </label>
      <input v-if="question.labels[1] && question.labels[1].two" class="checkbox-tools" type="radio" name="tools" :id="question.labels[1].two">
      <label v-if="question.labels[1] && question.labels[1].two" class="for-checkbox-tools" :for="question.labels[1].two">
        {{ question.marks[1].two }}
      </label>
      <input v-if="question.labels[2] && question.labels[2].three" class="checkbox-tools" type="radio" name="tools" :id="question.labels[2].three">
      <label v-if="question.labels[2] && question.labels[2].three" class="for-checkbox-tools" :for="question.labels[2].three">
        {{ question.marks[2].three }}
      </label>
      <input v-if="question.labels[3] && question.labels[3].four" class="checkbox-tools" type="radio" name="tools" :id="question.labels[3].four">
      <label v-if="question.labels[3] && question.labels[3].four" class="for-checkbox-tools" :for="question.labels[3].four">
        {{ question.marks[3].four }}
      </label>
      <input v-if="question.labels[4] && question.labels[4].five" class="checkbox-tools" type="radio" name="tools" :id="question.labels[4].five">
      <label v-if="question.labels[4] && question.labels[4].five" class="for-checkbox-tools" :for="question.labels[4].five">
        {{ question.marks[4].five }}
      </label>
    </div>
  </form>
</template>

<script>
export default {
  name: "processForm",
  props: ['question']
}
</script>

<style scoped>

</style>
