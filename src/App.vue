<template>
  <div id="app">
    <div id="demo">
      <transition-group tag="div" class="div-slider" :name="back? 'slideback' : 'slide'">
        <div v-if="currentIndex === 0" key="1">
          <div class="card">
            {{currentIndex}}
            <SurveyHandler />
          </div>
        </div>
        <div v-if="currentIndex === 1" key="2" >
          <div class="card">
            {{currentIndex}}
            <SurveyHandler
              :surveyQuestions="questions"
              @onQuestionsFilled="onFilled"
            />
          </div>
        </div>
        <div v-if="currentIndex === 2" key="3" >
          <div class="card">
            {{currentIndex}}
            <SurveyHandler
              :surveyQuestions="questions"
              @onQuestionsFilled="onFilled"
            />
          </div>
        </div>
      </transition-group>
      <div style="display: flex; justify-content: center; margin-bottom: 10px; margin-top: 10px;">
        <button @click="prev()" :disabled="currentIndex === 0">prev</button>
        <button @click="next()" :disabled="currentIndex === 2">next</button>
      </div>
      <div style="text-align: center;">
        <button @click="onNextQuestion">Continue</button>
      </div>
    </div>
  </div>
</template>

<script>
import SurveyHandler from "@/components/surveyHandler";

export default {
  name: 'App',
  data () {
		return {
			back: false,
			currentIndex: 0,
			disabled: true,
      steps: {
				1: false,
        2: false
      }
    }
  },
  components: {
		SurveyHandler
  },
	methods: {
		onFilled() {
			this.disabled = false
    },
		next(){
			this.back = false;
			this.currentIndex++;
		},
		prev(){
			this.back = true;
			this.currentIndex--;
		},
		onNextQuestion() {
			if (this.currentIndex === 2) return;
			this.currentIndex += 1
    }
	},
}
</script>

<style>
#demo {
    overflow: hidden;
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
}

.slide-leave-active,
.slide-enter-active {
    transition: 1s;
}
.slide-enter {
    transform: translate(100%, 0);
}
.slide-leave-to {
    transform: translate(-100%, 0);
}

.slideback-leave-active,
.slideback-enter-active {
    transition: 1s;
}
.slideback-enter {
    transform: translate(-100%, 0);
}
.slideback-leave-to {
    transform: translate(100%, 0);
}

.div-slider{
    overflow: hidden;
    position: relative;
    height: 200px;
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
}

.div-slider .card {
    position: absolute;
    height: 100px;
    width: 100%;
    background-color: #60adff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*margin-top: 70px;*/
}

h1 {
    margin: 0;
}

.wrapper {
  overflow: hidden;
  height: 45px;
}
</style>
