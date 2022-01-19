<template>
  <div id="app">
    <div id="demo__overlay">
      <div id="demo">
        <div class="demo__shutter"></div>
        <div class="demo__thumbs">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path class="cls-1" d="M240.9 299.66a36.06 36.06 0 0 0 7.1-25.08c-1.3-13.73-10.81-25.22-23.5-30a35.33 35.33 0 0 0-17.29-41.9 36.14 36.14 0 0 0 2.22-16.29c-1.74-18.17-17.84-32.4-36.67-32.4h-43.71a104.61 104.61 0 0 0-36.13 6.41l-9.59 3.51a107.84 107.84 0 0 1-37.28 6.62H13.84A13.84 13.84 0 0 0 0 184.35v159.83A13.84 13.84 0 0 0 13.84 358h16.92c39 0 49.62 24.44 60.39 59l1.64 5.23c4.71 14.8 16.17 24 29.91 24 20.54 0 37.25-16.71 37.24-36.57.06-1.28 1-25.3-11.17-51.61h64.43a35.89 35.89 0 0 0 35.72-39.37 34.81 34.81 0 0 0-8.02-19.02Zm-21.62 28a8.15 8.15 0 0 1-6.08 2.69h-89.13a13.84 13.84 0 0 0-10.79 22.5c20 24.93 19 55.2 19 56.11a9.58 9.58 0 0 1-9.57 9.57c-1.34 0-2.79-2.37-3.54-4.72l-1.59-5.07c-9.15-29.32-24.46-78.39-86.81-78.39h-3.09V198.19h18.38a135.53 135.53 0 0 0 46.8-8.3l9.59-3.51a77 77 0 0 1 26.61-4.72h43.67c4.64 0 8.73 3.3 9.11 7.35a8.22 8.22 0 0 1-8.17 9.07h-11a13.84 13.84 0 0 0 0 27.68h26.61c4.64 0 8.73 3.3 9.11 7.35a8.21 8.21 0 0 1-8.17 9.06h-11a13.84 13.84 0 0 0 0 27.68h32.08c4.64 0 8.72 3.3 9.11 7.36a8.2 8.2 0 0 1-8.16 9.05h-11a13.84 13.84 0 0 0 0 27.68h11c4.64 0 8.73 3.3 9.11 7.35a8.21 8.21 0 0 1-2.08 6.37ZM498.16 154h-16.92c-39 0-49.62-24.44-60.39-59l-1.64-5.22C414.5 75 403 65.8 389.3 65.8c-20.54 0-37.25 16.71-37.24 36.57-.06 1.28-1 25.3 11.17 51.61H298.8a35.89 35.89 0 0 0-35.72 39.37 34.79 34.79 0 0 0 8 19 36.09 36.09 0 0 0-7.08 25.08c1.3 13.72 10.81 25.2 23.5 30a35.33 35.33 0 0 0 17.28 41.9 36.26 36.26 0 0 0-2.21 16.29c1.74 18.17 17.84 32.4 36.67 32.4h43.67a104.89 104.89 0 0 0 36.14-6.41l9.57-3.51a108 108 0 0 1 37.28-6.62h32.22A13.84 13.84 0 0 0 512 327.65V167.82A13.84 13.84 0 0 0 498.16 154Zm-13.84 159.81h-18.38a135.62 135.62 0 0 0-46.8 8.3l-9.57 3.51a77.28 77.28 0 0 1-26.61 4.72h-43.68c-4.64 0-8.73-3.3-9.11-7.35a8.21 8.21 0 0 1 8.17-9.06h11a13.84 13.84 0 0 0 0-27.68h-26.6c-4.64 0-8.73-3.3-9.11-7.36a8.21 8.21 0 0 1 8.17-9.06h11a13.84 13.84 0 0 0 0-27.68h-32.1c-4.64 0-8.72-3.3-9.11-7.36a8.2 8.2 0 0 1 8.16-9.05h11a13.84 13.84 0 1 0 0-27.68h-11c-4.64 0-8.73-3.3-9.11-7.36a8.21 8.21 0 0 1 8.17-9.06h89.13a13.83 13.83 0 0 0 10.79-22.5c-20-24.92-19-55.2-19-56.11a9.58 9.58 0 0 1 9.57-9.57c1.34 0 2.79 2.37 3.54 4.72l1.59 5.07c9.15 29.32 24.45 78.4 86.81 78.4h3.09Z"/></svg>
        </div>
        <h2 class="h2">{{ heading }}</h2>
        <transition-group tag="div" class="div-slider" :name="back? 'slideback' : 'slide'">
          <div v-if="currentIndex === 0" key="1">
            <div class="card">
              <SurveyHandler
                :survey="surveys[0]"
              />
            </div>
          </div>
          <div v-if="currentIndex === 1" key="2">
            <div class="card">
              <SurveyHandler
                :survey="surveys[1]"
                @onQuestionsFilled="onFilled"
              />
            </div>
          </div>
          <div v-if="currentIndex === 2" key="3">
            <div class="card">
              <SurveyHandler
                :survey="surveys[2]"
                @onQuestionsFilled="onFilled"
              />
            </div>
          </div>
        </transition-group>
        <div style="display: flex; justify-content: center; margin-bottom: 10px; margin-top: 10px;">
          <button class="process-button" @click="prev()" :disabled="currentIndex === 0">prev</button>
          <button class="process-button" @click="next()" :disabled="currentIndex === 2">next</button>
        </div>
        <div style="text-align: center; margin-bottom: 10px;">
          <button class="process-button" @click="next()" :disabled="currentIndex === 2">Continue</button>
        </div>
        <div v-if="currentIndex == 2" style="text-align: center; margin-bottom: 10px;">
          <button class="process-button">Finish</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SurveyHandler from "@/components/surveyHandler";

