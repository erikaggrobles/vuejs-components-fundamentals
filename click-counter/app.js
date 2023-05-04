Vue.component('click-counter', {
  template: '#click-counter-template',
  data() {
    return {
      count: 0
    }
  }
  //data option is not an object, it is a function that returns an object
  //so that the component can maintain an independant copy of the data object
}) 

new Vue({
  el: '#app'
})