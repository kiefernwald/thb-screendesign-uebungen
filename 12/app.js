// Work component
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

// Work-Detail component
Vue.component('work-detail', {
  template: '\
    <div class="selected" v-on:click="closeDetails()">\
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

// Vue instance
var app = new Vue({
  el: '#app',
  data: {
    works: [
        {"title": "Die Nachtwache", "artist": "Rembrandt van Rijn", "created": "1642", "text": "Das Bild zeigt 34 Personen – davon 18 Schützen und 16 weitere Figuren. Im Vordergrund stehen der Hauptmann und sein Leutnant. Zwei hell erleuchtete Figuren in gelber Kleidung beherrschen den Bildaufbau: ein Mädchen im Mittelgrund und der Leutnant im Vordergrund.", "image_url": "works/rembrandt_nachtwache.jpg"},
        {"title": "Dienstmagd mit Milchkrug", "artist": "Jan Vermeer", "created": "1658-1660", "text": "Im Zentrum des Bildes steht die Frau im Lichteinfall durch ein Fenster auf der linken Seite. Vor ihr befindet sich im linken Bildvordergrund, unter ebendiesem Fenster, ein Tisch, bedeckt mit einem Tuch und bestückt mit einem Brotkorb, einer Kanne und weiteren Speisen. Zudem steht auf dem Tisch eine Schale, in die die Magd Milch eingießt. Ihr Blick ist gesenkt, auf die Tätigkeit konzentriert. Ihre Kleidung wurde in leuchtenden, bunten Farben gemalt. Das gelbe Oberteil steht dabei im Kontrast zum Blau der Schürze, unter der ein langer roter Rock hervorschaut. Der Raum im Hintergrund ist spartanisch eingerichtet, die Rückwand leer und mit erkennbaren Löchern versehen, was ihr den Anschein einer Benutzung über lange Zeit verleiht.", "image_url": "works/vermeer_dienstmagd.jpg"},
        {"title": "Selbstbildnis mit grauem Filzhut", "artist": "Vincent van Gogh", "created": "1887", "text": "Selbstbildnis Van Goghs mit hellem Filzhut, in braunem Überrock", "image_url": "works/gogh_selbstbildnis_filzhut.jpg"}
    ],
    selectedWork: null,
    filterText: '',
  },
  computed: {
      filteredWorks: function () {
        self = this;
        return self.works.filter(function (work) {
            return work.title.toLowerCase().indexOf(self.filterText.toLowerCase()) !== -1
        })
      }
  },
  methods: {
      selectWork: function (work) {
        this.selectedWork = work
      },
      closeDetails: function () {
        this.selectedWork = null
      }
  }
})