//instead of passing items using props we use slots

Vue.component('todo-item', {
  template: '#todo-item-template',
  data () {
    return {
      completed: false
    }
  }
})

new Vue ({
  el: '#app'
})