export default {
  name: 'App',
  data() {
    return {
      back: false,
      currentIndex: 0,
      disabled: true,
      steps: {
        1: false,
        2: false
      },
      heading: 'Rate your experience with Employee Transfer service',
      heading2: 'Service process',
      surveys: [
        {
          id: "1",
          questions: [
            {
              id: "1",
              Header: "How satisfied are you with service process",
              labels: [
                {one: "tool-1"},
                {two: "tool-2"},
                {three: "tool-3"},
                {four: "tool-4"},
                {five: "tool-5"}
              ],
              marks: [
                {one: "1"},
                {two: "2"},
                {three: "3"},
                {four: "4"},
                {five: "5"}
              ]
            },
            {
              id: "2",
              Header: "How clear is the work of our services to you?",
              labels: [
                {one: "tool-6"},
                {two: "tool-7"},
                {three: "tool-8"},
                {four: "tool-9"},
                {five: "tool-10"}
              ],
              marks: [
                {one: "1"},
                {two: "2"},
                {three: "3"},
                {four: "4"},
                {five: "5"}
              ]
            },
            {
              id: "3",
              Header: "The likelihood that you will recommend us",
              labels: [
                {one: "tool-11"},
                {two: "tool-12"},
                {three: "tool-13"},
                {four: "tool-14"},
                {five: "tool-15"}
              ],
              marks: [
                {one: "1"},
                {two: "2"},
                {three: "3"},
                {four: "4"},
                {five: "5"}
              ]
            }
          ]
        },
        {
          id: "2",
          questions: [
            {
              id: "4",
              Header: "How much do you like oranges?",
              labels: [
                {one: "tool-16"},
                {two: "tool-17"},
                {three: "tool-18"},
                {four: "tool-19"},
                {five: "tool-20"}
              ],
              marks: [
                {one: "1"},
                {two: "2"},
                {three: "3"},
                {four: "4"},
                {five: "5"}
              ]
            },
            {
              id: "5",
              Header: "How much do you like apples?",
              labels: [
                {one: "tool-21"},
                {two: "tool-22"},
                {three: "tool-23"},
                {four: "tool-24"},
                {five: "tool-25"}
              ],
              marks: [
                {one: "1"},
                {two: "2"},
                {three: "3"},
                {four: "4"},
                {five: "5"}
              ]
            },
            {
              id: "6",
              Header: "How much do you like grapes?",
              labels: [
                {one: "tool-26"},
                {two: "tool-27"},
                {three: "tool-28"},
                {four: "tool-29"},
                {five: "tool-30"}
              ],
              marks: [
                {one: "1"},
                {two: "2"},
                {three: "3"},
                {four: "4"},
                {five: "5"}
              ]
            }
          ]
        },
        {
          id: "3",
          questions: [
            {
              id: "7",
              Header: "How much do you like Ferrary?",
              labels: [
                {one: "tool-31"},
                {two: "tool-32"},
                {three: "tool-33"},
                {four: "tool-34"},
                {five: "tool-35"}
              ],
              marks: [
                {one: "1"},
                {two: "2"},
                {three: "3"},
                {four: "4"},
                {five: "5"}
              ]
            },
            {
              id: "8",
              Header: "How much do you like Mecedes?",
              labels: [
                {one: "tool-36"},
                {two: "tool-37"},
                {three: "tool-38"},
                {four: "tool-39"},
                {five: "tool-40"}
              ],
              marks: [
                {one: "1"},
                {two: "2"},
                {three: "3"},
                {four: "4"},
                {five: "5"}
              ]
            },
            {
              id: "9",
              Header: "How much do you like Porsche?",
              labels: [
                {one: "tool-41"},
                {two: "tool-42"},
                {three: "tool-43"},
                {four: "tool-44"},
                {five: "tool-45"}
              ],
              marks: [
                {one: "1"},
                {two: "2"},
                {three: "3"},
                {four: "4"},
                {five: "5"}
              ]
            }
          ]
        }
      ]
    }
  },
  components: {
    SurveyHandler
  },
  methods: {
    onFilled() {
      this.disabled = false
    },
    next() {
      this.back = false;
      this.currentIndex++;
    },
    prev() {
      this.back = true;
      this.currentIndex--;
    },
    onNextQuestion() {
      if (this.currentIndex === 2) return;
      this.currentIndex++;
    }
  },
}
</script>

