<template>
  <form class="process-form">
    <h3 class="h3">{{ question.Header }}</h3>
    <div class="list-holder">
      <form-point
        v-for="label in question.labels"
        :label="label"
        :key="label.index"
      />
<!--      <input v-if="question.labels[0] && question.labels[0].index" class="checkbox-tools" type="radio" name="tools" :id="question.labels[0].index">
      <label v-if="question.labels[0] && question.labels[0].index" class="for-checkbox-tools" :for="question.labels[0].index">
        {{ question.labels[0].mark }}
      </label>
      <input v-if="question.labels[1] && question.labels[1].index" class="checkbox-tools" type="radio" name="tools" :id="question.labels[1].index">
      <label v-if="question.labels[1] && question.labels[1].index" class="for-checkbox-tools" :for="question.labels[1].index">
        {{ question.labels[1].mark }}
      </label>
      <input v-if="question.labels[2] && question.labels[2].index" class="checkbox-tools" type="radio" name="tools" :id="question.labels[2].index">
      <label v-if="question.labels[2] && question.labels[2].index" class="for-checkbox-tools" :for="question.labels[2].index">
        {{ question.labels[2].mark }}
      </label>
      <input v-if="question.labels[3] && question.labels[3].index" class="checkbox-tools" type="radio" name="tools" :id="question.labels[3].index">
      <label v-if="question.labels[3] && question.labels[3].index" class="for-checkbox-tools" :for="question.labels[3].index">
        {{ question.labels[3].mark }}
      </label>
      <input v-if="question.labels[4] && question.labels[4].index" class="checkbox-tools" type="radio" name="tools" :id="question.labels[4].index">
      <label v-if="question.labels[4] && question.labels[4].index" class="for-checkbox-tools" :for="question.labels[4].index">
        {{ question.labels[4].mark }}
      </label>-->
    </div>
  </form>
</template>

<script>
import formPoint from "./formPoint";
export default {
  name: "processForm",
  components: {formPoint},
  props: ['question']
}
</script>

<style scoped>

</style>
