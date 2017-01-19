import Vue from 'vue'
import ReactiveData from './ReactiveExample.js'
import ReactiveProp from './ReactivePropExample.js'


Vue.component('react-data', ReactiveData)
Vue.component('react-prop', ReactiveProp)

Vue.component('child', {
  props: ['message', 'options'],
  template: '<span>{{ message }}{{ options }}</span>'
})


// グラフ表示のオプション
const graphOption = {
  responsive: true,
  // グラフタイトル
  title: {
    display: false
  },
  // 凡例
  legend: {
    position: 'right'
  },
}

new Vue({
  el: '#app',
  data : {
    graphData: {
        labels: [],
        datasets: []
    }
  },
  mounted () {
    setInterval(() => {
      this.fillData()
    }, 1000)
  },
  methods: {
   fillData () {
      this.graphData = {
        labels: ['January' + this.getRandomInt(), 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Data One',
            fill: false,
            backgroundColor: '#f87979',
            borderColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },

    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  },
  computed: {
    opt: function() {
      return graphOption
    }
  }
})
