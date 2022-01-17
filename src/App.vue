<template>
  <div id="app">
    <div id="demo">
      <h2 class="h2">{{ heading }}</h2>
      <transition-group tag="div" class="div-slider" :name="back? 'slideback' : 'slide'">
        <div v-if="currentIndex === 0" key="1">
          <div class="card">
            <SurveyHandler
              :surveys="surveys.survey1"
            />
          </div>
        </div>
        <div v-if="currentIndex === 1" key="2">
          <div class="card">
            <SurveyHandler
              :surveys="surveys.survey2"
              @onQuestionsFilled="onFilled"
            />
          </div>
        </div>
        <div v-if="currentIndex === 2" key="3">
          <div class="card">
            <SurveyHandler
              :surveys="surveys.survey3"
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
      surveys: {
        survey1: {
          id: '1',
          question1: {
            Header: "How satisfied are you with service process",
            mark: {
              one: '1',
              two: '2',
              three: '3',
              four: '4',
              five: '5'
            },
            satisfactionLevel: {
              no: 'Very unsatisfied',
              yes: 'Very Satisfied'
            }
          },
          question2: {
            Header: "How clear is the work of our services to you?",
            mark: {
              one: '1',
              two: '2',
              three: '3',
              four: '4',
              five: '5'
            },
            satisfactionLevel: {
              no: 'Very unsatisfied',
              yes: 'Very Satisfied'
            }
          },
          question3: {
            Header: "The likelihood that you will recommend us",
            mark: {
              one: '1',
              two: '2',
              three: '3',
              four: '4',
              five: '5'
            },
            satisfactionLevel: {
              no: 'Very unsatisfied',
              yes: 'Very Satisfied'
            }
          }
        },
        survey2: {
          id: '2',
          question1: {
            Header: "How much do you like oranges?",
            mark: {
              one: '1',
              two: '2',
              three: '3',
              four: '4',
              five: '5'
            },
            satisfactionLevel: {
              no: 'Very unsatisfied',
              yes: 'Very Satisfied'
            }
          },
          question2: {
            Header: "How much do you like apples?",
            mark: {
              one: '1',
              two: '2',
              three: '3',
              four: '4',
              five: '5'
            },
            satisfactionLevel: {
              no: 'Very unsatisfied',
              yes: 'Very Satisfied'
            }
          },
          question3: {
            Header: "How much do you like grapes?",
            mark: {
              one: '1',
              two: '2',
              three: '3',
              four: '4',
              five: '5'
            },
            satisfactionLevel: {
              no: 'Very unsatisfied',
              yes: 'Very Satisfied'
            }
          }
        },
        survey3: {
          id: '3',
          question1: {
            Header: "How much do you like Ferrary?",
            mark: {
              one: '1',
              two: '2',
              three: '3',
              four: '4',
              five: '5'
            },
            satisfactionLevel: {
              no: 'Very unsatisfied',
              yes: 'Very Satisfied'
            }
          },
          question2: {
            Header: "How much do you like Mecedes?",
            mark: {
              one: '1',
              two: '2',
              three: '3',
              four: '4',
              five: '5'
            },
            satisfactionLevel: {
              no: 'Very unsatisfied',
              yes: 'Very Satisfied'
            }
          },
          question3: {
            Header: "How much do you like Porsche?",
            mark: {
              one: '1',
              two: '2',
              three: '3',
              four: '4',
              five: '5'
            },
            satisfactionLevel: {
              no: 'Very unsatisfied',
              yes: 'Very Satisfied'
            }
          }
        }
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
