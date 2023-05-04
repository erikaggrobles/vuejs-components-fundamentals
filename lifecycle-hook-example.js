let BlogPostComponent = {
  props: ['id'],
  data () {
    return {
      blogPost: null
    }
  },
  created () { //runs when the component is created
    axios.get('api/posts/' + this.id).then(response => {
      this.blogPost = response.data;
    })
  } //this is still a function just like data, we have access to the components instance
}

