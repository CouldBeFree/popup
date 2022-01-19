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

<style>
.process-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.process-form .h3 {
  font-size: 14px;
  line-height: 1.2;
  text-align: center;
}
.list-holder {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    position: relative;
}
.list-holder:before {
  content: 'Very unsatisfied';
  position: absolute;
  left: 0;
  bottom: -15px;
  font-size: 10px;
  color: #8a8a8a;
}
.list-holder:after {
  content: 'Very Satisfied';
  position: absolute;
  right: 0;
  bottom: -15px;
  font-size: 10px;
  color: #8a8a8a;
}
.list-holder [type="checkbox"]:checked,
.list-holder [type="checkbox"]:not(:checked),
.list-holder [type="radio"]:checked,
.list-holder [type="radio"]:not(:checked){
  position: absolute;
  left: -9999px;
  width: 0;
  height: 0;
  visibility: hidden;
}
.list-holder .checkbox-tools:checked + label,
.list-holder .checkbox-tools:not(:checked) + label{
  position: relative;
  display: inline-block;
  padding: 10px;
  width: 80px;
  font-size: 12px;
  line-height: 1;
  letter-spacing: 1px;
  margin: 0;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  text-transform: uppercase;
  color: white;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
  box-sizing: border-box;
}

.list-holder .checkbox-tools:not(:checked) + label:hover {
  background-color: #e6e6e6;
}

.list-holder .checkbox-tools:not(:checked) + label{
  background-color: #fff;
  color: #6f6e6e;
  border: 1px solid #e6e6e6;
  border-left: none;
}
.list-holder .checkbox:first-child .checkbox-tools:not(:checked) + label {
  border-radius: 10px 0 0 10px;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  border-left: 1px solid #e6e6e6;
}
.list-holder .checkbox:first-child .checkbox-tools:checked + label {
  border-radius: 10px 0 0 10px;
  border-top: 1px solid #1c5a7d;
  border-bottom: 1px solid #1c5a7d;
  border-left: 1px solid #1c5a7d;
}
.list-holder .checkbox:last-of-type .checkbox-tools:not(:checked) + label {
  border-radius: 0 10px 10px 0;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
}
.list-holder .checkbox:last-of-type .checkbox-tools:checked + label {
  border-radius: 0 10px 10px 0;
  border-top: 1px solid #1c5a7d;
  border-bottom: 1px solid #1c5a7d;
}
.list-holder .checkbox-tools:checked + label::before,
.list-holder .checkbox-tools:not(:checked) + label::before{
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #6f6e6e;
  box-sizing: border-box;
  z-index: -1;
}
.list-holder .checkbox-tools:checked + label{
  background-color: #1c5a7d;
  color: #fff;
  border-top: 1px solid #1c5a7d;
  border-bottom: 1px solid #1c5a7d;
}
</style>
