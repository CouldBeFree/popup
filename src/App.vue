<template>
  <div id="app">
    <div id="demo__overlay">
      <div id="demo">
        <div class="demo__shutter"></div>
        <div class="demo__thumbs">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path class="cls-1" d="M240.9 299.66a36.06 36.06 0 0 0 7.1-25.08c-1.3-13.73-10.81-25.22-23.5-30a35.33 35.33 0 0 0-17.29-41.9 36.14 36.14 0 0 0 2.22-16.29c-1.74-18.17-17.84-32.4-36.67-32.4h-43.71a104.61 104.61 0 0 0-36.13 6.41l-9.59 3.51a107.84 107.84 0 0 1-37.28 6.62H13.84A13.84 13.84 0 0 0 0 184.35v159.83A13.84 13.84 0 0 0 13.84 358h16.92c39 0 49.62 24.44 60.39 59l1.64 5.23c4.71 14.8 16.17 24 29.91 24 20.54 0 37.25-16.71 37.24-36.57.06-1.28 1-25.3-11.17-51.61h64.43a35.89 35.89 0 0 0 35.72-39.37 34.81 34.81 0 0 0-8.02-19.02Zm-21.62 28a8.15 8.15 0 0 1-6.08 2.69h-89.13a13.84 13.84 0 0 0-10.79 22.5c20 24.93 19 55.2 19 56.11a9.58 9.58 0 0 1-9.57 9.57c-1.34 0-2.79-2.37-3.54-4.72l-1.59-5.07c-9.15-29.32-24.46-78.39-86.81-78.39h-3.09V198.19h18.38a135.53 135.53 0 0 0 46.8-8.3l9.59-3.51a77 77 0 0 1 26.61-4.72h43.67c4.64 0 8.73 3.3 9.11 7.35a8.22 8.22 0 0 1-8.17 9.07h-11a13.84 13.84 0 0 0 0 27.68h26.61c4.64 0 8.73 3.3 9.11 7.35a8.21 8.21 0 0 1-8.17 9.06h-11a13.84 13.84 0 0 0 0 27.68h32.08c4.64 0 8.72 3.3 9.11 7.36a8.2 8.2 0 0 1-8.16 9.05h-11a13.84 13.84 0 0 0 0 27.68h11c4.64 0 8.73 3.3 9.11 7.35a8.21 8.21 0 0 1-2.08 6.37ZM498.16 154h-16.92c-39 0-49.62-24.44-60.39-59l-1.64-5.22C414.5 75 403 65.8 389.3 65.8c-20.54 0-37.25 16.71-37.24 36.57-.06 1.28-1 25.3 11.17 51.61H298.8a35.89 35.89 0 0 0-35.72 39.37 34.79 34.79 0 0 0 8 19 36.09 36.09 0 0 0-7.08 25.08c1.3 13.72 10.81 25.2 23.5 30a35.33 35.33 0 0 0 17.28 41.9 36.26 36.26 0 0 0-2.21 16.29c1.74 18.17 17.84 32.4 36.67 32.4h43.67a104.89 104.89 0 0 0 36.14-6.41l9.57-3.51a108 108 0 0 1 37.28-6.62h32.22A13.84 13.84 0 0 0 512 327.65V167.82A13.84 13.84 0 0 0 498.16 154Zm-13.84 159.81h-18.38a135.62 135.62 0 0 0-46.8 8.3l-9.57 3.51a77.28 77.28 0 0 1-26.61 4.72h-43.68c-4.64 0-8.73-3.3-9.11-7.35a8.21 8.21 0 0 1 8.17-9.06h11a13.84 13.84 0 0 0 0-27.68h-26.6c-4.64 0-8.73-3.3-9.11-7.36a8.21 8.21 0 0 1 8.17-9.06h11a13.84 13.84 0 0 0 0-27.68h-32.1c-4.64 0-8.72-3.3-9.11-7.36a8.2 8.2 0 0 1 8.16-9.05h11a13.84 13.84 0 1 0 0-27.68h-11c-4.64 0-8.73-3.3-9.11-7.36a8.21 8.21 0 0 1 8.17-9.06h89.13a13.83 13.83 0 0 0 10.79-22.5c-20-24.92-19-55.2-19-56.11a9.58 9.58 0 0 1 9.57-9.57c1.34 0 2.79 2.37 3.54 4.72l1.59 5.07c9.15 29.32 24.45 78.4 86.81 78.4h3.09Z"/></svg>
        </div>
        <h2 class="h2">{{ heading }}</h2>
        <transition-group tag="div" class="div-slider" :name="back ? 'slideback' : 'slide'">
          <h3 class="h3">{{ subHeading }}</h3>
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
      subHeading: 'Service process',
      surveys: [
        {
          id: "1",
          questions: [
            {
              id: "1",
              header: "How satisfied are you with service process",
              labels: [
                {index: "tool-1", mark: "1"},
                {index: "tool-2", mark: "2"},
                {index: "tool-3", mark: "3"},
                {index: "tool-4", mark: "4"},
                {index: "tool-5", mark: "5"}
              ]
            },
            {
              id: "2",
              header: "How clear is the work of our services to you?",
              labels: [
                {index: "tool-6", mark: "1"},
                {index: "tool-7", mark: "2"},
                {index: "tool-8", mark: "3"},
                {index: "tool-9", mark: "4"},
                {index: "tool-10", mark: "5"}
              ]
            },
            {
              id: "3",
              header: "The likelihood that you will recommend us",
              labels: [
                {index: "tool-11", mark: "1"},
                {index: "tool-12", mark: "2"},
                {index: "tool-13", mark: "3"},
                {index: "tool-14", mark: "4"},
                {index: "tool-15", mark: "5"}
              ]
            }
          ]
        },
        {
          id: "2",
          questions: [
            {
              id: "4",
              header: "How much do you like oranges?",
              labels: [
                {index: "tool-16", mark: "1"},
                {index: "tool-17", mark: "2"},
                {index: "tool-18", mark: "3"},
                {index: "tool-19", mark: "4"},
                {index: "tool-20", mark: "5"}
              ]
            },
            {
              id: "5",
              header: "How much do you like apples?",
              labels: [
                {index: "tool-21", mark: "1"},
                {index: "tool-22", mark: "2"},
                {index: "tool-23", mark: "3"},
                {index: "tool-24", mark: "4"},
                {index: "tool-25", mark: "5"}
              ]
            },
            {
              id: "6",
              header: "How much do you like grapes?",
              labels: [
                {index: "tool-26", mark: "1"},
                {index: "tool-27", mark: "2"},
                {index: "tool-28", mark: "3"},
                {index: "tool-29", mark: "4"},
                {index: "tool-30", mark: "5"}
              ]
            }
          ]
        },
        {
          id: "3",
          questions: [
            {
              id: "7",
              header: "How much do you like Ferrary?",
              labels: [
                {index: "tool-31", mark: "1"},
                {index: "tool-32", mark: "2"},
                {index: "tool-33", mark: "3"},
                {index: "tool-34", mark: "4"},
                {index: "tool-35", mark: "5"}
              ]
            },
            {
              id: "8",
              header: "How much do you like Mecedes?",
              labels: [
                {index: "tool-36", mark: "1"},
                {index: "tool-37", mark: "2"},
                {index: "tool-38", mark: "3"},
                {index: "tool-39", mark: "4"},
                {index: "tool-40", mark: "5"}
              ]
            },
            {
              id: "9",
              header: "How much do you like Porsche?",
              labels: [
                {index: "tool-41", mark: "1"},
                {index: "tool-42", mark: "2"},
                {index: "tool-43", mark: "3"},
                {index: "tool-44", mark: "4"},
                {index: "tool-45", mark: "5"}
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

</style>
