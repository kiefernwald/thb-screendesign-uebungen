// Work item component
Vue.component('work-item', {
  template: '\
    <div class="work">\
      <img v-bind:src="work.image_url">\
      <h3>{{ work.title }}</h3>\
      <p class="artist">({{ work.artist }})</p>\
    </div>',
    props: {
      work: {
        type: Object,
        required: true,
        validator: function (value) {
          return (value.title != undefined) 
            && (value.title != "")
            && (value.artist != undefined)
            && (value.artist != "");
        }
      }
    }
})