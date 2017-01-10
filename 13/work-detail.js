// Work-Detail component
Vue.component('work-detail', {
  template: '\
      <div class="selected">\
        <img v-bind:src="work.image_url">\
        <p><a href="#" v-on:click.prevent="closeDetails">Collection</a> / <a href="#">{{ work.title }}</a></p>\
        <h1>{{ work.title }}</h1>\
        <p><small>Erschaffen <em>{{ work.created }}</em> von <em>{{ work.artist }}</em></small></p>\
        <p class="description">{{ work.text }}</p>\
    </div>',
    props: {
      work: {
        type: Object,
        required: true
      }
    },
    methods: {
      closeDetails: function () {
        this.$emit("closed")
      }
    }
})