<style>
html {
  height: 100%;
}
body {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#demo__overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

#demo {
  background-color: #fff;
  box-sizing: border-box;
  overflow: hidden;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 -3px 13px rgb(0 0 0 / 20%);
  border-radius: 6px;
  position: relative;
  padding-top: 15px;
}

#demo .h2 {
  font-size: 15px;
  line-height: 1.2;
  color: #000000;
  text-align: center;
  font-weight: 700;
}

.demo__shutter {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.demo__thumbs {
  width: 38px;
  margin: 0 auto;
  cursor: pointer;
}

.demo__thumbs svg .cls-1 {
  fill: #c7c7c7;
}

.demo__shutter:after, .demo__shutter:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  height: 2px;
  width: 15px;
  background-color: #abb2be;
}

.demo__shutter:after {
  transform: translate(-50%, -50%) rotate(45deg);
}

.demo__shutter:before {
  transform: translate(-50%, -50%) rotate(-45deg);
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

.div-slider {
  overflow: hidden;
  position: relative;
  min-height: 350px;
  width: 100%;
  margin: 0 auto;
  border-top: 1px solid #f7f7f7;
  border-bottom: 1px solid #f7f7f7;
}

.div-slider .card {
  position: absolute;
  height: 100px;
  width: 100%;
//background-color: #60adff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  flex-grow: 2;
  position: relative;
}

h1 {
  margin: 0;
}

.wrapper {
  overflow: hidden;
  height: 45px;
}

.process-button {
  background-color: #1c5a7d;
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  margin: 0 5px;
  cursor: pointer;
  transition: opacity .3s ease;
}

.process-button:disabled, .process-button:disabled:hover {
  opacity: .1;
}

.process-button:hover {
  opacity: .9;
}
</style>
