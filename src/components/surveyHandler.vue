<template>
  <div class="process">
    <process-form
      v-for="question in survey.questions"
      :question="question"
      :key="question.id"
    />
  </div>
</template>

<script>
import processForm from "./processForm";
export default {
  name: "surveyHandler",
  components: {processForm},
  props: ['survey']
}
</script>

<style></style>
