<template>
  <div id="app">
    <div id="demo">
      <h2 class="h2">{{ heading }}</h2>
      <transition-group tag="div" class="div-slider" :name="back? 'slideback' : 'slide'">
        <div v-if="currentIndex === 0" key="1">
          <div class="card">
            <SurveyHandler
              :surveys="surveys[0]"
            />
          </div>
        </div>
        <div v-if="currentIndex === 1" key="2">
          <div class="card">
            <SurveyHandler
              :surveys="surveys[1]"
              @onQuestionsFilled="onFilled"
            />
          </div>
        </div>
        <div v-if="currentIndex === 2" key="3">
          <div class="card">
            <SurveyHandler
              :surveys="surveys[2]"
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
      heading: 'Service process',
      /*surveys: {
        survey1: {
          id: '1',
          question1: {
            Header: "How satisfied are you with service process",
            label: {
              one: 'tool-1',
              two: 'tool-2',
              three: 'tool-3',
              four: 'tool-4',
              five: 'tool-5'
            },
            mark: {
              one: '1',
              two: '2',
              three: '3',
              four: '4',
              five: '5'
            }
          },
          question2: {
            Header: "How clear is the work of our services to you?",
            label: {
              one: 'tool-6',
              two: 'tool-7',
              three: 'tool-8',
              four: 'tool-9',
              five: 'tool-10'
            },
            mark: {
              one: '1',
              two: '2',
              three: '3',
              four: '4',
              five: '5'
            }
          },
          question3: {
            Header: "The likelihood that you will recommend us",
            label: {
              one: 'tool-11',
              two: 'tool-12',
              three: 'tool-13',
              four: 'tool-14',
              five: 'tool-15'
            },
            mark: {
              one: '1',
              two: '2',
              three: '3',
              four: '4',
              five: '5'
            }
          }
        },
        survey2: {
          id: '2',
          question1: {
            Header: "How much do you like oranges?",
            label: {
              one: 'tool-16',
              two: 'tool-17',
              three: 'tool-18',
              four: 'tool-19',
              five: 'tool-20'
            },
            mark: {
              one: '1',
              two: '2',
              three: '3',
              four: '4',
              five: '5'
            }
          },
          question2: {
            Header: "How much do you like apples?",
            label: {
              one: 'tool-21',
              two: 'tool-22',
              three: 'tool-23',
              four: 'tool-24',
              five: 'tool-25'
            },
            mark: {
              one: '1',
              two: '2',
              three: '3',
              four: '4',
              five: '5'
            }
          },
          question3: {
            Header: "How much do you like grapes?",
            label: {
              one: 'tool-26',
              two: 'tool-27',
              three: 'tool-28',
              four: 'tool-29',
              five: 'tool-30'
            },
            mark: {
              one: '1',
              two: '2',
              three: '3',
              four: '4',
              five: '5'
            }
          }
        },
        survey3: {
          id: '3',
          question1: {
            Header: "How much do you like Ferrary?",
            label: {
              one: 'tool-31',
              two: 'tool-32',
              three: 'tool-33',
              four: 'tool-34',
              five: 'tool-35'
            },
            mark: {
              one: '1',
              two: '2',
              three: '3',
              four: '4',
              five: '5'
            }
          },
          question2: {
            Header: "How much do you like Mecedes?",
            label: {
              one: 'tool-36',
              two: 'tool-37',
              three: 'tool-38',
              four: 'tool-39',
              five: 'tool-40'
            },
            mark: {
              one: '1',
              two: '2',
              three: '3',
              four: '4',
              five: '5'
            }
          },
          question3: {
            Header: "How much do you like Porsche?",
            label: {
              one: 'tool-41',
              two: 'tool-42',
              three: 'tool-43',
              four: 'tool-44',
              five: 'tool-45'
            },
            mark: {
              one: '1',
              two: '2',
              three: '3',
              four: '4',
              five: '5'
            }
          }
        }
      }*/
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
#demo {
  box-sizing: border-box;
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  box-shadow: 0 -3px 13px rgb(0 0 0 / 20%);
  border-radius: 6px;
}

#demo .h2 {
  font-size: 14px;
  line-height: 1.2;
  color: #8a8a8a;
  text-align: center;
  font-weight: 400;
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
  height: 400px;
  width: 100%;
  margin: 0 auto;
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
  /*margin-top: 70px;*/
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
