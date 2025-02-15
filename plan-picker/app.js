let PlanPickerItemComponent = {
  template: '#plan-picker-item-template',
  props: {
    name: {
      type:String,
      required:true
    },
    selectedPlan: {
      type:String
    }
  },
  methods: {
    select() {
      this.$emit('select', this.name);
    }
  },
  computed: {
    isSelected () {
      return this.name === this.selectedPlan
    }
  }
}

let PlanPickerComponent =  {
  template: '#plan-picker-template',
  components: {
    PlanPickerItem: PlanPickerItemComponent
  },
  data () {
    return {
      plans: ["The Single", "The Curious", "The Addict"],
      selectedPlan: null
    }
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan
    }
  }
}

new Vue({
  el: '#app',
  components: {
    'plan-picker': PlanPickerComponent
  }
})