<template>
  <form class="process-form">
    <h4 class="h4">{{ question.header }}</h4>
    <div class="list-holder">
      <form-point
        v-for="label in question.labels"
        :label="label"
        :key="label.index"
      />
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
